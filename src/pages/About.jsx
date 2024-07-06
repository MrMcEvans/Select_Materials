import { useEffect } from 'react';
import '../components/style.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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
                    <h5>Pure Clay</h5>

                    <a
                      href="#pure-clay-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </a>
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

                    <a
                      href="#top-soil-description"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </a>
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
                    <h5>Clay 60/40</h5>

                    <a
                      href="#clay-60-40"
                      className="btn btn-dark"
                      role="button"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <br id="pure-clay-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 product-cards">
              <h1>Pure Clay</h1>
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/87/01/11/1000_F_187011119_tC8i7evzhgcAiEDoZzKIfIJ6iIzZQ5RA.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://cdn4.volusion.store/pycz3-5je7j/v/vspfiles/photos/RMBBM-2.jpg?v-cache=1675932769"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVyxAWgVSGlhWTbqCoX2YVGuJNMWQEgfwYg&s"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://hnry.fi/wp-content/uploads/2021/04/shane-mclendon-EN1tF2EG-50-unsplash.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <br />
              <br />
                <p>
                  Pure clay is a fine-grained natural soil material renowned for
                  its plasticity and cohesiveness, making it indispensable in
                  various construction applications. It offers excellent
                  moldability when wet and solid structural integrity when dry,
                  which are essential properties for building materials like
                  bricks, tiles, and earthen structures.
                </p>

                <h4>
                  <strong>Why Choose Our Top Soil:</strong>
                </h4>
                <p>
                  At Select Materials, we provide only the highest quality pure
                  clay, meticulously sourced and processed to ensure superior
                  performance in your construction projects. Our pure clay
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
                <p>
                  Our commitment to quality ensures that you receive pure clay
                  that meets the highest standards, enhancing the longevity and
                  strength of your construction projects. Choose Select
                  Materials for reliable, top-grade pure clay that supports your
                  building success.
                </p>
                <a
                href="/Contact"
                className="btn btn-dark"
                data-mdb-ripple-init
              >
                Contact For a Quote
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br id="top-soil-description" />
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 product-cards">
              <h1>Top Soil</h1>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0w8qvu8LhkJgbcNhQCYa87zX8h45qQMRRQ&s"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTELJwBHFWDbK1gBmITKVP9IKM-Djfw2nTw&s"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://cdn-hilheod.nitrocdn.com/JuqznVPRCSzDlcsSbyZjleLOZwzDpSBy/assets/images/optimized/rev-8274063/www.landscapemulch.com/wp-content/uploads/2023/09/Fall-and-Winter-Topsoil-Strategies-Nurturing-Your-Garden-Through-the-Chill-1080x675.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://plantforsuccess.com/wp-content/uploads/2019/08/top-dressing-lawn.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <br />
              <br />
                <p>
                  Top soil is the uppermost layer of soil, rich in organic
                  matter and nutrients, essential for landscaping, gardening,
                  and various construction applications. It provides a fertile
                  base for plant growth, improving soil structure and stability
                  in construction projects.
                </p>

                <h4>
                  <strong>Why Choose Our Pure Clay:</strong>
                </h4>
                <p>
                  At Select Materials, we provide only the highest quality pure
                  clay, meticulously sourced and processed to ensure superior
                  performance in your construction projects. Our pure clay
                  boasts:
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
                <p>
                  Trust Select Materials for top soil that enhances your
                  construction and landscaping projects with reliability and
                  excellence.
                </p>
                <a
                href="/Contact"
                className="btn btn-dark"
                data-mdb-ripple-init
              >
                Contact For a Quote
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br id="clay-60-40" />
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 product-cards">
            <h1>Clay 60/40</h1>
              <img
                src="https://141505571.cdn6.editmysite.com/uploads/1/4/1/5/141505571/s878442499453600746_p2_i1_w1280.jpeg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://www.acmesand.com/wp-content/uploads/2015/09/RDIFMX-Red-Diamond-Infield-Mix-1024x714.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hGDAXpMRmZbIOb9uZGY2gxbLdQ84R0DhBA&s"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
              <img
                src="https://www.comarstrucking.com/s/img/emotionheader5057841.jpg?1413840496.920px.350px"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <br />
                <br />
                
                <p>
                  Clay 60/40 is a blended soil mixture containing 60% clay and
                  40% sand. This combination leverages the cohesive properties
                  of clay and the drainage benefits of sand, making it ideal for
                  various construction and landscaping applications. It provides
                  excellent stability and compaction while ensuring adequate
                  drainage and aeration.
                </p>

                <h4>
                  <strong>Why Choose Our Clay 60/40:</strong>
                </h4>
                <p>
                  At Select Materials, our Clay 60/40 blend is crafted to meet
                  the highest standards for construction use. Our blend offers:
                </p>
                <ul className="list-group list-group-light">
                  <li className="list-group-item">
                    <strong>Optimal Balance:</strong> The perfect mix of clay
                    and sand ensures both stability and drainage, making it
                    versatile for multiple applications..
                  </li>
                  <li className="list-group-item">
                    <strong>High Quality:</strong> Sourced and processed to
                    eliminate impurities, ensuring consistency and reliability
                    in your projects.
                  </li>
                  <li className="list-group-item">
                    <strong>Enhanced Performance:</strong> Ideal for use in
                    sports fields, landscaping, and construction projects
                    requiring firm, stable, and well-drained soil.
                  </li>
                </ul>
                <p>
                  Choose Select Materials for superior Clay 60/40 that enhances
                  the quality and durability of your construction and
                  landscaping projects.
                </p>
                <a
                href="/Contact"
                className="btn btn-dark"
                data-mdb-ripple-init
              >
                Contact For a Quote
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
