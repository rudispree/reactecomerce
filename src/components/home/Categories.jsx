import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import CategoryLoading from '../PlaceHolder/CategoryLoading'; // Import komponen CategoryLoading

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: [],
            isLoading: 'd-block', // Setelah komponen dimount, tampilkan placeholder-loading
            mainDiv: 'd-none',
        };
    }

    componentDidMount() {
        this.loadDataWithRetry();
     }
     
     loadDataWithRetry = (retryCount = 3, delay = 1000) => {
        axios.get(AppURL.AllCategoryDetail)
           .then(response => {
              this.setState({ MenuData: response.data, isLoading: 'd-none', mainDiv: 'd-block' });
           })
           .catch(error => {
              if (error.response && error.response.status === 429 && retryCount > 0) {
                 setTimeout(() => {
                    this.loadDataWithRetry(retryCount - 1, delay * 2);
                 }, delay);
              } else {
                 // Handle other errors
                 console.error("Gagal mengambil data:", error);
                 this.setState({ isLoading: 'd-none', mainDiv: 'd-none' });
              }
           });
     };
     
    render() {
        const { MenuData, isLoading, mainDiv } = this.state;

        const MyView = MenuData.map((CatList, i) => (
            <Col key={i} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                <Link className="text-link" to={"/productcategory/" + CatList.category_name}>
                    <Card className="h-100 w-100 text-center">
                        <Card.Body>
                            <img className="center" src={CatList.category_image} alt={CatList.category_name} />
                            <h5 className="category-name">{CatList.category_name}</h5>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        ));

        return (
            <Fragment>
               
                    <Container className="text-center" fluid={true}>
                        <div className="section-title text-center mb-55">
                            <h2>Kategori PRODUCT</h2>
                            <p>Some Of Our Exclusive Collection, You May Like</p>
                        </div>
                        <CategoryLoading isLoading={isLoading} />
                            <div className={mainDiv}>
                                <Row>
                                    {MyView}
                                </Row>
                            </div>
                    </Container>
                
            </Fragment>
        );
        
    }
}

export default Categories;
