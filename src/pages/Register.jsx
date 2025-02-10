import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

export default function Register() {
  const [regAllInput, setRegAllInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handelAllField = (event) => {
    setRegAllInput({ ...regAllInput, [event.target.name]: event.target.value });
  };

  const handelBtnReg = () => {
    console.log(regAllInput);
  };

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={5}>
            <Card>
              <Card.Header>Register</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={regAllInput.name}
                      onChange={handelAllField}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={regAllInput.email}
                      onChange={handelAllField}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Phone"
                      name="phone"
                      value={regAllInput.phone}
                      onChange={handelAllField}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={regAllInput.password}
                      onChange={handelAllField}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4 text-center">
                    <Button type="button" onClick={handelBtnReg}>
                      Register Now
                    </Button>
                  </Form.Group>

                  <p className="text-center">
                    Already have an account? <Link to="/sign">Sign in</Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
