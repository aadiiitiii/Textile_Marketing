import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import vuu from './images/vuu.JPG'
import sushi from './images/sushrut.jpg'
import shivaji from './images/shivaji.jpg'
import gau from './images/gaurav.JPG'
import oju from './images/oju.JPG'
import adi from './images/aditi.JPG'

const styles = {
  card: {
    maxWidth: 1000,
    color: 'black',
    height: 'auto'
  },
  media: {
    maxHeight: 200,
    maxWidth: 300,
    minWidth: 150,
    minHeight: 200
    // transform: 'translate(160%,0%)'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    // overflow: 'hidden',
    // backgroundColor: 'black',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    padding: '30px',
    margin: '0'
    // transform:'translate(50%,0%)'
  },
  paper: {
    width: '100%',
    padding: '30px'
  }
};
const tileData = [
  {
    img: vuu,
    title: 'Deepakumar V U',
    cols: 2,
    description: 'Contact:   9403659628',
    email:'Email:   deepakumarvu@gmail.com'
  },
  {
    img: sushi,
    title: 'Sushrut Shimpi',
    cols: 2,
    description: 'Contact:   9604411909',
    email:'Email:   sushrutshimpi@gmail.com'
  },
  {
    img: adi,
    title: 'Aditi Joshi',
    cols: 2,
    description: 'Contact:   8329719561',
    email:'Email:   aditisjoshi14@gmail.com'
  },
  {
    img: shivaji,
    title: 'Shivaji Sawant',
    cols: 2,
    description: 'Contact:   8237374557',
    email:'Email:   sawantshivaji1997@gmail.com'
  },
  {
    img: gau,
    title: 'Gaurav Sawant',
    cols: 2,
    description: 'Contact:   9834965394',
    email:'Email:   gauravsawant9@gmail.com'
  },
  {
    img: oju,
    title: 'Ojaswini Gujarathi',
    cols: 2,
    description: 'Contact:   9404051026',
    email:'Email:   ojaswinig97@gmail.com'
  }
];
function Team(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <GridList cellHeight={700} className={classes.gridList} cols={6}>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              style={{ padding: '30px', margin: '0', height: 'auto' }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <center>
                    <CardMedia
                      className={classes.media}
                      image={tile.img}
                      title={tile.title}
                      alt={tile.title}
                    />
                  </center>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tile.title}
                    </Typography>
                    <Typography component="p">{tile.description}</Typography>
                    <Typography component="p">{tile.email}</Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    </div>
  );
}
Team.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Team);
