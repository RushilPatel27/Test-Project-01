import React from "react";
import ProductList from "../ProductList";

export default function ProductData() {
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
  ];

  return (
    <>
      <ProductList products={productPart} />
    </>
  );
}
