import './style.css';

function ContactFooter() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/SelectMaterialsPortArthur/" className="me-4 text-reset">
            Facebook
          </a>
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
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Select Materials
              </h6>
              <h6>Port Arthur, TX</h6>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/About" className="text-reset">
                  Pure Clay
                </a>
              </p>
              <p>
                <a href="/About" className="text-reset">
                  Top Soil
                </a>
              </p>
              <p>
                <a href="/About" className="text-reset">
                  Clay 60/40
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home"></i>
                <a
                  href="https://www.google.com/maps/place/2570+Halbouty+Rd+Port+Arthur,+TX,+77640"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  2570 Halbouty Rd Port Arthur, TX, 77640
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

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>Select Materials Port Arthur</div>
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
