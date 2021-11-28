import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Routes from './components/Routes';
import './components/style.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, search: '' };
    this.setUser = this.setUser.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  setUser(user) {
    this.setState({ user });
  }

  setSearch(search) {
    this.setState({ search });
  }

  render() {
    const { user, search } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Header user={user} setUser={this.setUser} />
          <Routes
            user={user}
            search={search}
            setUser={this.setUser}
            setSearch={this.setSearch}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
