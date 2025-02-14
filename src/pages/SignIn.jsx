import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const handelbtnClick = () => {
    console.log(email, "\n", password);
  };

  return (
    <>
      <Container className="my-5" style={{ height: "70vh" }}>
        <Row className="justify-content-center">
          <Col lg={5}>
            <Card>
              <Card.Header className="text-center">Sign In</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={handleEmail}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={handelPassword}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4 text-center">
                    <Button primary type="button" onClick={handelbtnClick}>
                      Submit Now
                    </Button>
                  </Form.Group>
                </Form>

                <p className="text-center">
                  Don't have account?{" "}
                  <Link to="/register"> Create Account </Link>{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
