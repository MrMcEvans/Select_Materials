import { Link, useLocation } from 'react-router-dom';
import selectMaterialsImage from '../assets/SelectMaterials.png';
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body">
        <div class="container-fluid">
          <button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <Link
                  to="/"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/About"
                  className={
                    currentPage === '/About' ? 'nav-link active' : 'nav-link'
                  }
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
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
          </div>
        </div>
      </nav>

      <div class="p-5 text-center bg-body-tertiary"
        style={{
          backgroundImage: `url(${selectMaterialsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        height: '50vh',
      maxWidth: '100vw',}}
      >
        <img src="../ass" alt="logo" />
        <h1 class="mb-3">Select Materials</h1>
        <h4 class="mb-3">Port Arthur, Texas</h4>
      </div>
    </header>
  );
}

export default NavTabs;


{/* <div class="navbar navbar-expand-lg bg-body">
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
      

    </div> */}
