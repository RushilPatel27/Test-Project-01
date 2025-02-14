import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../styles/product-list.scss";

export default function ProductList({ products }) {
  const productPart = [
    {
      id: 1,
      title: "Men Black Solid Hooded Full Sleeve Jackets",
      image: "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg",
      price: "2,868",
      orignalprice: "5,735",
      offer: "50",
    },
    {
      id: 2,
      title: "Men White Solid Mock Neck Full Sleeve Winter Tracksuit",
      image: "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_5.jpg",
      price: "2,142",
      orignalprice: "3,895",
      offer: 45,
    },
    {
      id: 3,
      title: "Men Black Solid Hooded Full Sleeve Jackets",
      image: "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg",
      price: "2,868",
      orignalprice: "5,735",
      offer: "50",
    },
    {
      id: 4,
      title: "Men White Solid Mock Neck Full Sleeve Winter Tracksuit",
      image: "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_5.jpg",
      price: "2,142",
      orignalprice: "3,895",
      offer: 45,
    },
    {
      id: 5,
      title: "Men Black Solid Hooded Full Sleeve Jackets",
      image: "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg",
      price: "2,868",
      orignalprice: "5,735",
      offer: "50",
    },
    {
      id: 6,
      title: "Men White Solid Mock Neck Full Sleeve Winter Tracksuit",
      image: "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_5.jpg",
      price: "2,142",
      orignalprice: "3,895",
      offer: 45,
    },
    {
      id: 7,
      title: "Men Black Solid Hooded Full Sleeve Jackets",
      image: "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/products/223061834-2-38_6.jpg",
      price: "2,868",
      orignalprice: "5,735",
      offer: "50",
    },
    {
      id: 8,
      title: "Men White Solid Mock Neck Full Sleeve Winter Tracksuit",
      image: "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_1.jpg",
      hoveimage:
        "https://www.montecarlo.in/cdn/shop/files/224261508-1-38_5.jpg",
      price: "2,142",
      orignalprice: "3,895",
      offer: 45,
    },
  ];
  console.log("Received Products:", products);
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
                  {productPart.map((product) => (
                    <Col sm={6} md={3} lg={4} key={product.id}>
                      <div className="product-box mb-3">
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
                            <strong>Rs. {product.price}</strong>{" "}
                            <del>{product.orignalprice}</del>{" "}
                            <span className="text-orange">
                              {product.offer}% OFF
                            </span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
