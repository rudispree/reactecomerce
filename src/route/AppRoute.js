import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter

import Homepage from '../pages/Homepage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';


import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';



class AppRoute extends Component {
  render() {
    return (
      <Router>
       
        <Fragment>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={UserLoginPage} />
            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/purchase" component={PurchasePage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/refund" component={RefundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default AppRoute;
