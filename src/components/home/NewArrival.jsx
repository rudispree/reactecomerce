import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import NewarrivalLoading from '../PlaceHolder/NewarrivalLoading';


class NewArrival extends Component {
    constructor(props){
        super(props);
        this.state={
          ProductData:[],
          isLoading: 'd-none',
          mainDiv: 'd-none',
        }
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)
    }
    next(){
            this.slider.slickNext();
    }
    previous(){
            this.slider.slickPrev();
    }

    // componentDidMount()
    // {
    //       axios.get(AppURL.ProductListByRemark("NEW")).then(response =>{
              
    //           this.setState({ProductData:response.data,isLoading: 'd-none', mainDiv: ''});
    //       }).catch(error =>{  
              
    //       })
    // }

    componentDidMount() {
      this.loadDataWithRetry();
    }
    
    loadDataWithRetry = (retryCount = 3, delay = 1000) => {
      this.setState({ isLoading: 'd-block' });
    
      axios.get(AppURL.ProductListByRemark('NEW'))
        .then(response => {
          this.setState({ ProductData: response.data, isLoading: 'd-none', mainDiv: '' });
        })
        .catch(error => {
          if (error.response && error.response.status === 429 && retryCount > 0) {
            setTimeout(() => {
              this.loadDataWithRetry(retryCount - 1, delay * 2);
            }, delay);
          } else {
            // Handle other errors
            console.error("Failed to fetch data:", error);
            this.setState({ isLoading: 'd-none', mainDiv: '' });
          }
        });
    };
    

  


     render() {
      const NewList      = this.state.ProductData;
      const MyView       = NewList.map((NewList,i)=>{

        if(NewList.special_price=="na")
        {
             return  <div>
                          <Link className="text-link" to={"/productdetails/"+NewList.id}>
                          <Card className="image-box card">
                            <img className="center" src={NewList.image} />   
                            <Card.Body> 
                           
                            <p className="product-name-on-card" style={{ textDecoration: 'none' }}>
                              {NewList.title.length > 50 ? `${NewList.title.substring(0, 50)}...` : NewList.title}
                            </p>

                            <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : <strike className="text-secondary">Rp.{NewList.price}</strike> Rp. {NewList.special_price}</p>


                            </Card.Body>
                            </Card> 
                          </Link>
                    </div>
        }else{
             return  <div>
                      <Link className="text-link" to={"/productdetails/"+NewList.id}>
                        <Card className="image-box card">
                        <img className="center" src={NewList.image} />   
                        <Card.Body> 
                        
                        <p className="product-name-on-card" style={{ textDecoration: 'none' }}>
                              {NewList.title.length > 50 ? `${NewList.title.substring(0, 50)}...` : NewList.title}
                        </p>
                        <p className="product-price-on-card" style={{ textDecoration: 'none' }}>Price : <strike className="text-secondary">Rp.{NewList.price}</strike> Rp. {NewList.special_price}</p>

                        </Card.Body>
                        </Card>
                      </Link>          
                    </div>
        }

             
        });
        var settings = {
          dots: false,
          infinite: true,
          speed: 500, // Ubah ke nilai yang lebih masuk akal
          autoplay: true,
          autoplaySpeed: 3000, // Ubah ke nilai yang lebih masuk akal
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        


          return ( 
        <Fragment>
        <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>NEW ARRIVAL &nbsp;

                            <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
                            &nbsp;
                            <a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>

                        </h2>

                    </div>

               <Row>

              <NewarrivalLoading isLoading={this.state.isLoading}/>
              <div className={this.state.mainDiv}>
                <Slider ref={c=>(this.slider=c)} {...settings}>
                        
                          {MyView}
                        
                       
                </Slider>
              </div>
                
               </Row>


        </Container>

        </Fragment>
          )
     }
}

export default NewArrival