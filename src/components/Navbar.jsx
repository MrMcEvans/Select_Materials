import { Link, useLocation } from 'react-router-dom';
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav">
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
      

    </div>
  );
}

export default NavTabs;
