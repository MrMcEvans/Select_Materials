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
      <div className="card">
        <h2 className="card-title">Products We Offer</h2>

        <div className="container-products">
          <div className="row">
            <div className="col-md-6 col-lg-4 product-main">
              <div id="pure-clay">
                <div className="card-products" style={{ width: '18rem' }}>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/01/87/01/11/1000_F_187011119_tC8i7evzhgcAiEDoZzKIfIJ6iIzZQ5RA.jpg"
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div className="card-body">
                    <h5>Clay</h5>

                    <HashLink
                      to="/About/#pure-clay-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 product-main">
              <div id="top-soil">
                <div className="card-products" style={{ width: '18rem' }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTELJwBHFWDbK1gBmITKVP9IKM-Djfw2nTw&s"
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div className="card-body">
                    <h5>Top Soil</h5>

                    <HashLink
                      to="/About/#top-soil-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 product-main">
              <div id="clay">
                <div className="card-products" style={{ width: '18rem' }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hGDAXpMRmZbIOb9uZGY2gxbLdQ84R0DhBA&s"
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div className="card-body">
                    <h5>60/40 Structural Fill</h5>

                    <HashLink
                      to="/About/#clay-60-40"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </HashLink>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-4 product-main">
              <div id="sand">
                <div className="card-products" style={{ width: '18rem' }}>
                  <img
                    src="https://2.wlimg.com/product_images/bc-full/2019/11/4192024/construction-sand-1573714612-5154504.jpeg"
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div className="card-body">
                    <h5>Sand</h5>

                    <HashLink
                      to="/About/#sand-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 product-main">
              <div id="lime-stabilized">
                <div className="card-products" style={{ width: '18rem' }}>
                  <img
                    src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2018/12/Soil-Lime-Stabilization.jpg?fit=897%2C575&ssl=1"
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div className="card-body">
                    <h5>Lime Stabilized Soil</h5>

                    <HashLink
                      to="/About/#lime-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 product-main">
              
            </div>
          </div>
        </div>
      </div>
      </Reveal>
      <br id="pure-clay-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Clay</h1>
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/87/01/11/1000_F_187011119_tC8i7evzhgcAiEDoZzKIfIJ6iIzZQ5RA.jpg"
                alt="Trendy Pants and Shoes"
                className="img-added rounded-start"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h4>
                  <strong>Why Choose Our Clay:</strong>
                </h4>
                <p>
                  At Select Materials, we provide only the highest quality
                  clay, sourced to ensure superior
                  performance in your construction projects. Our clay
                  boasts:
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>Optimal Plasticity:</strong> Ensuring easy
                    workability and shaping for diverse construction needs.
                  </li>
                  <li className="list-group-item">
                    <strong>High Cohesiveness:</strong> Providing exceptional
                    stability and durability in finished structures.
                  </li>
                  <li className="list-group-item">
                    <strong>Consistency:</strong> Maintaining uniform particle
                    size and composition for reliable results every time.
                  </li>
                </ul>
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
      <br id="top-soil-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Top Soil</h1>

              <img
                src="https://le-cdn.hibuwebsites.com/35dd3b2e659b466cbe6769e5414062fc/dms3rep/multi/opt/shutterstock_604818800-1920w.jpg"
                alt="Trendy Pants and Shoes"
                className="img-added"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h4>
                  <strong>Why Choose Our Top Soil:</strong>
                </h4>
                <p>
                  At Select Materials, we provide only the best Topsoil to support healthy root
                  development and is commonly used in gardening, landscaping, and agricultural
                  applications. Our topsoil includes:
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>Nutrient-Rich:</strong> Packed with essential
                    nutrients to promote healthy plant growth and robust
                    landscaping.
                  </li>
                  <li className="list-group-item">
                    <strong>Screened and Cleaned:</strong> Free from debris,
                    rocks, and contaminants, ensuring a smooth and uniform
                    application.
                  </li>
                  <li className="list-group-item">
                    <strong>Enhanced Soil Structure:</strong> Improves drainage
                    and aeration, creating an optimal environment for root
                    development and soil stability.
                  </li>
                </ul>
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
      <br id="clay-60-40" />
      <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>60/40 Structural Fill</h1>
              <img
                src="https://141505571.cdn6.editmysite.com/uploads/1/4/1/5/141505571/s878442499453600746_p2_i1_w1280.jpeg"
                alt="Trendy Pants and Shoes"
                className="img-added"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h4>
                  <strong>Why Choose Our 60/40:</strong>
                </h4>
                <p>
                  At Select Materials, our 60/40 blend is crafted to meet
                  the highest standards for construction use. Our blend offers:
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>Optimal Balance:</strong> The perfect mix of clay
                    and sand ensures both stability and drainage, making it
                    versatile for multiple applications..
                  </li>
                  <li className="list-group-item">
                    <strong>High Quality:</strong> Meeting project specifications, ensuring consistency and reliability
                    in your projects.
                  </li>
                  <li className="list-group-item">
                    <strong>Enhanced Performance:</strong> Ideal for use in
                    roads, building pads, landscaping, and construction projects
                    requiring firm, stable, and foundation soil.
                  </li>
                </ul>
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
      <br id="sand-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Sand</h1>
              <img
                src="https://img3.exportersindia.com/product_images/bc-full/2021/1/7406108/construction-sand-1610097892-5672918.jpeg"
                alt="Trendy Pants and Shoes"
                className="img-added rounded-start"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h4>
                  <strong>Why Choose Our Sand:</strong>
                </h4>
                <p>
                  Sand is a crucial component in the construction industry, used for various applications including pipe bedding and other non-plastic fill applications. Its properties make it ideal for providing strength, durability, and stability to building structures.
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>Cost Effective:</strong> By providing top-quality sand that reduces waste and enhances construction quality, we offer a cost-effective solution for your projects.
                  </li>
                  <li className="list-group-item">
                    <strong>Eco-Friendly:</strong> Our sand is sourced responsibly, with minimal environmental impact, aligning with sustainable construction practices.
                  </li>
                </ul>
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
      <br id="lime-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Lime Stabilized Soil</h1>
              <img
                src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2018/12/Soil-Lime-Stabilization.jpg?fit=897%2C575&ssl=1"
                alt="Trendy Pants and Shoes"
                className="img-added rounded-start"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h4>
                  <strong>Why Choose Our Lime Soil:</strong>
                </h4>
                <p>At Select Materials, Lime stabilized soil is high quality and enhances load-bearing capacity, making
                  it suitable for various construction applications such as road bases, embankments, and
                  foundations.</p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>High-Quality Materials:</strong> We use high-grade lime and carefully selected soils, ensuring consistent and reliable results in all your construction applications.
                  </li>
                  <li className="list-group-item">
                    <strong>Superior Strength and Durability:</strong> Our lime stabilized soil provides enhanced structural integrity and long-lasting performance, ensuring stable and resilient construction projects.
                  </li>
                  <li className="list-group-item">
                    <strong>Sustainable Practices:</strong> Our product reduces soil plasticity and increases load-bearing capacity, making it ideal for supporting heavy structures and roadways.
                  </li>
                </ul>
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
      <br id="gravel-description" />
      {/* <div>
        <div className="card mb-3">
          <div className="row g-0 product-control">
            <div className="col-md-4 product-cards">
              <h1>Gravel</h1>
              <img
                src="https://reagg.com/wp-content/uploads/2018/04/highway-construction.jpg"
                alt="Trendy Pants and Shoes"
                className="img-added rounded-start"
              />

            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h4>
                  <strong>Why Choose Our Gravel:</strong>
                </h4>

                <p>
                  Gravel is widely used in construction, landscaping, and industrial applications due to its excellent strength, stability, and drainage properties.
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>High-Quality Materials:</strong> Our gravel is sourced to ensure the highest quality, providing superior strength and durability for your projects.
                  </li>
                  <li className="list-group-item">
                    <strong>Consistent Supply:</strong> We guarantee a reliable and steady supply of gravel, ensuring your projects remain on schedule.
                  </li>
                  <li className="list-group-item">
                    <strong>Competitive Pricing:</strong> We offer competitive pricing without compromising on quality, making your projects cost-effective.
                  </li>
                </ul>
                
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
      </div> */}
    </div>

  );
}
