import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/product-list.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import ProductCard from "./ProductCard";
import productPart from "./data/ProductData";
import ProductFilter from "./ProductFilter";

export default function ProductList() {
  const [productBox, setProductBox] = useState([]);

  useEffect(() => {
    setProductBox(productPart);
  }, []);

  // console.log("Received Products:", products);
  return (
    <>
      <section className="py-5 product-list-section">
        <Container>
          <Row>
            <Col md={4} lg={3} className="">
              <ProductFilter />
            </Col>
            <Col md={8} lg={9}>
              <div className="price-shorting"></div>

              <div className="product-list">
                <Row>
                  {productBox.map((product) => (
                    <ProductCard product={product} />
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
