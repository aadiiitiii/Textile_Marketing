import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import MiniSearch from 'minisearch';
import Search from './layout/search';
import FilterDrawer from './layout/FilterDrawer';
import ProductCard from './layout/ProductCard';

// eslint-disable-next-line react/prefer-stateless-function
class ProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/products', {}).then(res => {
      // on success
      this.setState({
        jsondata: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    const { jsondata } = this.state;
    const { history, search, setSearch } = this.props;
    const miniSearch = new MiniSearch({
      fields: ['type', 'subtype', 'description', 'name']
    });
    miniSearch.addAll(jsondata);
    const result = miniSearch.search(search || '');
    console.log(result);
    return (
      <div>
        <Search setSearch={setSearch}/>
        <Grid container>
          <FilterDrawer />
          {jsondata.map(value => (
           
            <ProductCard
              carddata={value}
              alldata={jsondata}
              history={history}
              val={Math.round(Math.random()+Math.random() +Math.random()*Math.random())%7}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default ProductCatalog;
