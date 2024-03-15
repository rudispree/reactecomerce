import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Login from '../../assets/images/login.png';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import Swal from 'sweetalert2';

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      loggedIn: false,
      loading: false, // Menambahkan state untuk loading
    };
  }
 
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ loading: true }); // Set loading menjadi true ketika form di-submit
    axios.post(AppURL.Login, data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
        window.location.reload(); // Me-refresh halaman setelah login berhasil
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email atau password salah!',
        });
      })
      .finally(() => {
        this.setState({ loading: false }); // Set loading kembali menjadi false ketika permintaan selesai
      });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />;
    }

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> LOGIN PENGGUNA </h4>
                    <input className="form-control m-2" type="email" placeholder="Masukkan Email Anda" onChange={(e) => { this.setState({ email: e.target.value }); }} />
                    <input className="form-control m-2" type="password" placeholder="Masukkan Password Anda" onChange={(e) => { this.setState({ password: e.target.value }); }} />
                    <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={this.state.loading}> {this.state.loading ? 'Loading...' : 'Login'} </Button>
                    <br></br> <br></br>
                    <hr />
                    <p> <b> Lupa Password Anda? </b><Link to="/forget"><b> Lupa Password </b> </Link> </p>
                    <p> <b> Belum Punya Akun? </b><Link to="/register"><b> Daftar </b> </Link> </p>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserLogin;
