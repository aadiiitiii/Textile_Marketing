import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Chip, Button } from '@material-ui/core';
import { TwitterShareButton } from 'react-twitter-embed';
import Checkcirlce from '@material-ui/icons/CheckCircle';
import Location from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/PermPhoneMsg';
import Email from '@material-ui/icons/Email';
import Weblink from '@material-ui/icons/Link';
import handi from './images/handi.jpg'
import cotton from './images/cotton.jpg';
import silk from './images/silk.jpg';
import wool from './images/wool.jpeg';
import jute from './images/jute.jpg';
import handloom from './images/handloom.gif';
import denim from './images/denim.jpg';


const imgdata=[handi,cotton,silk,wool,jute,handloom,denim]; 

const styles = theme => ({
  content: {
    display: 'flex',
    height: 'auto',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  contentmedia: {
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing.unit * 4
      // marginLeft: theme.spacing.unit * 4, marginTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '30vw',
      marginLeft: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
    }
  },
  rating: {
    marginRight: theme.spacing.unit * 2
  },
  contentdetail: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: theme.spacing.unit * 8
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      width: '30vw',
      marginTop: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 8,
      marginRight: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
      // backgroundColor: '#212121'
    }
  },
  companydetails: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: theme.spacing.unit * 2
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
      width: 'auto'
      // backgroundColor: '#212121'
    }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  button_margin: {
    margin: theme.spacing.unit * 2
  },
  image_size: {
    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      height: '50vw',
      margin: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      width: '30vw',
      height: '30vw',
      margin: 'auto'
    }
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class Productdiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleBuy = this.handleBuy.bind(this);
  }

  handleBuy() {
    const { maindata } = this.props;
    console.log(maindata.spec_data.cost);
    const headers = {
      'X-Api-Key': 'test_91b0fdccac9818ea0fef869431b',
      'X-Auth-Token': 'test_5af0d5689cb432c73a8dc0070ee'
    };
    const payload = {
      purpose: `Textile World ${maindata.name} payment`,
      amount: maindata.spec_data.cost,
      redirect_url: 'http://localhost:8080/',
      send_email: true,
      email: 'sushrutshimpi@gmail.com',
      allow_repeated_payments: true
    };

    axios
      .post('https://test.instamojo.com/api/1.1/payment-requests/', payload, {
        headers
      })
      .then(res => {
        if (res.status === 201 && res.data) {
          window.location.href = res.data.payment_request.longurl;
        } else console.log(res);
      });
  }

  render() {
    const { classes, theme, maindata } = this.props;

    console.log(maindata);
    const key = Object.keys(maindata.spec_data);

    return (
      <div className={classes.content}>
        <div className={classes.contentmedia}>
          <img src={handi} alt="Not availabe" className={classes.image_size} />
        </div>
        <div className={classes.contentdetail}>
          <Typography
            variant="h4"
            align="center"
            style={{ marginRight: theme.spacing.unit * 8 }}
          >
            {maindata.name}
          </Typography>
          <Typography
            variant="h6"
            align="left"
            color="textSecondary"
            style={{ marginRight: theme.spacing.unit * 8 }}
          >
            Rating : {Math.round(maindata.rating)}/5
          </Typography>
          {key.map(data => (
            <Typography variant="h6" color="textSecondary" align="left">
              {data} : {maindata.spec_data[data]}
            </Typography>
          ))}
        </div>
        <div />
        <div className={classes.companydetails}>
          <Typography
            variant="h4"
            align="center"
            style={{
              marginBottom: theme.spacing.unit
            }}
          >
            Seller name
            <Chip
              icon={<Checkcirlce style={{ color: '#2e7d32' }} />}
              label="Verified"
              style={{
                marginLeft: theme.spacing.unit * 2
              }}
            />
          </Typography>
          <Typography variant="h6" align="center">
            Get in touch with us!
          </Typography>
          <div className={classes.button_margin}>
            <Chip
              icon={<Location style={{ margin: theme.spacing.unit }} />}
              label="Our Location"
              clickable
              style={{
                // marginLeft: theme.spacing.unit *2,
                width: 'auto',
                height: '3vw',
                fontSize: 'large'
              }}
            />
          </div>
          <div className={classes.button_margin}>
            <Chip
              icon={<Phone style={{ margin: theme.spacing.unit }} />}
              label="02027283356"
              clickable
              style={{
                // marginLeft: theme.spacing.unit *2,
                width: 'auto',
                height: '3vw',
                fontSize: 'large'
              }}
            />
          </div>
          <div className={classes.button_margin}>
            <Chip
              icon={<Email style={{ margin: theme.spacing.unit }} />}
              label="abcdefsad@textile.com"
              clickable
              style={{
                // marginLeft: theme.spacing.unit *2,
                width: 'auto',
                height: '3vw',
                fontSize: 'large'
              }}
            />
          </div>
          <div className={classes.button_margin}>
            <Chip
              icon={<Weblink style={{ margin: theme.spacing.unit }} />}
              label="www.textileworld.com"
              clickable
              style={{
                // marginLeft: theme.spacing.unit *2,
                width: 'auto',
                height: '3vw',
                fontSize: 'large'
              }}
            />
          </div>
          <div className={classes.button_margin}>
            <TwitterShareButton
              url=""
              options={{
                text: `#sih2019 #TextileWorld localhost:3000/api/products/${
                  maindata.id
                }`,
                via: 'TextileWorld_19'
              }}
            />
            <Button
              variant="contained"
              onClick={this.handleBuy}
              color="primary"
              style={{ marginTop: '20px', marginRight: '30px' }}
            >
              BUY
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Productdiv.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Productdiv);
