import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Divider } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Designer from './layout/DesignerProductCard';

const style = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      height: 'auto',
      width: 'auto',
      marginLeft: '20px',
      marginRight: 'auto',
      marginTop: '60px'
    }
  },
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: []
    };
  }

  componentDidMount() {
    const { user, history } = this.props;
    console.log(user);
    if (user.data) {
      if (user.data.realm === 'designer') {
        axios
          .get(
            `http://localhost:8080/api/products?filter=%7B%22where%22%3A%7B%22profileId%22%3A%22${
              user.data.profileId
            }%22%7D%7D`,
            {}
          )
          .then(res => {
            this.setState({
              jsondata: res.data
            });
            console.log(res);
          });
      }
    } else {
      history.push('/signin');
    }
  }

  render() {
    const { theme, history ,user} = this.props;
    const { jsondata } = this.state;
    console.log(user);
    return (
      <div style={{ marginTop: 80 }}>
        <div>
          <Button
            variant="contained"
            style={{
              margin: 'auto',
              backgroundColor: '#212121',
              color: '#fafafa'
            }}
            onClick={()=>{history.push("/addproduct")}}
          >
            Add New Product
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              margin: 'auto',
              backgroundColor: '#212121',
              color: '#fafafa',
              marginTop:'2vw'
            }}
            onClick={()=>{history.push("/designerrequirement")}}
          >
            Add New Requirement
          </Button>
        </div>

        <Divider variant="middle" style={{ marginTop: theme.spacing.unit*2 }} />
        <Typography align="center" variant="h4" style={{ marginTop: theme.spacing.unit*2 }}>
          Your Products
        </Typography>
        <Grid container>
          {jsondata.map(value => (
            <Designer carddata={value} user={user}/>
          ))}
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.array.isRequired
};

export default withStyles(style, { withTheme: true })(Dashboard);
