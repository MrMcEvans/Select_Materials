import { Link, useLocation } from 'react-router-dom';
import './style.css';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavTabs() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Navbar.Brand className='title' as={Link} to="/">
        Select Materials
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown.Item className='nav-item' as={Link} to="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item className='nav-item' as={Link} to="/About">
          About Us
        </NavDropdown.Item>
        <NavDropdown.Item className='nav-item' as={Link} to="/Contact">
          Contact
        </NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;

{
  //   style={{
  //     backgroundImage: `url(${selectMaterialsImage})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   height: '50vh',
  // maxWidth: '100vw',}}
  /* <div class="navbar navbar-expand-lg bg-body">
      <h1>Select Materials</h1>

      <ul className='nav nav-tabs'>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={
              currentPage === '/About' ? 'nav-link active' : 'nav-link'
            }
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className='dropdown'>
      <select name="NavDrop" className="dropdown-menu">
        <option className='dropdown-item' value="Home">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </option>
        <option className='dropdown-item' value="Resume">
          <a
            className="nav-link"
            href="./images/Links/Resume (1).pdf"
            target="_blank"
          >
            Resume
          </a>
        </option>
        <option className='dropdown-item' value="About">
          <Link
            to="/About"
            className={
              currentPage === '/About' ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </Link>
        </option>
        <option className='dropdown-item' value="Portfolio">
          <Link
            to="/Portfolio"
            className={
              currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </Link>
        </option>
        <option className='dropdown-item' value="Contact">
          <Link
            to="/Contact"
            className={
              currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Link>
        </option>
      </select>
      </div>
      

    </div> */
}
