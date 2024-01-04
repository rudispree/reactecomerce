import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'


export class Contact extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
     <Form className="onboardForm">
          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
          <input className="form-control m-2" type="text" placeholder="Enter Mobile Number" />

          <input className="form-control m-2" type="email" placeholder="Enter Email" />

          <input className="form-control m-2" type="text" placeholder="Enter Your Message" />
          <Button className="btn btn-block m-2 site-btn-login"> Send </Button>

     </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
           LSP Digital Marketing
Ruko Fifth Avenue, Paramount, Jl. Boulevard Raya Gading Serpong No.12, Pakulonan Bar., Kabupaten Tangerang, Banten 15810
           </p>

           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.38443245535!2d106.59397641083986!3d-6.240909599999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc0d23425139%3A0xc18051233d52cfba!2sLSP%20Digital%20Marketing!5e0!3m2!1sid!2sid!4v1704293849789!5m2!1sid!2sid" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

          

                         </Col>
                    </Row>






                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Contact