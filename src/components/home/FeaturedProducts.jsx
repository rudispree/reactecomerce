import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Card, Button } from 'react-bootstrap'
 
class FeaturedProducts extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
              <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
                  <p>Some Of Our Exclusive Collection, You May Like</p>
              </div>
              
              <Row>
                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className="image-box card" >
                    <img className="center" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/25b21edf-4537-469d-a7fa-9ad84ae362f3.jpg.webp?ect=4g"/>
                    <Card.Body>
                      <p className="product-name-on-card">
                      TECNO POVA 5 Pro 5G – Dimensity 6080 5G, 8+8GB+256GB - Silver Fantasy
                      </p>
                      <p className="product-price-on-card">
                         Rp 2.599.000
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

              
              </Row>
            </Container>
        </Fragment>
    )
  }
}

export default FeaturedProducts
