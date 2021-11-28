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
import handi from './images/handi.jpg'
import cotton from './images/cotton.jpg';
import silk from './images/silk.jpg';
import wool from './images/wool.jpeg';
import jute from './images/jute.jpg';
import handloom from './images/handloom.gif';
import denim from './images/denim.jpg';


const imgdata=[handi,cotton,silk,wool,jute,handloom,denim]; 

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

class SimpleCard extends React.Component {
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
    const { classes, carddata, alldata, history, theme, val } = this.props;
    const { hover, modalState } = this.state;
    const urllink = `http://localhost:3000/api/products/${carddata.id}/${val}`;
    console.log(carddata.id);
    return (
      <div className={classes.root}>
        <Card
          className={classes.card_mob}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          raised={hover}
          onClick={() => {
            history.push(`/product/${carddata.id}`);
          }}
        >
          <CardHeader title={carddata.name} subheader="Copyrights Reserved." />
          <CardMedia className={classes.media_mob} image={imgdata[val]} />
          <div className={classes.productoverview_mob}>
            <CardContent>
              <Typography variant="h5" align="center">
                Price: Rs.{carddata.spec_data.cost}
              </Typography>
              <Typography variant="subtitle1" align="center">
                Color: {carddata.spec_data.color}
              </Typography>
              <Typography variant="subtitle1" align="center">
                Rating: {Math.round(carddata.rating)}/5
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
                    text: `#sih2019 #TextileWorld localhost:3000/api/products/${carddata.id}`,
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
          <MainProduct alldata={alldata} maindata={carddata} />
        </Modal> */}
      </div>
    );
  }
}

SimpleCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SimpleCard);
