import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product1 from '../../assets/images/product/product1.png';
import ReactDOM  from 'react-dom';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class ProductDetails extends Component {

    constructor() {
        super();
        this.previewImgRef = React.createRef();
    }

    imgOnClick = (event) => {
        let imgSrc = event.target.getAttribute('src');
        this.previewImgRef.current.setAttribute('src', imgSrc);
    }


    render() {
        const ProductAllData = this.props.data || {};
        const product = ProductAllData.productList?.[0] || {};
        const {
            title = '',
            brand = '',
            category = '',
            subcategory = '',
            image = '',
            product_code = '',
            remark = '',
            special_price = '',
            star = '',
            price = '',
        } = product;

        const productDetails = ProductAllData.ProductDetails?.[0] || {};
        
        const {
            image_one = 'static/media/wonder.4c47e366d1d0e5d53008.png',
            image_two = 'static/media/wonder.4c47e366d1d0e5d53008.png',
            image_three = 'static/media/wonder.4c47e366d1d0e5d53008.png',
            image_four = 'static/media/wonder.4c47e366d1d0e5d53008.png',
            short_description = '',
            long_description  = '',
            size = '', // tetap string, karena nilainya adalah satu string yang berisi beberapa ukuran dipisahkan dengan koma
            color = '', 
        } = productDetails;

        // Split ukuran menjadi array jika ada beberapa ukuran yang dipisahkan dengan koma
        const sizesArray = size.split(',').map(item => item.trim());

        // Split warna menjadi array jika ada beberapa warna yang dipisahkan dengan koma
        const colorsArray = color.split(',').map(item => item.trim());

        return (
            <Fragment>
                <Container fluid className="BetweenTwoSection">

                  
                 

                   
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12}>
                            <Row>
                                <Col className="p-3" md={5}>
                                    
                                    <img ref={this.previewImgRef} className="w-100 bigimage" src={image_one} alt="Product" />
                                    <Container className="my-3">
                                        <Row>
                                            
                                            {[image_one, image_two, image_three, image_four].map((img, index) => (
                                                <Col onClick={this.imgOnClick} key={index} className="p-0 m-0" md={3}>
                                                    <img className="w-100 smalliamge product-sm-img" src={img} alt={`Product ${index + 1}`} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3" md={6}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">{short_description}</h6>
                                    <div className="input-group">
                                        <div className="Product-price-card d-inline">Reguler Price Rp. {price}</div>
                                        <div className="Product-price-card d-inline">50% Discount</div>
                                        <div className="Product-price-card d-inline">New Price Rp. {special_price}</div>
                                    </div>
                                    <h6 className="mt-2">Category: <b>{category}</b></h6>
                                    <h6 className="mt-2">SubCategory: <b>{subcategory}</b></h6>
                                    <h6 className="mt-2">Category: <b>{category}</b></h6>
                                    <hr></hr>
                                    <h6 className="mt-2">Choose Color</h6>
                                    <div className="input-group">
                                        {colorsArray.map((color, index) => (
                                            <div key={index} className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="color" id={`color${index}`} value={color} />
                                                <label className="form-check-label" htmlFor={`color${index}`}>{color}</label>
                                            </div>
                                        ))}
                                    </div>

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        {sizesArray.map((size, index) => (
                                            <div key={index} className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="size" id={`size${index}`} value={size} />
                                                <label className="form-check-label" htmlFor={`size${index}`}>{size}</label>
                                            </div>
                                        ))}
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                                        <button className="btn btn-primary m-1"><i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"><i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={5}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    <p>{long_description}</p>
                                  
                                </Col>

                                <Col className="" md={6}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;
