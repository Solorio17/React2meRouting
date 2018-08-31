import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';

const NavBar = () =>{
  return(
    <Navbar className="navbar navbar-light bg-primary" expand="lg">
      <NavbarBrand href="/" className="text-white font-italic font-weight-bold">ReactRouter</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem className="pull-left">
            <NavLink color="dark" href="/" className="text-white font-italic font-weight-bold">Home</NavLink>
          </NavItem>
          <NavItem className="float-left">
            <NavLink href="/about" className="text-white font-italic font-weight-bold">About</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  )
}

export default NavBar;
