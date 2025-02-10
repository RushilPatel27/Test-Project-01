import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Rushil App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/sign">
              User Sign
            </Nav.Link>
            <Nav.Link as={Link} to="/member-reg">
              Member Registration
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
