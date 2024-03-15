import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImg: null
        };
    }

    imgOnClick = (event) => {
        const imgSrc = event.target.src;
        this.setState({ previewImg: imgSrc });
    }

    render() {
        const { data } = this.props;
        const ProductAllData = data || {};
        const product = ProductAllData.productList?.[0] || {};
        const {
            title = '',
            category = '',
            subcategory = '',
            price = '',
            special_price = ''
        } = product;

        const productDetails = ProductAllData.ProductDetails?.[0] || {};
        const {
            image_one = '',
            image_two = '',
            image_three = '',
            image_four = '',
            short_description = '',
            long_description = '',
            product_id = '',
            size = 'na',
            color = 'na'
        } = productDetails;

        const paragraf = long_description.split('\n').map((p, index) => (
            <p key={index}>{p}</p>
          ));

        const images = [image_one, image_two, image_three, image_four];

        return (
            <Fragment>
                <Container fluid className="BetweenTwoSection">
                    <div className="breadbody">
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to="/">Beranda</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={`/productcategory/${category}`}>{category}</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={`/productsubcategory/${category}/${subcategory}`}>{subcategory}</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={`/productdetails/${product.product_id}`}>{title}</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12}>
                            <Row>
                                <Col className="p-3" md={6}>
                                    <div className="w-100 bigimage">
                                        <InnerImageZoom className="detailimage" zoomType={"hover"} zoomScale={1.8} src={this.state.previewImg || image_one} />
                                    </div>
                                    <Container className="my-3">
                                        <Row>
                                            {images.map((img, index) => (
                                                <Col key={index} className="p-0 m-0" md={3}>
                                                    <img className="w-100 smalliamge product-sm-img" src={img} alt={`Produk ${index + 1}`} onClick={this.imgOnClick} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3" md={6}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">{short_description}</h6>
                                    <p className="product-price-on-card">Harga: {special_price === "na" ? price : <><strike className="text-secondary">{price}</strike> {special_price}</>}</p>
                                    <h6 className="mt-2">Kategori: <b>{category}</b></h6>
                                    <h6 className="mt-2">Subkategori: <b>{subcategory}</b></h6>
                                    {color !== 'na' && (
                                        <div>
                                            <h6 className="mt-2">Pilih Warna</h6>
                                            {/* Opsi warna disini */}
                                        </div>
                                    )}
                                    {size !== 'na' && (
                                        <div>
                                            <h6 className="mt-2">Pilih Ukuran</h6>
                                            {/* Opsi ukuran disini */}
                                        </div>
                                    )}
                                    <div>
                                        <h6 className="mt-2">Pilih Kuantitas</h6>
                                        <select className="form-control form-select">
                                            <option>Pilih Kuantitas</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                        </select>
                                    </div>
                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1"> <i className="fa fa-shopping-cart"></i> Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="" md={6}>
                                    <h6 className="mt-2">DETAIL</h6>
                                    <p>{paragraf}</p> 
                                </Col>
                                <Col className="" md={6}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    {/* Ulasan disini */}
                                    <ReviewList code={product_id}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <SuggestedProduct subcategory={subcategory}/>
            </Fragment>
        );
    }
}

export default ProductDetails;
