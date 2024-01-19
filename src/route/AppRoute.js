import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter

import Homepage from '../pages/Homepage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';


import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import FavouritePage from '../pages/FavouritePage';
import NotificationPage from '../pages/NotificationPage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';

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
            <Route exact path="/productdetails" component={ProductDetailsPage} />
            <Route exact path="/favourite" component={FavouritePage} />
            <Route exact path="/notification" component={NotificationPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default AppRoute;
