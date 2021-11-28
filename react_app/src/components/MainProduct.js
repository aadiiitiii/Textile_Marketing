import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Productdiv from './layout/Productdiv';
import Comment from './layout/comment';


// eslint-disable-next-line react/prefer-stateless-function
class MainProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: {}
    };
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    axios
      .get(`http://localhost:8080/api/products/${match.params.id}`, {})
      .then(res => {
        // on success
        this.setState({
          jsondata: res.data
        });
        console.log(res.data);
      });
  }

  render() {
    const { jsondata } = this.state;
    const { match} = this.props;

    return (
      <div>
        <Grid container>
          <div style={{marginTop:'10vw'}}>
            {jsondata.id ? <Productdiv maindata={jsondata} ind={match.params.ind} /> : ''}
          </div>
          {/* <div>
             {jsondata.comments_id  ? <Comment id={jsondata.comments_id}/> : ''} 
            <Comment />
          </div> */}
        </Grid>
      </div>
    );
  }
}

export default (MainProduct);
