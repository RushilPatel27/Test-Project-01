import React, { useEffect, useState } from "react";
import { Button, Col, Image } from "react-bootstrap";

export default function ProductCard({ product }) {
  const [productDetail, setproductDetail] = useState({});

  useEffect(() => {
    setproductDetail(product);
  }, []);
  return (
    <Col sm={6} md={3} lg={4} key={productDetail.id}>
      <div className="product-box mb-3">
        <div className="product-img-sec">
          <div className="product-img">
            <Image
              src={productDetail.image}
              className="img-fluid normal-show"
              alt={productDetail.title}
            />
            <Image
              src={productDetail.hoveimage}
              className="img-fluid hover-show"
              alt={productDetail?.title}
            />
          </div>
          <div className="quick-view">
            <Button type="button" className="quick-button">
              Quick view
            </Button>
          </div>
        </div>

        <div className="product-desc">
          <h6 className="product-title">{productDetail.title}</h6>
          <h5 className="product-price">
            <strong>Rs. {productDetail.price}</strong>{" "}
            <del>{productDetail.orignalprice}</del>{" "}
            <span className="text-orange">{productDetail.offer}% OFF</span>
          </h5>
        </div>
      </div>
    </Col>
  );
}
