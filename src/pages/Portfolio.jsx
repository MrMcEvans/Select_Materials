import { useEffect } from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { Reveal } from '../components/utils/Reveal';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Reveal>
    <div className="card mb-3">
    <h2>Site-Work Services</h2>
  <p>
    At Select Materials, we specialize in providing comprehensive site-work services tailored to meet the needs of industrial and commercial businesses. Our expertise ensures that your projects are completed efficiently and to the highest standards. Our site-work services include:
  </p>
  <ul className='list-group'>
  <li className='list-group-item portfolio-list'><strong>Structural Fill</strong></li>
    <li className='list-group-item portfolio-list'><strong>Drain Structures</strong></li>
    <li className='list-group-item portfolio-list'><strong>Drainage</strong></li>
    <li className='list-group-item portfolio-list'><strong>Ditches</strong></li>
    <li className='list-group-item portfolio-list'><strong>Drain Piping</strong></li>
    <li className='list-group-item portfolio-list'><strong>Roads</strong></li>
    <li className='list-group-item portfolio-list'><strong>Building Pads</strong></li>
    <li className='list-group-item portfolio-list'><strong>Levees</strong></li>
    <li className='list-group-item portfolio-list'><strong>Retention and Detention Ponds</strong></li>
    <li className='list-group-item portfolio-list'><strong>Fencing</strong></li>
    <li className='list-group-item portfolio-list'><strong>Mowing</strong></li>
    <li className='list-group-item portfolio-list'><strong>Grading</strong></li>
    <li className='list-group-item portfolio-list'><strong>Surveying</strong></li>
    <li className='list-group-item portfolio-list'><strong>Excavation</strong></li>
    <li className='list-group-item portfolio-list'><strong>Concrete Paving</strong></li>
  </ul>
  
  <p>
    Trust Select Materials to deliver exceptional site-work services that support the success and longevity of your industrial and commercial projects. Our commitment to quality and customer satisfaction sets us apart as a reliable partner in the region.
  </p>
  <Link
                  to="/Contact"
                  className="btn btn-secondary btn-lg"
                  role='button'
                >
                  Contact For Info
                </Link>
  </div>
  </Reveal>
  <Reveal>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Delivery</h1>
              <img
                src="https://lalandscapesupply.com/wp-content/uploads/2022/02/dump-truck-load-of-dirt-delivery-near-me-2-768x512.jpg"
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
        </Reveal>
        </div>
  );
}
