import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import { Hidden, Menu, IconButton, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/logo.png';

const ITEM_HEIGHT = 60;
class Header extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.reRoute = this.reRoute.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },

    input: {
      display: 'none'
    },
    appBar: {
      position: 'static'
    },
    toolbarTitle: {
      flex: 'auto',
      textAlign: 'left'
    }
  });

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleSignout() {
    const { setUser, history, user } = this.props;

    console.log('logout');
    axios
      .post('http://localhost:8080/api/user/logout', null, {
        params: {
          access_token: user.token
        }
      })
      .then(res => {
        if (res.status === 204) {
          setUser({});
          history.push('/');
        } else console.log(res);
      })
      .catch(console.log);
  }

  reRoute(event, path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { anchorEl } = this.state;
    const { user } = this.props;

    const open = Boolean(anchorEl);
    return (
      <div>
        
        <AppBar
          position="fixed"
          color="default"
          style={{
            backgroundColor: '#212121'
          }}
        >
          <Toolbar
            position="static"
            style={{ justifyContent: 'space-between' }}
          >
            {/* <Typography
              variant="h6"
              noWrap
              style={{
                flex: 'auto',
                textAlign: 'left',
                color: 'white'
              }}
            >
              The Textile Company
            </Typography> */}
            <img
              src={logo}
              alt="Not availabe"
              style={{ width: '150px', height: 'auto', marginRight: '30vw' }}
            />
            <Hidden smDown>
              <div id="google_translate_element"></div>
              <Button
                style={{
                  marginRight: '20px',
                  marginLeft: '20px',
                  color: 'white'
                }}
                onClick={event => {
                  this.reRoute(event, '/');
                }}
              >
                Home
              </Button>
              <Button
                style={{
                  marginRight: '20px',
                  marginLeft: '20px',
                  color: 'white'
                }}
                onClick={event => {
                  this.reRoute(event, '/product_catalog');
                }}
              >
                Product
              </Button>
              {user.data && ( (user.data.realm === 'designer'))  ? (
                <Button
                  style={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    color: 'white'
                  }}
                  onClick={event => {
                    this.reRoute(event, '/dashboarddesigner');
                  }}
                >
                  Dashboard
                </Button>
              ) : (
                ''
              )}
              {user.data && ((user.data.realm === 'artisan') )  ? (
                <Button
                  style={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    color: 'white'
                  }}
                  onClick={event => {
                    this.reRoute(event, '/dashboardartisan');
                  }}
                >
                  Dashboard
                </Button>
              ) : (
                ''
              )}
               {(user.data )&& (user.data.realm === 'artisan')   ? (
                <Button
                  style={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    color: 'white'
                  }}
                  onClick={event => {
                    this.reRoute(event, '/designercatalog');
                  }}
                >
                  List Designers
                </Button>
              ) : (''
                              )}
              {(user.data )&& (user.data.realm === 'designer')   ? (
                <Button
                style={{
                  marginRight: '20px',
                  marginLeft: '20px',
                  color: 'white'
                }}
                onClick={event => {
                  this.reRoute(event, '/artisancatalog');
                }}
              >
                List Artisans
              </Button>

              ):('')}
              <Button
                style={{
                  marginRight: '20px',
                  marginLeft: '20px',
                  color: 'white'
                }}
                onClick={event => {
                  this.reRoute(event, '/faqsask');
                }}
              >
                FAQ
              </Button>
              {user.token ? (
                <Button
                  variant="outlined"
                  style={{
                    // marginRight: '20px',
                    marginLeft: '20px',
                    backgroundColor: 'white'
                  }}
                  onClick={this.handleSignout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  style={{
                    // marginRight: '20px',
                    marginLeft: '20px',
                    backgroundColor: 'white'
                  }}
                  onClick={event => {
                    this.reRoute(event, '/signin');
                  }}
                >
                  Login
                </Button>
              )}
            </Hidden>
            <Hidden mdUp>
              <IconButton
                aria-label="More"
                aria-haspopup="true"
                onClick={this.handleClick}
                style={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200
                  }
                }}
              >
                <MenuItem
                  key="Home"
                  onClick={event => {
                    this.handleClose(event);
                    this.reRoute(event, '/');
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  key="Product Catalog"
                  onClick={event => {
                    this.handleClose(event);
                    this.reRoute(event, '/product_catalog');
                  }}
                >
                  Product Catalog
                </MenuItem>
                {user.data && user.data.realm === 'seller' ? (
                  <MenuItem
                    key="Support"
                    onClick={event => {
                      this.handleClose(event);
                      this.reRoute(event, '/sellerdashboard');
                    }}
                  >
                    Dashboard
                  </MenuItem>
                ) : (
                  ''
                )}
                <MenuItem
                  key="Support"
                  onClick={event => {
                    this.handleClose(event);
                    this.reRoute(event, '/faqsask');
                  }}
                >
                  FAQ
                </MenuItem>
                {user.token ? (
                  <MenuItem key="Login" onClick={this.handleSignout}>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem
                    key="Login"
                    onClick={event => {
                      this.handleClose(event);
                      this.reRoute(event, '/signin');
                    }}
                  >
                    Login
                  </MenuItem>
                )}
              </Menu>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withRouter(Header);
