import React from 'react'
import logo from '../travel.png';
import { Navbar,Container,Nav,Button } from 'react-bootstrap';



export default function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/"><img src={logo} alt="logo" width="60" height="28" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/About">ABOUT US </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login"><Button variant="light">LOGIN</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

