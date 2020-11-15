import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'react-bootstrap';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Banner from 'assets/codemi-logo.png';
import User from 'assets/user-icon.png';

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
        <Navbar.Brand href="#home">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <img src={User} alt="react-boilerplate - Logo" style={{width: 50}} />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
