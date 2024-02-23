import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import CollectionLoading from '../PlaceHolder/CollectionLoading';



class Collection extends Component {

    
    constructor() {
        super();
        this.state={
             ProductData:[],
             isLoading: 'd-block', // Setelah komponen dimount, tampilkan placeholder-loading
             mainDiv: 'd-none',
        }
   }



   componentDidMount() {
     this.loadDataWithRetry();
 }

 loadDataWithRetry = (retryCount = 3, delay = 1000) => {
     axios.get(AppURL.ProductListByRemark("COLLECTION"))
         .then(response => {
             this.setState({ ProductData: response.data, isLoading: 'd-none', mainDiv: 'd-block' });
         })
         .catch(error => {
             if (error.response && error.response.status === 429 && retryCount > 0) {
                 setTimeout(() => {
                     this.loadDataWithRetry(retryCount - 1, delay * 2);
                 }, delay);
             } else {
                 console.error("Gagal mengambil data:", error);
                 this.setState({ isLoading: 'd-none', mainDiv: 'd-none' });
             }
         });
 };


     render() {
          const { ProductData, isLoading } = this.state;
          const FeaturedList = this.state.ProductData;
      
          const MyView = ProductData.map((FeaturedList, i) => {

            if(FeaturedList.special_price=="na")
            {
                 return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Link className="text-link" to={"/productdetails/"+FeaturedList.id}>
                                <Card className="image-box card w-100">
                                <img className="center" src={FeaturedList.image} />   
                                <Card.Body> 
                                <p className="product-name-on-card" style={{ textDecoration: 'none' }}>{FeaturedList.title}</p>
                                <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : Rp.{FeaturedList.price}</p>

                                </Card.Body>
                                </Card>
                            </Link>          
                        </Col>
            }else{
                 return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Link className="text-link" to={"/productdetails/"+FeaturedList.id}>
                                <Card className="image-box card w-100">
                                <img className="center" src={FeaturedList.image} />   
                                <Card.Body> 
                                <p className="product-name-on-card" style={{ textDecoration: 'none' }}>{FeaturedList.title}</p>
                                <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : <strike className="text-secondary">Rp.{FeaturedList.price}</strike> Rp. {FeaturedList.special_price}</p>

                                </Card.Body>
                                </Card> 
                            </Link>         
                        </Col>
            }
  
                 
            });

          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
                        <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
                            <p>Some Of Our Exclusive Collection, You May Like</p>
                        </div>

                         <CollectionLoading isLoading={isLoading}/>
                         
                        <Row>
                              {MyView}
                        </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Collection