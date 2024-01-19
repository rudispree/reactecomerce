import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';



class Collection extends Component {

    
    constructor() {
        super();
        this.state={
             ProductData:[]
        }
   }

   componentDidMount()
   {
        axios.get(AppURL.ProductListByRemark("COLLECTION")).then(response =>{
             
            this.setState({ProductData:response.data});
        }).catch(error =>{  
             
        })
   }


     render() {
        const FeaturedList = this.state.ProductData;
        const MyView       = FeaturedList.map((FeaturedList,i)=>{

            if(FeaturedList.special_price=="na")
            {
                 return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                            <img className="center" src={FeaturedList.image} />   
                            <Card.Body> 
                            <p className="product-name-on-card" style={{ textDecoration: 'none' }}>{FeaturedList.title}</p>
                            <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : Rp.{FeaturedList.price}</p>

                            </Card.Body>
                            </Card>          
                        </Col>
            }else{
                 return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                            <img className="center" src={FeaturedList.image} />   
                            <Card.Body> 
                            <p className="product-name-on-card" style={{ textDecoration: 'none' }}>{FeaturedList.title}</p>
                            <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : <strike className="text-secondary">Rp.{FeaturedList.price}</strike> Rp. {FeaturedList.special_price}</p>

                            </Card.Body>
                            </Card>          
                        </Col>
            }
  
                 
            });

          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
                        <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
                            <p>Some Of Our Exclusive Collection, You May Like</p>
                        </div>

                        <Row>
                              {MyView}
                        </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Collection