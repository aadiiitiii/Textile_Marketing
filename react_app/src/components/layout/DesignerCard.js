/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, CardHeader, Chip, Modal } from '@material-ui/core';
import Checkcirlce from '@material-ui/icons/CheckCircle';
import { TwitterShareButton } from 'react-twitter-embed';
import Contact from './images/contact.png';
import handi from './images/handi.jpg';

const styles = theme => ({
  root: {
    align: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2vw',
    display: 'flex'
    // Maxwidth: '40vw'
    // position:'relative', alignItems: 'center',    backgroundColor:'grey',
  },

  chip: {
    color: '#2e7d32'
  },

  card_mob: {
    // Maxwidth:'80vw',
    // MinWidth:'60vw',
    margin: '5px',

    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80vw'
      // marginLeft: theme.spacing.unit * 4, marginTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: '20vw'
    }
  },
  media_mob: {
    margin: 'auto',

    [theme.breakpoints.down('xs')]: {
      width: '50vw',
      height: '50vw'
      // marginLeft: theme.spacing.unit * 4, marginTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.up('sm')]: {
      width: '15vw',
      height: '15vw'
    }
  },
  productoverview_mob: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto'
    // backgroundColor:'grey',
  },
  companycontent_mob: {
    align: 'center',
    margin: 'auto'
  },
  companydetails_mob: {
    backgroundColor: '#fafafa',
    width: '100%',
    display: 'flex',
    height: 'auto'
  }
});

class ArtisanCard extends React.Component {
  state = {
    hover: false,
    modalState: false
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  modalOpen = () => {
    this.setState({ modalState: true });
  };

  modalClose = () => {
    this.setState({ modalState: false });
  };

  render() {
    const { classes, carddata, alldata, history, theme, user } = this.props;
    const { hover, modalState } = this.state;
    console.log(carddata.id);
    return (
      <div className={classes.root}>
        <Card
          className={classes.card_mob}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
         // raised={hover}
         // onClick={this.modalOpen}
        >
          <CardHeader title={carddata.name} subheader="Copyrights Reserved." />
          <CardMedia className={classes.media_mob} image={Contact} />
          <div className={classes.productoverview_mob}>
            <CardContent>
              <Typography variant="h5" align="center">
                Email: {carddata.email}
              </Typography>
              <Typography variant="subtitle1" align="center">
                Mobile-number: {carddata['mobile-number']}
              </Typography>
            </CardContent>
          </div>

          <div className={classes.companydetails_mob}>
            <CardContent className={classes.companycontent_mob}>
              <div>
                <Chip
                  icon={<Checkcirlce className={classes.chip} />}
                  label="Verified"
                  className={classes.chip}
                />
              </div>
              <div style={{ margin: theme.spacing.unit }}>
                <TwitterShareButton
                  options={{
                    text: `#sih2019 #TextileWorld localhost:3000/api/products/${
                      carddata.id
                    }`,
                    via: 'TextileWorld_19'
                  }}
                />
              </div>
            </CardContent>
          </div>
        </Card>

        {/* <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalState}
          onClose={this.modalClose}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto'
          }}
        >
          <div style={{ backgroundColor: '#fff' }}>
            <Typography variant="h4" align="center">
              Skill Sets
            </Typography>
            <Typography variant="h5" align="center">
              Embroidered
            </Typography>
            {carddata.embroidered.map(val => (
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
              >
                {val}
              </Typography>
            ))}
            <Typography variant="h5" align="center">
              Dyed
            </Typography>
            {carddata.dyed.map(val => (
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
              >
                {val}
              </Typography>
            ))}
            <Typography variant="h5" align="center">
              Printed
            </Typography>
            {carddata.printed.map(val => (
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
              >
                {val}
              </Typography>
            ))}
            <Typography variant="h5" align="center">
              HandWoven
            </Typography>
            {carddata.handWoven.map(val => (
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
              >
                {val}
              </Typography>
            ))}
          </div>
        </Modal> */}
      </div>
    );
  }
}

ArtisanCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ArtisanCard);
