import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../api/AppURL';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
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

class AppRoute extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            this.setState({ user: storedUser });
        } else {
            axios.get(AppURL.UserData)
                .then((response) => {
                    this.setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }

    setUser = (user) => {
        this.setState({ user: user });
        localStorage.setItem('user', JSON.stringify(user));
    }

    render() {
        return (
            <Fragment>
                <NavMenuDesktop user={this.state.user} setUser={this.setUser} />

                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser} {...props} />} />
                    <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} />} />
                    <Route exact path="/forget" component={ForgetPasswordPage} />
                    <Route exact path="/reset/:id" component={ResetPasswordPage} />
                    <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser} {...props} />} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/productdetails/:code" component={ProductDetailsPage} />
                    <Route exact path="/notification" component={NotificationPage} />
                    <Route exact path="/favourite" component={FavouritePage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/productcategory/:category" component={ProductCategoryPage} />
                    <Route exact path="/productsubcategory/:category/:subcategory" component={ProductSubCategoryPage} />
                    <Route exact path="/productbysearch/:searchkey" component={SearchPage} />
                </Switch>
            </Fragment>
        )
    }
}

export default AppRoute;
