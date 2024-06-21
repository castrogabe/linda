// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar className='header' variant='dark' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src='/images/logo.png' alt='logo'></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto  w-100  justify-content-end'>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/design'>
              <Nav.Link>Design</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
