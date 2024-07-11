import { Link } from 'react-router-dom';
import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function NavTabs() {
  const [expanded, setExpanded] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="dark"
      >
        <Navbar.Brand className="title" as={Link} to="/">
          Select Materials
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav nav-toggle"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item
              className="nav-item"
              onClick={() => setExpanded(!expanded)}
              as={Link}
              to="/"
            >
              Home
            </NavDropdown.Item>
            <NavDropdown.Item
              className="nav-item"
              onClick={() => setExpanded(!expanded)}
              as={Link}
              to="/About"
            >
              Products
            </NavDropdown.Item>
            <NavDropdown.Item
              className="nav-item"
              onClick={() => setExpanded(!expanded)}
              as={Link}
              to="/Contact"
            >
              Contact
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        Top Of Page
        </Nav.Link>
        <a href="tel:+14099601589" className="nav-item nav-link call-us-link">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </Navbar>
    </div>
  );
}

export default NavTabs;
