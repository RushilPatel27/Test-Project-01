import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function MemberReg() {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="mb-5">
              <Card.Header className="text-center">
                Member Registration
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Middel Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Middel Name"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-block">Gender</Form.Label>
                        <Form.Check
                          inline
                          type="radio"
                          label="Male"
                          name="genderGroup"
                          id="male"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Female"
                          name="genderGroup"
                          id="female"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Other"
                          name="genderGroup"
                          id="other"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Select>
                          <option Select>Select Blood Group</option>
                          <option Select>A+</option>
                          <option Select>B+</option>
                          <option Select>AB+</option>
                          <option Select>O+</option>
                          <option Select>A-</option>
                          <option Select>B-</option>
                          <option Select>AB-</option>
                          <option Select>O-</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Date of Birth" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={2}>
                      <Form.Group className="mb-3">
                        <Form.Label>Birth Time</Form.Label>
                        <Form.Control
                          type="time"
                          placeholder="Birth Time"
                          defaultValue="12:00"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter State" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Zip Code"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} lg={12}>
                      <Form.Group className="mt-4 mb-3 text-center">
                        <Button type="button">Submit Now</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
