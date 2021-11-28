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
import {cot,denim,jutee, handicra,nyl,wooll,silkk} from './images'

const styles = theme => ( {
  card: {
    width:'90vw',
    color: 'black',
    height: 'auto'
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      width:'60vw',
      height:'60vw',
    },
    [theme.breakpoints.up('md')]: {
      width:'20vw',
      height:'20vw',
      // backgroundColor: '#212121'
    }
  },
  root: {
    width:'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    margin: 'auto'
  },
  paper: {
    width: '100%',
    padding: '30px'
  }
});
const tileData = [
  {
    img: cot,
    title: 'COTTON',
    cols: 'auto',
    description1: 'Cotton is an important fiber and cash crop which plays a dominant role in the industrial and agricultural economy of India.',
    description2: 'India being the second largest producer of cotton in the world is also one of the preferred sourcing sites for various international textile brands and retailers.',
    description3: 'Cotton alone uses more than half the chemical pesticides used in the entire agricultural production in India. Rising demand compels cotton growers to adopt unsustainable methods which may pose serious challenges to the environment through the excessive use of inputs like water, fertilizers and pesticides.',
    link: 'https://simple.wikipedia.org/wiki/Cotton', 
  },
  {
    img: denim,
    title: 'DENIM',
    cols: 'auto',
    description1: 'Denim is a sturdy cotton warp-faced textile in which the weft passes under two or more warp threads. This twill weaving produces a diagonal ribbing that distinguishes it from cotton duck. While a denim predecessor known as dungaree has been produced in India for hundreds of years, denim itself was first produced in the French city of Nîmes under the name “serge de Nîmes”',
    description2: 'Indigo dye is a color used for coloring the denim. It is an organic dye with a distinctive blue color. It was manufactured and used in India, from where it got its name, since the ancient times. From India, Indigo is imported to Egypt, Greece and Rome.',
    description3: 'Nonetheless, as always, jeans are much more than just a fashion item, they have been worn playing professional sports, taking long treks and lounging around in the park as much as they have been used for strutting down the runway. In modern times millions of people around the world wear this style to work, and not just in the mines, but also in the most hi-tech of the studios.     ',
    link: 'https://simple.wikipedia.org/wiki/Denim', 
  },
  {
    img: jutee,
    title: 'JUTE',
    cols: 'auto',
    description1: 'The Indian Jute Industry is a very old & predominant in the eastern part of India. The Government of India has included the Jute Industry for special attention in its National Common Minimum Programme.    ',
    description2: 'India is the largest producer of raw jute and jute goods and the second largest exporter after Bangladesh. There were about 80 jute mills in India in 2010-11, most of which are located in West Bengal, mainly along the banks of the Hooghly River, in a narrow belt (98 km long and 3 km wide). It is predominant in the eastern part of India. The jute industry in India engages around 2.6 lakh workers directly and around 1.4 lakh workers indirectly in the allied sectors.     ',
    description3: 'Nonetheless, as always, jeans are much more than just a fashion item, they have been worn playing professional sports, taking long treks and lounging around in the park as much as they have been used for strutting down the runway. In modern times millions of people around the world wear this style to work, and not just in the mines, but also in the most hi-tech of the studios.     ',
    link: 'https://simple.wikipedia.org/wiki/Jute', 
  },
  {
    img: handicra,
    title: 'HANDICRAFT',
    cols: 'auto',
    description1: 'Handicraft is about processing materials by hand with hand tools. The results can be helpful things or decorative things. The materials utilized in the product are natural, industrially processed or maybe recycled. The models of the product are ancient, revised traditional or fashionable. Handicraft is deeply frozen in society and contributes to preserving and sending traditions. ',
    description2: 'In ancient India people lived in colonies called tribals and they were used to make utility items for their daily need, that art of making the crafts called handicrafts, and the items called handicrafts goods. Then people started selling these products in the local markets “haat”. Time has been passed and people have become more developed and civilised in all aspects, those who were making handicraft products have started trading their makings by increasing demand and population.',
    description3: 'Nonetheless, as always, jeans are much more than just a fashion item, they have been worn playing professional sports, taking long treks and lounging around in the park as much as they have been used for strutting down the runway. In modern times millions of people around the world wear this style to work, and not just in the mines, but also in the most hi-tech of the studios.     ',
    link: 'https://simple.wikipedia.org/wiki/Handicraft', 
  },
  {
    img: nyl,
    title: 'NYLON',
    cols: 'auto',
    description1: 'Nylon is a generic designation for a family of synthetic polymers, based on aliphatic or semi-aromatic polyamides. Nylon is a thermoplastic silky material that can be melt-processed into fibers, films, or shapes. It is made of repeating units linked by amide links similar to the peptide bonds in proteins. ',
    description2: 'Nylon can be drawn, cast, or extruded through spinnerets from a melt or solution to form fibres, filaments, bristles, or sheets to be manufactured into yarn, fabric, and cordage; and it can be formed into molded products. It has high resistance to wear, heat, and chemicals.',
    description3: 'When cold-drawn, it is tough, elastic, and strong. Most generally known in the form of fine and coarse filaments in such articles as hosiery, parachutes, and bristles, nylon is also used in the molding trade, particularly in injection molding, where its toughness and ability to flow around complicated inserts are prime advantages.    ',
    link: 'https://simple.wikipedia.org/wiki/Nylon', 
  },
  {
    img: wooll,
    title: 'WOOL',
    cols: 'auto',
    description1: 'Wool is the textile fiber obtained from sheep and other animals, including cashmere and mohair from goats, qiviut from muskoxen, from hide and fur clothing from bison, angora from rabbits, and other types of wool from camelids; additionally, the Highland and the Mangalica breeds of cattle and swine, respectively, possess wooly coats. ',
    description2: 'India is the 7th largest producer of wool in the world contributing 1.8 percent to the world’s total wool production. Though the wool producing industry is relatively a smaller sector as compared to cotton or man-made fibre industries, it still plays an important role in the economic development and textile exports of the country.',
    description3: 'There are many states in India engaged in the production of wool such as Karnataka, Jammu & Kashmir, Telangana, Gujarat, Himachal Pradesh, Uttar Pradesh, Haryana, Maharashtra and Andhra Pradesh. But the state which produces the largest amount of wool is Rajasthan.',
    link: 'https://simple.wikipedia.org/wiki/Wool', 
  },
  {
    img: silkk,
    title: 'SILK',
    cols: 'auto',
    description1:'Silk is a natural protein fiber, some forms of which can be woven into textiles. The protein fiber of silk is composed mainly of fibroin and is produced by certain insect larvae to form cocoons. The best-known silk is obtained from the cocoons of the larvae of the mulberry silkworm Bombyx mori reared in captivity (sericulture). The shimmering appearance of silk is due to the triangular prism-like structure of the silk fibre, which allows silk cloth to refract incoming light at different angles, thus producing different colors.',
    description2: 'Silk in the Indian subcontinent is a luxury good. In India, about 97% of the raw mulberry silk is produced in the five Indian states of Karnataka, Andhra Pradesh, Tamil Nadu, West Bengal and Jammu and Kashmir.',
    description3: 'The cloth from silk can be made into rugs, bedding, or can be used to write or paint on. In the past, silk was used to make parachutes. The practice of growing silkworms for silk production is called sericulture. Most spiders make a natural fibre of their own that is also called silk.',
    link: 'https://simple.wikipedia.org/wiki/Silk', 
  },
];
function Team(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <GridList cellHeight={700} className={classes.gridList} cols="auto">
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              style={{ margin: 'auto', height: 'auto' }}
            >
              <Card className={classes.card}>
                <CardActionArea> 
                <Typography gutterBottom variant="h3" component="h2" align="center">
                      {tile.title}
                      </Typography>
                  <center>
                    <CardMedia
                      className={classes.media}
                      image={tile.img}
                      title={tile.title}
                      alt={tile.title}
                    />
                  </center>
                  <CardContent>
                    <br/>
                    <Typography component="p" align="justify">{tile.description1}</Typography>
                    <br/>
                    <Typography component="p" align="justify">{tile.description2}</Typography>
                    <br/>
                    <Typography component="p" align="justify">{tile.description3}</Typography>
                      

                  </CardContent>
                </CardActionArea>
                <hr/>
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

export default withStyles(styles, { withTheme: true })(Team);
