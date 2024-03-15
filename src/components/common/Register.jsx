import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import Login from '../../assets/images/login.png'
import axios from 'axios'
import Swal from 'sweetalert';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: '',
            loggedIn: false,
            isLoading: false,
            showPassword: false // 1. Tambahkan state showPassword
        }
    }

    // 2. Tambahkan fungsi togglePasswordVisibility
    togglePasswordVisibility = () => {
        this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    }

    formSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, password_confirmation } = this.state;
        
        // Validasi form
        if (!name || !email || !password || !password_confirmation) {
            Swal({
                title: "Form tidak lengkap!",
                text: "Mohon isi semua kolom form.",
                icon: "error",
                button: "OK"
            });
            return;
        }

        this.setState({ isLoading: true });
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }

        axios.post(AppURL.UserRegister, data).then(response => {
            localStorage.setItem('token', response.data.token);
            this.setState({ loggedIn: true, isLoading: false });
            this.props.setUser(response.data.user);
        }).catch(error => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/profile'} />
        }

        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm" onSubmit={this.formSubmit} >
                                        <h4 className="section-title-login"> USER REGISTER </h4>

                                        <input className="form-control m-2" type="text" placeholder="Enter Your Name" onChange={(e) => { this.setState({ name: e.target.value }) }} />

                                        <input className="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                                        <div className="input-group m-2"> {/* Tambahkan div input-group untuk mengelompokkan input dan tombol show password */}
                                            <input className="form-control" type={this.state.showPassword ? "text" : "password"} placeholder="Enter Your Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={this.togglePasswordVisibility}>
                                                    {this.state.showPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>

                                        <input className="form-control m-2" type="password" placeholder="Confirm Your Password" onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} />

                                        <Button type="submit" className="btn btn-block m-2 site-btn-login">
                                            {this.state.isLoading ? "Loading..." : "Sign Up"}
                                        </Button>
                                        <br></br> <br></br>
                                        <hr />
                                        <p> <b> Forget My Password? </b><Link to="/forget"><b> Forget Password </b> </Link> </p>

                                        <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>

                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Login} alt="Login Banner" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Register
