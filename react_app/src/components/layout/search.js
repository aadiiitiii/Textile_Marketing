import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import bg from './images/bg.jpg';

const styles = theme => ({
  root: {
    width: '100%',
    height: '150px'
  },
  center: {
    alignItems: 'center',
    marginTop: 60,
    paddingTop: '45px',
    height: 'inherit',
    background: `URL(${bg})`,
    backgroundSize: 'fill',
    // backgroundColor: 'rgba(0,0,0,0.1)'
    backgroundPosition: 'center'

    // height:'160px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    borderRadius: '20px',
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    borderRadius: '20px',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    fontSize: '25px',
    color: 'white',
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    [theme.breakpoints.up('md')]: {
      height: 50,
      width: 600
    }
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.center}
          style={{ opacity: '.89' }}
        >
          <Toolbar>
            {/* <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Material-UI
            </Typography> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={event => {
                  this.setState({ search: event.target.value });
                }}
                onKeyDownCapture={event => {
                  const { setSearch, history } = this.props;
                  const { search } = this.state;
                  const code = event.keyCode ? event.keyCode : event.which;
                  if (code === 13) {
                    setSearch(search);
                    if(history) history.push('/product_catalog')
                  }
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Search.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
