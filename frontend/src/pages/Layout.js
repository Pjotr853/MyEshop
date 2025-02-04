import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingCart } from "react-icons/fa";

const Layout = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/adding">Adding</Nav.Link>
                    <Nav.Link href="#" disabled>Link </Nav.Link>
                </Nav> 
                <Button variant="outline-success" as={Link} to="/cart">
  <FaShoppingCart className="fs-2" />
</Button>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default Layout;