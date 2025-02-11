import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router";

export default function MemberReg() {
  const [memberData, setMemberData] = useState({
    fname: "",
    mname: "",
    lname: "",
    phone: "",
    password: "",
    cpassword: "",
    genderGroup: "",
    uprofile: null,
    cprofile: null,
    blood: "",
    bdate: "",
    btime: "",
    city: "",
    state: "",
    zipcode: "",
    address: "",
    pc: false,
  });

  const handelChangeMdata = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    if (event.target.type === "file") {
      value = event.target.files[0];
    }

    setMemberData({
      ...memberData,
      [name]: [value],
    });
  };

  const [show, setShow] = useState(false);

  const clickBtnMember = () => {
    console.log(memberData);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

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
                          onChange={handelChangeMdata}
                          name="fname"
                          value={memberData.fname}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Middel Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Middel Name"
                          onChange={handelChangeMdata}
                          name="mname"
                          value={memberData.mname}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          onChange={handelChangeMdata}
                          name="lname"
                          value={memberData.lname}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          onChange={handelChangeMdata}
                          name="email"
                          value={memberData.email}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Phone Number"
                          onChange={handelChangeMdata}
                          name="phone"
                          value={memberData.phone}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          onChange={handelChangeMdata}
                          name="password"
                          value={memberData.password}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          onChange={handelChangeMdata}
                          name="cpassword"
                          value={memberData.cpassword}
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
                          onChange={handelChangeMdata}
                          value="Male"
                          checked={memberData.genderGroup === "Male"}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Female"
                          name="genderGroup"
                          id="female"
                          onChange={handelChangeMdata}
                          value="Female"
                          checked={memberData.genderGroup === "Female"}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Other"
                          name="genderGroup"
                          id="other"
                          onChange={handelChangeMdata}
                          value="Other"
                          checked={memberData.genderGroup === "Other"}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Upload Profile Photo</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload Profile Photo"
                          onChange={handelChangeMdata}
                          name="uprofile"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Upload Company Profile</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload Company Profile"
                          onChange={handelChangeMdata}
                          name="cprofile"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Select
                          onChange={handelChangeMdata}
                          name="blood"
                          value={memberData.blood}
                        >
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
                        <Form.Control
                          type="date"
                          placeholder="Date of Birth"
                          onChange={handelChangeMdata}
                          name="bdate"
                          value={memberData.bdate}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>Birth Time</Form.Label>
                        <Form.Control
                          type="time"
                          placeholder="Birth Time"
                          defaultValue="12:00"
                          onChange={handelChangeMdata}
                          name="btime"
                          value={memberData.btime}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter City"
                          onChange={handelChangeMdata}
                          name="city"
                          value={memberData.city}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter State"
                          onChange={handelChangeMdata}
                          name="state"
                          value={memberData.state}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Zip Code"
                          onChange={handelChangeMdata}
                          name="zipcode"
                          value={memberData.zipcode}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} lg={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter Address"
                          onChange={handelChangeMdata}
                          name="address"
                          value={memberData.address}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} lg={12}>
                      <Form.Group className="mb-3">
                        <p className="small">
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our
                          <Link to="/" className="text-grey ms-1 small">
                            Privacy policy.
                          </Link>
                        </p>

                        <Form.Check
                          className="me-1 small"
                          inline
                          type="checkbox"
                          label="I agree to the"
                          onChange={handelChangeMdata}
                          name="pc"
                          checked={memberData.pc}
                        />
                        <Link to="/" className="text-grey small">
                          Privacy policy.
                        </Link>
                      </Form.Group>
                    </Col>

                    <Col md={12} lg={12}>
                      <Form.Group className="mt-4 mb-3 text-center">
                        <Button type="button" onClick={clickBtnMember}>
                          Submit Now
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Woohoo, you are reading this text in a modal!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
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
