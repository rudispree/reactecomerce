import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Forget from '../../assets/images/forget.jpg';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import Swal from 'sweetalert2';

class ForgetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            loading: false // Tambahkan loading state
        };
    }

    formSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email
        };

        this.setState({ loading: true }); // Set loading to true when form is submitted
        axios.post(AppURL.ForgetPassword, data)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        text: response.data.message,
                    });
                } else if (response.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email tidak ditemukan',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.',
                    });
                }
            })
            .catch(error => {
                console.log(error); // Catat pesan error ke konsol
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Terjadi kesalahan saat memproses permintaan.',
                });
            })
            .finally(() => {
                this.setState({ loading: false }); // Set loading back to false when request is completed
            });
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm" onSubmit={this.formSubmit}>
                                        <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
                                        <input className="form-control m-2" type="email" placeholder="Masukkan Email Anda" onChange={(e) => { this.setState({ email: e.target.value }); }} />

                                        <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={this.state.loading}>
                                            {this.state.loading ? 'Loading...' : 'Reset Password'}
                                        </Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Forget} alt="Forget Password Banner" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ForgetPassword;
