import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import { RadioGroup, Radio, Fab } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  div_position: {
    height: '2vw',
    width: '2vw',
    // backgroundColor: '#212121',
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  },
  fab: {
    margin: theme.spacing.unit,
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6
  },
  button: {
    width: '100%'
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    color: '#212121',

    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    backgroundColor: 'white'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#212121'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realm: '', username: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { realm, username, password } = this.state;
    const { setUser, history } = this.props;

    axios
      .post('http://localhost:8080/api/user/login', {
        realm,
        username,
        password
      })
      .then(res => {
        axios
          .get(`http://localhost:8080/api/user/${res.data.userId}`, {
            params: {
              access_token: res.data.id
            }
          })
          .then(info => {
            setUser({
              token: res.data.id,
              data: info.data
            });
            history.goBack();
          });
      })
      .catch(console.log);
  }

  // onClick() {
  //   if (this.state.password !== '' && this.state.username !== '') {
  //     alert('Succes');
  //   } else {
  //     alert('Please fill all the fields');
  //   }
  // }

  handleChange(event) {
    const obj = {};
    obj[event.target.id] = event.target.value;
    // eslint-disable-next-line no-console
    console.log(`${event.target.id}:${event.target.value}`);
    this.setState(obj);
  }

  render() {
    const { classes, history } = this.props;
    const { value } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.div_position}>
          <Fab
            color="primary"
            aria-label="Add"
            className={classes.fab}
            onClick={() => {history.push('/chat')}}
          >
            <MessageIcon />
          </Fab>
        </div>
        <Paper className={classes.paper} square={false}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              id="username"
              label="Username"
              className={classes.textField}
              onChange={this.handleChange}
              name="username"
              autoFocus
              margin="normal"
              variant="outlined"
            />

            <TextField
              onChange={this.handleChange}
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              variant="outlined"
              margin="normal"
            />
            <FormControl className={classes.formcontrol}>
              <RadioGroup
                style={{
                  flexDirection: 'row',
                  marginLeft: '50px',
                  marginBottom: '20px',
                  marginTop: '20px '
                }}
                value={value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="designer"
                  control={<Radio id="realm" color="primary" />}
                  label="I'm a Designer"
                />
                <FormControlLabel
                  value="buyer"
                  control={<Radio id="realm" color="primary" />}
                  label="I'm a Buyer"
                />
                <FormControlLabel
                  value="artisan"
                  control={<Radio id="realm" color="primary" />}
                  label="I'm an Artisan"
                />
              </RadioGroup>
            </FormControl>
          </form>
          <Button
            variant="contained"
            className={classes.formcontrol}
            color="primary"
            onClick={this.onClick}
            style={{ backgroundColor: '#212121' }}
          >
            LOG IN
          </Button>
          <FormGroup row>
            <FormHelperText style={{ margin: '10px' }}>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </FormHelperText>

            <FormHelperText style={{ margin: '10px' }}>
              <Link to="/register">Not a member yet?</Link>
            </FormHelperText>
          </FormGroup>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
