import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import FeaturedLoading from '../PlaceHolder/FeaturedLoading';

const ProductCard = ({ FeaturedList }) => (
  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
    <Link className="text-link" to={"/productdetails/"+FeaturedList.id}>
      <Card className="image-box card">
        <img className="center" src={FeaturedList.image} />
        <Card.Body>
          <p className="product-name-on-card" style={{ textDecoration: 'none' }}>
            {FeaturedList.title.length > 40 ? `${FeaturedList.title.substring(0, 40)}...` : FeaturedList.title}
          </p>
          {FeaturedList.special_price === 'na' ? (
            <p className="product-price-on-card" style={{ textDecoration: 'none' }}>
              Price : Rp.{FeaturedList.price}
            </p>
          ) : (
            <p className="product-price-on-card" style={{ textDecoration: 'none' }}>
              Price : <strike className="text-secondary">Rp.{FeaturedList.price}</strike> Rp. {FeaturedList.special_price}
            </p>
          )}
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: 'd-none',
      mainDiv: 'd-none',
    };
  }

//   componentDidMount() {
//     axios.get(AppURL.ProductListByRemark('FEATURED')).then((response) => {
//       this.setState({ ProductData: response.data, isLoading: 'd-none', mainDiv: '' });
//     }).catch((error) => {});
//   }
componentDidMount() {
     this.loadDataWithRetry();
   }
   
   loadDataWithRetry = (retryCount = 3, delay = 1000) => {
     axios.get(AppURL.ProductListByRemark('FEATURED'))
       .then((response) => {
         this.setState({ ProductData: response.data, isLoading: 'd-none', mainDiv: '' });
       })
       .catch((error) => {
         if (error.response && error.response.status === 429 && retryCount > 0) {
           setTimeout(() => {
             this.loadDataWithRetry(retryCount - 1, delay * 2);
           }, delay);
         } else {
           // Handle other errors
           console.error("Failed to fetch data:", error);
         }
       });
   };
   

  render() {
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((FeaturedList, i) => (
      <ProductCard key={i} FeaturedList={FeaturedList} />
    ));

    return (
      <Fragment>
        <FeaturedLoading isLoading={this.state.isLoading} />

        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
