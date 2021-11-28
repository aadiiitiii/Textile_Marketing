import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import { Link } from 'react-router-dom';

import { cotton, bg, handicraft, jute, silk, wool } from './layout/images';

const style = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 'auto',
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px'
    }
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const {user,history} = this.props
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Typography variant="h3">
          What kind of products do you want to add?
        </Typography>
        <p></p>
        <div style={{ marginLeft: '50px' }}>
          <FormGroup row="true">
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '150px' }}
            >
              <u>
                <Link
                  color="textPrimary"
                  onClick={()=>{history.push("/addtype")}}
                  to={{ pathname: './addtype', state: { item: 'cotton' } }}
                >
                  Cotton
                </Link>
              </u>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '350px' }}
            >
              <u>
                <Link to={{ pathname: './addtype', state: { item: 'nylon' } }}>
                  {' '}
                  Nylon
                </Link>{' '}
              </u>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '350px' }}
            >
              <u>
                <Link to={{ pathname: './addtype', state: { item: 'jute' } }}>
                  {' '}
                  Jute
                </Link>{' '}
              </u>
            </Typography>
          </FormGroup>

          <FormGroup row="true">
            <Link to="./addcotton">
              {' '}
              <img
                src={cotton}
                height="200px"
                width="200px"
                style={{ marginLeft: '100px', marginTop: '30px' }}
                alt="Not Available"
              />
            </Link>
            <Link to="./addnylon">
              {' '}
              <img
                src={bg}
                height="200px"
                width="200px"
                style={{ marginLeft: '200px', marginTop: '30px' }}
                alt="Not Available"
              />{' '}
            </Link>
            <Link to="./addjute">
              {' '}
              <img
                src={jute}
                height="200px"
                width="200px"
                style={{ marginLeft: '200px', marginTop: '30px' }}
                alt="Not Available"
              />{' '}
            </Link>
          </FormGroup>
          <FormGroup row="true">
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '150px' }}
            >
              <Link to={{ pathname: './addtype', state: { item: 'silk' } }}>
                {' '}
                <u>Silk</u>{' '}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '350px' }}
            >
              <Link
                to={{ pathname: './addtype', state: { item: 'handicraft' } }}
              >
                {' '}
                <u> Handicraft </u>{' '}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ marginTop: '50px', marginLeft: '350px' }}
            >
              <Link to={{ pathname: './addtype', state: { item: 'wool' } }}>
                {' '}
                <u> Wool </u>{' '}
              </Link>
            </Typography>
          </FormGroup>
          <FormGroup row="true">
            <Link to="./silk">
              {' '}
              <img
                src={silk}
                height="200px"
                width="200px"
                style={{ marginLeft: '100px', marginTop: '30px' }}
                alt="Not Available"
              />{' '}
            </Link>
            <Link to="./handicraft">
              {' '}
              <img
                src={handicraft}
                height="200px"
                width="200px"
                style={{ marginLeft: '200px', marginTop: '30px' }}
                alt="Not Available"
              />{' '}
            </Link>
            <Link to="./wool">
              {' '}
              <img
                src={wool}
                height="200px"
                width="200px"
                style={{ marginLeft: '200px', marginTop: '30px' }}
                alt="Not Available"
              />{' '}
            </Link>
          </FormGroup>
        </div>
      </main>
    );
  }
}

AddProduct.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.array.isRequired
};

export default withStyles(style)(AddProduct);
