import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
//import { Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar className="justify-content-center" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;