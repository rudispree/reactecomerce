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
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import axios from 'axios';
import AppURL from '../api/AppURL';
import NavMenuDesktop from '../components/common/NavMenuDesktop';



class AppRoute extends Component {

  constructor(){
       super();
       this.state={
            user:{}
       }
  }

  componentDidMount(){
       axios.get(AppURL.UserData).then((response) => { 
            this.setUser(response.data)
       }).catch(error=>{

       });
  }


  setUser = (user) => {
       this.setState({user:user})
  }

  render() {
       return (
  <Fragment>

   <NavMenuDesktop user={this.state.user} setUser={this.setUser} />  

       <Switch>
            

<Route exact path="/" render={(props) => <Homepage {...props} key={Date.now()} /> } />

<Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />

<Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} /> } />

<Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} /> } />

<Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} /> } />

<Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />




<Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} /> } />

<Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} /> } />

<Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} /> } /> 

<Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} /> } />

<Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} /> } />

<Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} /> } />

<Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />

<Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()} /> } />

<Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} /> } />

<Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } />

<Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} /> } /> 

<Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} /> } /> 
               

       </Switch>

  </Fragment>
       )
  }
}

export default AppRoute