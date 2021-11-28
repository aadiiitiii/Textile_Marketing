import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    width: '100%'
  },
  main: {
    width: '100%',
    display: 'block', // Fix IE 11 issue.

    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 300,
      width: 'auto',
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
    backgroundColor: theme.palette.secondary.main
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

class Faqsask extends React.Component {
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
              margin: 'auto'
            }}
          >
            <Typography variant="h3">Have some doubts?</Typography>
          </div>
          <div>
            <Button
              style={{
                marginRight: '10px',
                backgroundColor: '#212121',
                margin: '2vw'
              }}
              variant="contained"
              color="primary"
              onClick={() => {
                this.reRoute('/faqsbuyer');
              }}
            >
              I am a BUYER
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#212121', margin: '2vw' }}
              onClick={() => {
                this.reRoute('/faqsseller');
              }}
            >
              I am an ARTISAN
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#212121', margin: '2vw' }}
              onClick={() => {
                this.reRoute('/faqsdesign');
              }}
            >
              I am a DESIGNER
            </Button>
          </div>
        </div>
      </main>
    );
  }
}

Faqsask.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faqsask);
