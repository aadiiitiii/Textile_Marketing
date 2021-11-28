import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './login';
import Home from './home';
import ProductCatalog from './ProductCatalog';
import Team from './layout/team';
import Register from './Register';
import SignUpArtisan from './SignUpArtisan';
import ForgotPassword from './ForgotPassword';
import DashboardDesigner from './DashboardDesigner';
import DashboardArtisan from './DashboardArtisan';
import AddProduct from './AddProduct';
import SignUpBuyer from './SignUpBuyer';
import AddType from './AddType';
import Faqsask from './faqsask';
import FaqsDesign from './faqsdesign';
import FaqsBuyer from './faqsbuyer';
import FaqsSeller from './faqsseller';
import MainProduct from './MainProduct';
import Chat from './chat';
import Userchat from './userchat';
import Userchat2 from './userchat2';
import SignUpDesigner from './SignUpDesigner';
import ArtisanCatalog from './ArtisanCatalog';
import DesignerRequirement from './DesignerRequirement';
import DesignerCatalog from './DesignerCatalog';

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends React.Component {
  render() {
    const { user, setUser, search, setSearch } = this.props;

    return (
      <Switch>
        <Route path="/designerrequirement" exact component={DesignerRequirement} />
         <Route path="/addtype" exact render={props => <AddType user={user} {...props} />}/>
        <Route path="/signupbuyer" exact component={SignUpBuyer} />
        <Route path="/signupdesigner" exact component={SignUpDesigner} />
        <Route path="/addproduct" exact render={props => <AddProduct user={user} {...props} />}/>
        <Route path="/chat" exact render={props => <Chat setUser={setUser} {...props}/>} />
        <Route
          path="/dashboarddesigner"
          exact
          render={props => <DashboardDesigner user={user} {...props} />}
        />
        <Route
          path="/dashboardartisan"
          exact
          render={props => <DashboardArtisan user={user} {...props} />}
        />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/faqsask" exact component={Faqsask} />
        <Route path="/faqsbuyer" exact component={FaqsBuyer} />
        <Route path="/chatting" exact component={Userchat} />
        <Route path="/chatting2" exact component={Userchat2} />
        <Route path="/faqsdesign" exact component={FaqsDesign} />
        <Route path="/faqsseller" exact component={FaqsSeller} />
        <Route path="/signupartisan" exact component={SignUpArtisan} />
        <Route path="/register" exact component={Register} />
        <Route path="/artisancatalog" exact render={props => <ArtisanCatalog user={user} setUser={setUser} {...props} />}
        />
        <Route path="/designercatalog" exact render={props => <DesignerCatalog user={user} setUser={setUser} {...props} />}
        />
        <Route
          path="/signin"
          exact
          render={props => <SignIn user={user} setUser={setUser} {...props} />}
        />
        <Route path="/product/:id" exact component={MainProduct} />
        <Route path="/about/team" exact component={Team} />
        <Route
          path="/product_catalog"
          exact
          render={props => (
            <ProductCatalog search={search} setSearch={setSearch} {...props} />
          )}
        />
        <Route path="/" render={props => (
            <Home search={search} setSearch={setSearch} {...props} />
          )} />
      </Switch>
    );
  }
}

export default Routes;
