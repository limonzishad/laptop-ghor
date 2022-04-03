import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
//import { Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;