import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser'


class Categories extends Component {
    
    constructor() {
        super();
        this.state = {
            MenuData: []
            // loaderDiv:"",
            // mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(AppURL.AllCategoryDetail).then(response => {
            this.setState({ MenuData: response.data });
        }).catch(error => {

        })
    }

    render() {

        const CatList = this.state.MenuData;
        const MyView = CatList.map((CatList, i) => {
            return (
                <Col key={i} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                    <Card className="h-100 w-100 text-center">
                        <Card.Body>
                            <img className="center" src={CatList.category_image} alt={CatList.category_name} />
                            <h5 className="category-name">{CatList.category_name}</h5>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });

        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>Kategori PRODUCT</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <Row>
                        {MyView}
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Categories;