import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#1c1d1f" }} sticky="top" expand="lg" variant="dark">
      <Container fluid className="mx-3 my-2 pt-1">
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white">
            <h2>WindowArtisansVE</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-white">
          <Nav className="ms-auto fs-4">
            <Link to="/about" className="text-decoration-none text-white me-4">
              <Nav.Item>Conócenos</Nav.Item>
            </Link>
            <Link
              to="/services"
              className="text-decoration-none text-white me-4"
            >
              <Nav.Item>Servicios</Nav.Item>
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-white me-4"
            >
              <Nav.Item>Contáctanos</Nav.Item>
            </Link>
            <Link to="/faq" className="text-decoration-none text-white me-4">
              <Nav.Item>Preguntas</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
