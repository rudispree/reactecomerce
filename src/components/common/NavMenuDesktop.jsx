import React, { Component, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../assets/images/wonder.png';
import Bars from '../../assets/images/bars.png';
import { Link, Redirect } from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
import Dropdown from 'react-bootstrap/Dropdown';


class NavMenuDesktop extends Component {
    constructor() {
        super();
        this.state = {
            SideNavState: "sideNavClose",
            ContentOverState: "ContentOverlayClose",
            SearchKey: "",
            SearchRedirectStatus: false,
            userName: "" // Menyimpan nama pengguna
        }

        this.SearchOnChange = this.SearchOnChange.bind(this);
        this.SearchOnClick = this.SearchOnClick.bind(this);
        this.SearchRedirect = this.SearchRedirect.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        // Ambil data user dari local storage saat komponen dimuat
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            // Ambil nama pengguna dari data user
            const userName = userData.name;
            this.setState({ userName: userName });
        }
    }
    
    componentDidUpdate() {
        // Perbarui nama pengguna jika ada perubahan pada data user di local storage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.name !== this.state.userName) {
            const userName = userData.name;
            this.setState({ userName: userName });
        }
    }

    SearchOnChange(event) {
        let SearchKey = event.target.value;
        this.setState({ SearchKey: SearchKey });
    }

    SearchOnClick() {
        if (this.state.SearchKey.length >= 2) {
            this.setState({ SearchRedirectStatus: true });
        }
    }

    SearchRedirect() {
        if (this.state.SearchRedirectStatus === true) {
            return <Redirect to={"/productbysearch/" + this.state.SearchKey} />
        }
    }

    logout = () => {
        // Hapus data user dari local storage saat logout
        localStorage.removeItem('user');
    }

    MenuBarClickHandler = () => {
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler = () => {
        this.SideNavOpenClose();
    }

    SideNavOpenClose = () => {
        let SideNavState = this.state.SideNavState;
        let ContentOverState = this.state.ContentOverState;
        if (SideNavState === "sideNavOpen") {
            this.setState({ SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose" })

        } else {
            this.setState({ SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen" })
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.SearchOnClick();
        }
    }

    render() {
        let buttons;
        if (this.state.userName) {
            buttons = (
                <div>
                    <Link to="/favourite" className="btn">
                        <i className="fa h4 fa-heart"></i>
                        <sup><span className="badge text-white bg-danger">3</span></sup>
                    </Link>
                    <Link to="/notification" className="btn">
                        <i className="fa h4 fa-bell"></i>
                        <sup><span className="badge text-white bg-danger">5</span></sup>
                    </Link>
                    {/* <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                <span className="h4 btn">{this.state.userName}</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                                <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                    <Link to="/profile" className="h4 btn">{this.state.userName}</Link>
                    <Link to="/login" onClick={this.logout} className="h4 btn">LOGOUT</Link>
                    <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> 3 Items
                    </Link>

         
    
                </div>
            )
        } else {
            buttons = (
                <div>
                    <Link to="/favourite" className="btn">
                        <i className="fa h4 fa-heart"></i>
                        <sup><span className="badge text-white bg-danger">3</span></sup>
                    </Link>
                    <Link to="/notification" className="btn">
                        <i className="fa h4 fa-bell"></i>
                        <sup><span className="badge text-white bg-danger">5</span></sup>
                    </Link>
                    
                    <Link to="/login" className="h4 btn">LOGIN</Link>
                    <Link to="/register" className="h4 btn">REGISTER</Link>
                    <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> 3 Items
                    </Link>
                </div>
            )

        } 

        return (
            <Fragment>
                <div className="TopSectionDown">
                    <Navbar fixed={"top"} className="navbar" bg="light">
                        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                            <Row>
                                <Col lg={3} md={2} sm={12} xs={12}>
                                    <img onClick={this.MenuBarClickHandler} className="bar-img" src={Bars} />
                                    <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
                                </Col>
                                <Col className="p-1 mt-1" lg={4} md={3} sm={12} xs={12}>
                                    <div className="input-group w-100">
                                        <input
                                            onChange={this.SearchOnChange}
                                            onKeyPress={this.handleKeyPress}
                                            type="text"
                                            className="form-control"
                                        />
                                        <Button
                                            onClick={this.SearchOnClick}
                                            type="button"
                                            className="btn site-btn"
                                        >
                                            <i className="fa fa-search"> </i>
                                        </Button>
                                    </div>
                                </Col>
                                <Col className="p-1 mt-1" lg={5} md={5} sm={12} xs={12}>
                                   {buttons}
                                </Col>
                            </Row>
                            {this.SearchRedirect()}
                        </Container>
                    </Navbar>
                </div>
                <div className={this.state.SideNavState}>
                    <MegaMenuAll />
                </div>
                <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}></div>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;
