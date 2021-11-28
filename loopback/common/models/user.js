'use strict';

var config = require('../../server/config.json');
var path = require('path');

var senderAddress = '"Textile App" <no.reply.textile@gmail.com>';

module.exports = function(User) {
  // send verification email after registration
  User.afterRemote('create', function(context, user, next) {
    console.log('create>>afterRemote Triggered.');
    var options = {
      type: 'email',
      mailer: User.app.models.Email,
      to: user.email,
      from: senderAddress,
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/api/user/confirm',
      user: user,
    };

    user.verify(options, function(err, response) {
      if (err) {
        User.deleteById(user.id);
        return next(err);
      }
      context.res.status(200).json({
        title: 'Signed up successfully',
        content:
          'Please check your email and click on the verification link ' +
          'before logging in.',
        response: response,
        redirectTo: '/',
        redirectToLinkText: 'Log in',
      });
    });
  });

  // send password reset link when requested
  User.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/api/reset-password';
    var html =
      'Click <a href="' +
      url +
      '?access_token=' +
      info.accessToken.id +
      '">here</a> to reset your password';

    User.app.models.Email.send(
      {
        to: info.email,
        from: senderAddress,
        subject: 'Password reset',
        html: html,
      },
      function(err) {
        if (err)
          return context.res
            .status(500)
            .json({staus: 500, content: 'Internal Server Error'});
        else
          return context.res
            .status(200)
            .json({
              status: 200,
              msg: 'Reset link send to email' + info.email,
            });
      }
    );
  });
};
