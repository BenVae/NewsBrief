import React, {Component} from 'react';

import {Container, Nav, Navbar} from "react-bootstrap";

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">NewsBrief</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/message">Message</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/fetchNewsletter">Newsbriefe</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/createNewsletter">bitchin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent;