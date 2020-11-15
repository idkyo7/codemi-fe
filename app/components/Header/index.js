import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";

function Header() {
  return (
    <div>
      <style type="text/css">
        {`
        .bg-header {
          background-color: #fafafa;
          z-index: 2;
          box-shadow: 0 4px 2px -2px #d8d8d9;
        }
        `}
      </style>

      <Navbar bg="header" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="flat">Search</Button>
          </Form>
        </Navbar>
    </div>
  );
}

export default Header;
