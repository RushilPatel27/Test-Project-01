import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { CRangeSlider } from "@coreui/react-pro";
import JsonProductFilter from "./data/ProductFilter.json";

export default function ProductFilter() {
  const [activeKey, setActiveKey] = useState("0");

  const handelSelect = (vkey) => {
    setActiveKey(vkey);
  };

  // console.log(sizeClothes);

  // const sizeClothes = [
  //   {
  //     id: 1,
  //     title: "30 Inch",
  //   },
  //   {
  //     id: 2,
  //     title: "32 Inch",
  //   },
  //   {
  //     id: 3,
  //     title: "34 Inch",
  //   },
  //   {
  //     id: 5,
  //     title: "36 Inch",
  //   },
  //   {
  //     id: 6,
  //     title: "38 Inch",
  //   },
  //   {
  //     id: 7,
  //     title: "40 Inch",
  //   },
  // ];

  // const colorClothes = [
  //   {
  //     id: 1,
  //     title: "#e66363",
  //   },
  //   {
  //     id: 2,
  //     title: "#8c8ce8",
  //   },

  //   {
  //     id: 3,
  //     title: "#2dd02d",
  //   },
  //   {
  //     id: 4,
  //     title: "#e1e13c",
  //   },

  //   {
  //     id: 5,
  //     title: "#f5f5dc",
  //   },
  //   {
  //     id: 6,
  //     title: "#AA8C77",
  //   },
  // ];

  // const fabricClothes = [
  //   {
  //     id: 1,
  //     title: "100% Cotton",
  //   },
  //   {
  //     id: 2,
  //     title: "100% Linen",
  //   },

  //   {
  //     id: 3,
  //     title: "Cotton",
  //   },
  //   {
  //     id: 4,
  //     title: "Cotton Blend",
  //   },

  //   {
  //     id: 5,
  //     title: "Cotton Lycra",
  //   },
  //   {
  //     id: 6,
  //     title: "Denim",
  //   },
  // ];

  // const categoryClothes = [
  //   {
  //     id: 1,
  //     title: "T-Shirts",
  //   },
  //   {
  //     id: 2,
  //     title: "Bermudas/Capris",
  //   },

  //   {
  //     id: 3,
  //     title: "Blazer",
  //   },
  //   {
  //     id: 4,
  //     title: "Caps",
  //   },

  //   {
  //     id: 5,
  //     title: "Coat",
  //   },
  //   {
  //     id: 6,
  //     title: "Jackets",
  //   },
  // ];

  // const brandClothes = [
  //   {
  //     id: 1,
  //     title: "Puma",
  //   },
  //   {
  //     id: 2,
  //     title: "Roadstar",
  //   },

  //   {
  //     id: 3,
  //     title: "Levis",
  //   },
  //   {
  //     id: 4,
  //     title: "Max",
  //   },

  //   {
  //     id: 5,
  //     title: "Zudio",
  //   },
  //   {
  //     id: 6,
  //     title: "US Polo",
  //   },
  // ];

  // const discountClothes = [
  //   {
  //     id: 1,
  //     title: "10%",
  //   },
  //   {
  //     id: 2,
  //     title: "15%",
  //   },

  //   {
  //     id: 3,
  //     title: "30%",
  //   },
  //   {
  //     id: 4,
  //     title: "40%",
  //   },

  //   {
  //     id: 5,
  //     title: "45%",
  //   },
  //   {
  //     id: 6,
  //     title: "50%",
  //   },
  // ];

  return (
    <>
      <div className="fiter-part">
        <h3>Filters</h3>

        <hr />

        <Accordion
          defaultActiveKey={["0"]}
          flush
          onSelect={handelSelect}
          activeKey={activeKey}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Price <span>{activeKey === "0" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              <CRangeSlider min={0} max={7550} value={[0, 1250]} />
              <Form className="row justify-content-between mt-3">
                <Form.Control
                  type="text"
                  style={{ width: "45%", marginLeft: "10px" }}
                />
                <Form.Control
                  type="text"
                  style={{ width: "45%", marginRight: "10px" }}
                />
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Size <span>{activeKey === "1" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              {JsonProductFilter.sizeClothes.map((index) => (
                <button key={index.id} className="btn-size">
                  {index.title}
                </button>
              ))}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Color <span>{activeKey === "2" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              {JsonProductFilter.colorClothes.map((index) => (
                <button
                  key={index.id}
                  className="btn-color"
                  style={{ backgroundColor: index.title }}
                ></button>
              ))}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Fabric <span>{activeKey === "3" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                {JsonProductFilter.fabricClothes.map((index) => (
                  <Form.Group key={index.id}>
                    <Form.Check type="checkbox" label={index.title} />
                  </Form.Group>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Category <span>{activeKey === "4" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                {JsonProductFilter.categoryClothes.map((index) => (
                  <Form.Group key={index.id}>
                    <Form.Check type="checkbox" label={index.title} />
                  </Form.Group>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Brand <span>{activeKey === "5" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                {JsonProductFilter.brandClothes.map((index) => (
                  <Form.Group key={index.id}>
                    <Form.Check type="checkbox" label={index.title} />
                  </Form.Group>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Discount <span>{activeKey === "6" ? "-" : "+"} </span>
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                {JsonProductFilter.discountClothes.map((index) => (
                  <Form.Group key={index.id}>
                    <Form.Check type="checkbox" label={index.title} />
                  </Form.Group>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="filter-discounts"></div>
      </div>
    </>
  );
}
