/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  CardMedia,
  CardHeader,
  Chip,
  Modal,
  Link,
  Button,
  Switch,
  TextField
} from '@material-ui/core';
import Checkcirlce from '@material-ui/icons/CheckCircle';
// import MainProduct from './MainProduct';
import handi from './images/handi.jpg';

function getModalStyle() {
  const top = 10;
  const left = 0;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translateY(-${top}%) translateY(-${left}%)`
  };
}

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
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
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

class SellerCard extends React.Component {
  state = {
    hover: false,
    modalState: false,
    bidstatus: false,
    mincost: 0
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

  bidChange = name => event => {
    this.setState({ bidstatus: event.target.checked });
  };

  mincostChange = name => event => {
    this.setState({
      mincost: event.target.value
    });
  };

  addtobidtable = () => {
    const { carddata } = this.props;

    const data = {};
    data['mincost'] = this.state.mincost;
    data['currentcost'] = this.state.mincost;
    data['active'] = this.state.bidstatus;
    data['productsId'] = carddata.id;
    console.log(carddata.id);
    
    let id = '';
    //console.log(data);
    axios
      .get(
        `http://localhost:8080/api/bids?filter=%7B%22where%22%3A%7B%22productsId%22%3A%22${carddata.id}%22%7D%7D`,
        {}
      )
      .then(res => {
        console.log(res);
        // on success
        if (res.data[0]) {
          data['id'] = res.data[0].id;
          console.log(data)
          axios
            .put('http://localhost:8080/api/bids',  data )
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          axios
            .post('http://localhost:8080/api/bids',  data )
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
       
      });
  };

  render() {
    const { classes, carddata, alldata, theme } = this.props;
    const { hover, modalState } = this.state;
    console.log(this.state.bidstatus);
    return (
      <div className={classes.root}>
        <Card
          className={classes.card_mob}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          raised={hover}
        >
          <CardHeader title={carddata.name} subheader="Copyrights Reserved." />
          <CardMedia className={classes.media_mob} image={handi} />
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
                <Link component="button" variant="body2">
                  Edit Information
                </Link>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    margin: 'auto',
                    backgroundColor: '#212121',
                    color: '#fafafa'
                  }}
                  onClick={this.modalOpen}
                >
                  Put for bid
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalState}
          onClose={this.modalClose}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            width: 'auto',
            margin: 'auto'
          }}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h4" id="modal-title" align="center">
              Put the Product for Bid
            </Typography>
            <Typography variant="h6" id="modal-title" align="center">
              Activate Bid
              <Switch
                checked={this.state.bidstatus}
                onChange={this.bidChange('bidstatus')}
                value="bidstatus"
              />
            </Typography>
            <TextField
              id="filled-number"
              label="MinimumCost"
              align="center"
              value={this.state.mincost}
              disabled={!this.state.bidstatus}
              onChange={this.mincostChange()}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              style={{ margin: 'auto' }}
              margin="normal"
              variant="filled"
            />
            <div style={{ margin: theme.spacing.unit }}>
              <Button
                variant="contained"
                style={{
                  margin: 'auto',
                  backgroundColor: '#212121',
                  color: '#fafafa'
                }}
                onClick={()=>this.addtobidtable()}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SellerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SellerCard);
