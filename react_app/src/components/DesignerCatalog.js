import React, { Component } from 'react';
import { Grid, Typography, Switch } from '@material-ui/core';
import axios from 'axios';
import MiniSearch from 'minisearch';
import Search from './layout/search';
import FilterDrawer from './layout/FilterDrawer';
import ProductCard from './layout/ProductCard';
import DesignerCard from './layout/DesignerCard';

// eslint-disable-next-line react/prefer-stateless-function
class ArtisanCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: []
    };
  }

  componentDidMount() {
    const { user } = this.props;
    console.log(user)
    if (user.data && user.data.realm === 'artisan') {
      axios
        .get(
          `http://localhost:8080/api/profiles?filter=%7B%22where%22%3A%7B%22realm%22%3A%22designer%22%7D%7D`,
          {}
        )
        .then(res => {
          // on success
          this.setState({
            jsondata: res.data
          });
          console.log(res.data);
        });
    }
  }

  render() {
    const { jsondata } = this.state;
    const { history, search, setSearch, user } = this.props;
    // const miniSearch = new MiniSearch({
    //   fields: ['type', 'subtype', 'description', 'name']
    // });
    // miniSearch.addAll(jsondata);
    // const result = miniSearch.search(search || '');
    // console.log(result);
    return (
      <div style={{ marginTop: '10vw' }}>
        <Grid container>
          {jsondata.map(value => (
            <DesignerCard carddata={value} user={user} alldata={jsondata} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default ArtisanCatalog;
