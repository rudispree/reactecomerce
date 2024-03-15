import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'; // Tambahkan import untuk Redirect
import Forget from '../../assets/images/forget.jpg';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import Swal from 'sweetalert2';

export class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: '',
            isLoading: false,
            showPassword: false,
            redirect: false // Tambahkan state redirect
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        const { token, email, password, password_confirmation } = this.state;

        if (!token || !email || !password || !password_confirmation) {
            Swal.fire({
                title: "Form tidak lengkap!",
                text: "Mohon isi semua kolom form.",
                icon: "error",
                button: "OK"
            });
            return;
        }

        this.setState({ isLoading: true });
        const data = {
            token: token,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }

        axios.post(AppURL.ResetPassword, data)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        text: response.data.message,
                    });
                    this.setState({ redirect: true }); // Set state redirect ke true setelah berhasil reset kata sandi
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
                document.getElementById("fromreset").reset();
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Terjadi kesalahan saat memproses permintaan.',
                });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    render() {
        if (this.state.redirect) { // Cek apakah perlu melakukan pengalihan halaman
            return <Redirect to="/login" />; // Lakukan pengalihan halaman ke '/login' jika redirect bernilai true
        }

        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm" onSubmit={this.formSubmit} id="fromreset">
                                        <h4 className="section-title-login"> RESET PASSWORD </h4>

                                        <input className="form-control m-2" type="text" placeholder="Masukkan Kode Pin Anda" onChange={(e) => { this.setState({ token: e.target.value }) }} />

                                        <input className="form-control m-2" type="email" placeholder="Masukkan Email Anda" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                                        <div className="input-group m-2">
                                            <input className="form-control" type={this.state.showPassword ? "text" : "password"} placeholder="Masukkan Password Anda" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={this.togglePasswordVisibility}>
                                                    {this.state.showPassword ? "Sembunyikan" : "Tampilkan"}
                                                </button>
                                            </div>
                                        </div>

                                        <input className="form-control m-2" type="password" placeholder="Konfirmasi Password Anda" onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} />
                                        <Button type="submit" className="btn btn-block m-2 site-btn-login">
                                            {this.state.isLoading ? "Memuat..." : "Reset Password"}
                                        </Button>

                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Forget} alt="Forget Password" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ResetPassword;
