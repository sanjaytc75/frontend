import React from 'react'
import logo from '../travel.png';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { MdAccountCircle,MdCardTravel } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

export default function Header2() {
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
         
        <NavDropdown  title="Account" id="basic-nav-dropdown">
        
            
          <NavDropdown.Item href="#"><MdCardTravel/>My Bookings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#"><MdAccountCircle/>Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#"><BiLogOut/>Logout</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
