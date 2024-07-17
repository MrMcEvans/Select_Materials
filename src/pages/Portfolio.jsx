import { useEffect } from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="card mb-3">
    <h2>Site-Work Services</h2>
  <p>
    At Select Materials, we specialize in providing comprehensive site-work services tailored to meet the needs of industrial and commercial businesses. Our expertise ensures that your projects are completed efficiently and to the highest standards. Our site-work services include:
  </p>
  <ul>
    <li><strong>Drain Structures:</strong> Expert installation and maintenance of drain structures to manage water flow effectively.</li>
    <li><strong>Drainage:</strong> Comprehensive drainage solutions to prevent water accumulation and protect your site.</li>
    <li><strong>Drain Piping:</strong> High-quality drain piping systems designed to handle heavy-duty industrial and commercial requirements.</li>
    <li><strong>Roads:</strong> Construction and maintenance of durable roads that withstand high traffic and heavy loads.</li>
    <li><strong>Building Pads:</strong> Preparation of stable building pads to support construction projects of any scale.</li>
    <li><strong>Levees:</strong> Design and construction of levees to provide flood protection and water management.</li>
    <li><strong>Retention and Detention Ponds:</strong> Development of retention and detention ponds to manage stormwater and enhance site sustainability.</li>
    <li><strong>Fencing:</strong> Installation of secure and reliable fencing to protect your site and assets.</li>
    <li><strong>Mowing:</strong> Regular mowing services to maintain a clean and professional appearance for your site.</li>
    <li><strong>Grading:</strong> Expert grading services to ensure a level and stable foundation for construction.</li>
    <li><strong>Surveying:</strong> Accurate surveying to provide precise measurements and site mapping.</li>
    <li><strong>Excavation:</strong> Efficient excavation services for foundations, trenches, and other site needs.</li>
    <li><strong>Concrete Paving:</strong> High-quality concrete paving for durable and long-lasting surfaces.</li>
  </ul>
  <p>
    Trust Select Materials to deliver exceptional site-work services that support the success and longevity of your industrial and commercial projects. Our commitment to quality and customer satisfaction sets us apart as a reliable partner in the region.
  </p>
  </div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Delivery</h1>
              <img
                src="https://img.freepik.com/premium-photo/dusk-blue-dump-truck-moves-across-building-site-covered-dust-dirt_1043470-4015.jpg"
                alt="Trendy Pants and Shoes"
                className="img-added rounded-start"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <p>
                  We are pleased to say thay your premium dirt is up for delivery from Select Materials.
                  Whether it's topsoil, sand, or lime stabilized soil, our high-quality materials can be delivered straight to your site, ensuring your commercial projects are built on
                  the best foundation available.
                </p>
                <p><strong>Let's build greatness together.</strong></p>
                
                <Link
                  to="/Contact"
                  className="btn btn-secondary btn-lg"
                  role='button'
                >
                  Contact For A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
}
