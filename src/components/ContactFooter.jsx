import './style.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

const Component = <SocialIcon url="https://twitter.com" /> 
   const beAddress = '11555 Tram Road Beaumont, Tx, 77713';


function ContactFooter() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted contact-footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <h4>Get connected with <br /> us on social networks:</h4>
        </div>

        <div>
        <SocialIcon url="https://www.facebook.com/SelectMaterialsPortArthur/" className="me-4 text-reset" />
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Select Materials
                
              </h4>
              <h5>Port Arthur, TX</h5>
              <p><a
                  href="https://www.google.com/maps/place/2570+Halbouty+Rd+Port+Arthur,+TX,+77640"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  2570 Halbouty Rd Port Arthur, TX, 77640
                </a></p>
                <h5>Beaumont, TX</h5>
                <p><a
                  href="https://www.google.com/maps/place/11555+Tram+Rd+Beaumont,+TX,+77713"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  11555 Tram Rd Beaumont, TX, 77713
                </a></p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Products</h4>
              <ul className='contact-list'>
    <li className='contact-list-item'>
      <Link to="/About" className="text-reset">
        Pure Clay
      </Link>
    </li>
    <li className='contact-list-item'>
      <Link to="/About" className="text-reset">
        Top Soil
      </Link>
    </li>
    <li className='contact-list-item'>
      <Link to="/About" className="text-reset">
        Clay 60/40
      </Link>
    </li>
    <li className='contact-list-item'>
      <Link to="/About" className="text-reset">
        Sand
      </Link>
    </li>
    <li className='contact-list-item'>
      <Link to="/About" className="text-reset">
        Lime Stabilized Soil
      </Link>
    </li>
  </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
              <p>
                <i className="fas fa-home"></i>
                <a
                  href="mailto:SelectMaterials409@gmail.com"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  SelectMaterials409@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone"></i>
                <a href="tel:+14099601589" className="text-reset">
                  +1 409-960-1589
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        ©2024 Select Materials
      </div>
    </footer>
  );
}

export default ContactFooter;

//   <div>
//         <h2>Select Materials</h2>
//         <a href="tel:336.269.8738" alt="Phone number">
//           Phone
//         </a>
//         <a href="mailto:andrewmcevans1@gmail.com" alt="email address">
//           Email
//         </a>
//       </div>
