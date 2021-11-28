import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    width: '100%'
  },
  main: {
    width: '100%',
    display: 'block', // Fix IE 11 issue.

    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 300,
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    padding: '9px',
    width: '100%', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginTop: theme.spacing.unit
  },
  formcontrol: {
    width: '100%'
  },

  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class ForgotPassword extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.reRoute = this.reRoute.bind(this);
  }

  reRoute(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />

        <div className={classes.form} style={{ marginTop: '100px' }}>
          <div
            style={{
              marginBottom: '50px',
              marginRight: '-100px',
              marginLeft: '-50px'
            }}
          >
            <Typography variant="h4">Forgot Password ?</Typography>
          </div>

          <TextField
            style={{ marginBottom: '30px' }}
            id="emailId"
            label="Email Id"
            variant="outlined"
            autofocus="true"
            margin="normal"
            className={classes.textField}
          />
          <Button variant="contained" color="primary" style={{backgroundColor:"#212121"}}>
            GET OTP
          </Button>
        </div>
      </main>
    );
  }
}

ForgotPassword.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ForgotPassword);
