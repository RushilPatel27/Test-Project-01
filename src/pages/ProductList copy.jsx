import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../styles/product-list.scss";

export default function ProductList() {
  const productList = [
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      hoveimage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "109.95",
    },
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "109.95",
    },
  ];

  return (
    <>
      <section className="py-5 product-list-section">
        <Container>
          <Row>
            <Col md={4} lg={3} style={{ backgroundColor: "#f2f2f2" }}>
              <div className="fiter-part">
                <div className="filter-range"></div>
                <div className="filter-size"></div>
                <div className="filter-color"></div>
                <div className="filter-fabric"></div>
                <div className="filter-category"></div>
                <div className="filter-brand"></div>
                <div className="filter-discounts"></div>
              </div>
            </Col>
            <Col md={8} lg={9}>
              <div className="price-shorting"></div>

              <div className="product-list">
                <Row>
                  {productList.map((product) => (
                    <Col sm={6} md={3} lg={4}>
                      <div className="product-box">
                        <div className="product-img-sec">
                          <div className="product-img">
                            <Image
                              src={product.image}
                              className="img-fluid normal-show"
                              alt={product.title}
                            />
                            <Image
                              src={product.hoveimage}
                              className="img-fluid hover-show"
                              alt={product.title}
                            />
                          </div>
                          <div className="quick-view">
                            <Button type="button" className="quick-button">
                              Quick view
                            </Button>
                          </div>
                        </div>

                        <div className="product-desc">
                          <h6 className="product-title">{product.title}</h6>
                          <h5 className="product-price">
                            <strong>{product.price}</strong>{" "}
                            <del>Rs. 2,995</del>{" "}
                            <span className="text-orange">45% OFF</span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                  ))}

                  <Col sm={6} md={3} lg={4}>
                    <div className="product-box">
                      <div className="product-img-sec">
                        <div className="product-img">
                          <Image
                            src="https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg"
                            className="img-fluid normal-show"
                            alt=""
                          />
                          <Image
                            src="https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg"
                            className="img-fluid hover-show"
                            alt=""
                          />
                        </div>
                        <div className="quick-view">
                          <Button type="button" className="quick-button">
                            Quick view
                          </Button>
                        </div>
                      </div>

                      <div className="product-desc">
                        <h6 className="product-title">Product Title</h6>
                        <h5 className="product-price">
                          <strong>Rs. 1,995</strong> <del>Rs. 2,995</del>{" "}
                          <span className="text-orange">45% OFF</span>
                        </h5>
                      </div>
                    </div>
                  </Col>

                  <Col sm={6} md={3} lg={4}>
                    <div className="product-box">
                      <div className="product-img-sec">
                        <div className="product-img">
                          <Image
                            src="https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg"
                            className="img-fluid normal-show"
                            alt=""
                          />
                          <Image
                            src="https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg"
                            className="img-fluid hover-show"
                            alt=""
                          />
                        </div>
                        <div className="quick-view">
                          <Button type="button" className="quick-button">
                            Quick view
                          </Button>
                        </div>
                      </div>

                      <div className="product-desc">
                        <h6 className="product-title">Product Title</h6>
                        <h5 className="product-price">
                          <strong>Rs. 1,995</strong> <del>Rs. 2,995</del>{" "}
                          <span className="text-orange">45% OFF</span>
                        </h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
