import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 'auto',
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    width: '150%',
    height: 'auto',
    marginLeft: '-20%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class SignUpBuyer extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const { user } = this.state;
    const obj = user ? { ...user } : {};
    obj[event.target.id] = event.target.value;
    this.setState({ user: obj });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log('register');

    const { user } = this.state;
    const { username, password, email, ...profile } = user;
    const { history } = this.props;

    axios
      .post('http://localhost:8080/api/profiles', { realm: 'buyer', email, ...profile })
      .then(resProfile => {
        if (resProfile.status === 200) {
          axios.post('http://localhost:8080/api/user', {
            realm: 'buyer',
            username,
            password,
            email,
            profileId: resProfile.data.id
          }).then(resUser => {
            if(resUser.status === 200) {
              history.push('/')
            } else console.log(resUser);
          });
        } else {
          console.log(resProfile);
        }
      })
      .catch(console.log);
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up for Buyers!
          </Typography>
          <form style={{ padding: '0px' }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="mobile-number"
              label="Mobile Number"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="address"
              label="Address"
              multiline
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="state"
              label="State"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />
            <TextField
              id="zipcode"
              label="Pin Code"
              variant="outlined"
              autoFocus
              margin="normal"
              className={classes.textField}
              onChange={this.handleOnChange}
            />

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px', backgroundColor: '#212121' }}
              onClick={this.handleOnSubmit}
            >
              REGISTER
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUpBuyer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpBuyer);