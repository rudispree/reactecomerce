import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';


export class FooterDesktop extends Component {
     constructor() {
          super();
          this.state={
               address:"",
               android_app_link:"",
               ios_app_link:"",
               facebook_link:"",
               twitter_link:"",
               instagram_link:"",
               copyright_link:"",
               loaderDiv:"",
               mainDiv:"d-none"
          }
     }

     componentDidMount()
     {
          axios.get(AppURL.AllSiteinfo).then(response =>{
               let StatusCode = response.status;
               if(StatusCode==200){
                    let JsonData = (response.data)[0];
                    this.setState({
                         address:JsonData['address'],
                         android_app_link:JsonData['android_app_link'],
                         ios_app_link:JsonData['ios_app_link'],
                         facebook_link:JsonData['facebook_link'],
                         twitter_link:JsonData['twitter_link'],
                         instagram_link:JsonData['instagram_link'],
                         copyright_link:JsonData['copyright_link'],
                         loaderDiv:"d-none",
                         mainDiv:""
                    });
               }
          }).catch(error =>{  

          })
     }


     render() {
          return (
               <Fragment>
       <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
                    <Container>
     <Row className="px-0 my-5">
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

                        
                        

                         <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                              <div className={this.state.mainDiv}>
                                   <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                                   <p>{ReactHtmlParser(this.state.address)}
                                   </p>
                             
                              
                              <h5 className="footer-menu-title">SOCIAL LINK</h5>
                              <a href="{this.state.facebook_link}"><i className="fab m-1 h4 fa-facebook"></i></a>
                              <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                              <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                              </div>
                         </Col>

                         <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                         <div className={this.state.mainDiv}>
                              <h5 className="footer-menu-title">THE COMPANY</h5>
                              
                              <Link to="/about" className="footer-link"> About Us</Link><br></br>
                              <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                              
                              <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                         </div>
                         </Col>

                         <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                         <div className={this.state.mainDiv}>
                              <h5 className="footer-menu-title">MORE INFO</h5>
                              <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                              <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                              <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
                         </div>
                         </Col>

                         <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                         <div className={this.state.mainDiv}>
                              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                              <a><img src={Google}  /></a><br></br>
                              <a><img className="mt-2" src={Apple}  /></a><br></br>
                              Change Your Language <br></br>
                              {/* <div id="google_translate_element">  </div> */}
                         </div>
                         </Col>

     </Row>
                    </Container>

                    <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container>
                         <Row>
                              <h6 className="text-white">© Copyright 2024 by Rudi Shop, All Rights Reserved</h6>
                         </Row>
                    </Container>

                    
               </Container> 

                    </div>

               </Fragment>
          )
     }
}

export default FooterDesktop