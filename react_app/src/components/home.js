import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Search from './layout/search';
import HomePage from './layout/homepage';

const styles = {};

function Home({ history, setSearch }) {
  return (
    <Fragment>
      <Search history={history} setSearch={setSearch} />
      <HomePage />
    </Fragment>
  );
}

export default withStyles(styles)(Home);
