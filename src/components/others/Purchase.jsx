import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export class Purchase extends Component {
    constructor() {
        super();
        this.state = {
            purchase: "",
            loaderDiv:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        let SiteInfoPurchase = sessionStorage.getItem("AllSiteinfo");

        if (SiteInfoPurchase == null) {
            axios.get(AppURL.AllSiteinfo).then(response => {
                let StatusCode = response.status;
                if (StatusCode === 200) {
                    let JsonData = (response.data)[0]['parchase_guide'];
                    this.setState({about:JsonData,loaderDiv:"d-none",mainDiv:""});
                    // Check if JsonData is not empty or null before setting it to state
                    if (JsonData) {
                        this.setState({ purchase: JsonData });
                        sessionStorage.setItem("SiteInfoPurchase", JsonData);
                    } else {
                         Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong!"
                              
                            });
                        
                    }
                } else {
                    Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: "Something went wrong!"
                         
                       });
                }
            }).catch(error => {
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                    
                  });
            });
        } else {
            this.setState({ purchase: SiteInfoPurchase });
        }
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                              <div className={this.state.loaderDiv}>
                                   <div class="ph-item">
                                   <div class="ph-col-12">
                                        
                                        <div class="ph-row">
                                             <div class="ph-col-4"></div>
                                             <div class="ph-col-2"></div>
                                             <div class="ph-col-4"></div>
                                             <div class="ph-col-8 empty"></div>
                                             <div class="ph-col-6"></div>
                                             <div class="ph-col-6 empty"></div>
                                             <div class="ph-col-12"></div>
                                        </div>
                                   </div>
                                   </div>
                              </div>
                              <div className={this.state.mainDiv}>
                                   <h4 className="section-title-login">Purchase Page </h4>
                                   <p className="section-title-contact">
                                        {ReactHtmlParser(this.state.purchase)}
                                   </p>
                              </div>
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Purchase;
