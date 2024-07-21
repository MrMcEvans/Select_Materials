import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const containerStyle = {
  width: '45%',
  height: '400px',
  margin: '10px',
};

const gridStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  marginBottom: '100px',

};

const paCenter = {
  lat: 29.884951,
  lng: -93.939949,
};

const paMarkerPosition = {
  lat: 29.929557,
  lng: -93.988127,
};
const beCenter = {
  lat: 30.152375,
  lng: -94.246815,
};

const beMarkerPosition = {
  lat: 30.152375,
  lng: -94.246815,
};

function MyMapComponent() {
  const handleMarkerClick = () => {
    const paAddress = '2570 Halbouty, Port Arthur, TX 77640';
    const beAddress = '11555 Tram Road Beaumont, Tx, 77713';
    const paencodedAddress = encodeURIComponent(paAddress);
    const beencodedAddress = encodeURIComponent(beAddress);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${paencodedAddress}`;
    const bemapsURL = `https://www.google.com/maps/search/?api=1&query=${beencodedAddress}`;
    window.open(bemapsURL, '_blank');
    window.open(mapsUrl, '_blank');
  };

  return (
    <div style={gridStyle} id='bemap'className='map'>
      <div style={containerStyle} className='map-item'>
        <h2>Beaumont, TX</h2>
        <LoadScript googleMapsApiKey="AIzaSyCOgrlyOC6bg6nncXVdJihSflA9XvKrtSc">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={beCenter}
            zoom={10}
          >
            <Marker position={beMarkerPosition} onClick={handleMarkerClick} />
          </GoogleMap>
        </LoadScript>
      </div>

      <div style={containerStyle} id='pamap'className='map-item'>
        <h2>Port Arthur, TX</h2>
        <LoadScript googleMapsApiKey="AIzaSyCOgrlyOC6bg6nncXVdJihSflA9XvKrtSc">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={paCenter}
            zoom={10}
          >
            <Marker position={paMarkerPosition} onClick={handleMarkerClick} />
          </GoogleMap>
        </LoadScript>

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Carousel />
      <div className="home-card">
        <section className="wrap">
          <div className="card">
            <h1 className="card-title">Who We Are</h1>
            <div className="card-body">

              <h2>Welcome to Select Materials</h2>
              <p>
                Located in the heart of Port Arthur and Beaumont, TX, Select Materials has
                been a trusted provider of high-quality soil, gravel, and
                landscaping materials <strong> since 2019 </strong>. We
                are dedicated to serving both industrial and commercial
                customers with top-notch products and exceptional customer
                service.
              </p>
              <br />
              <hr className="hr hr-blurry" />
              <br className='' />
              <br />

              <div className=''>
                <h2><strong>What Sets Us Apart</strong></h2>
                <ul className='list-group'>
                  <li >
                    <strong>Quality Products:</strong> We source only the best
                    materials to ensure your projects are built to last.
                  </li >
                  <li >
                    <strong>Industrial Expertise:</strong> At Select Materials, we understand the unique requirements of industrial projects and are equipped to deliver the high-quality materials and expert guidance necessary to ensure their success. Our commitment to excellence and customer satisfaction makes us the preferred choice for both industrial and commercial needs in the region.
                  </li>
                  <li >
                    <strong>Commercial Expertise:</strong>We offer specialized advice and support tailored to the needs of commercial projects, helping you achieve outstanding results.
                  </li>
                  <li >
                    <strong>Customer Satisfaction:</strong> We are committed to
                    exceeding your expectations with every interaction.
                  </li >
                  <li >
                    <strong>Local Focus:</strong> As a locally owned and operated
                    business, we take pride in contributing to the community and
                    supporting local projects.
                  </li>
                </ul>
              
              </div>
              <br />
              <br className='' />
              <hr className="hr hr-blurry" />
              <br />

              <h2>Our Products</h2>
              <p>We offer a wide range of products including:</p>
              <ul className='list-group list-group-light'>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Clay</strong>
                </Link></ul>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Clay 60/40</strong>
                </Link></ul>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Top Soil</strong>
                </Link></ul>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Sand</strong>
                </Link></ul>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Lime Stabilized Soil</strong>
                </Link></ul>
                <ul className="list-group-item"><Link
                  to="/About#"
                  className="btn btn-dark"
                  role="button"
                >
                  <strong>Gravel</strong>
                </Link></ul>

              </ul>

              <p className='products-p'>
                Whether you are working on a small garden or a large
                industrial project, Select Materials has the supplies you need
                to get the job done right.
              </p>


              <br />
              <hr className="hr hr-blurry" />
              <br />
              <div className=''>
                <h2>Contact Us</h2>
                <p>
                  Please give us a call, or explore
                  our website to learn more about our products and services. Our
                  team is here to help you every step of the way.
                </p>
                <p>
                  Thank you for choosing Select Materials. We look forward to
                  serving you!
                </p>
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
          <p></p>
        </section>

        <br />
        <br />
        <br />
        <section>
          <MyMapComponent id="map" className="map" />
        </section>
      </div>
    </div>
  );
}



{/* <section className="wrap">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title">Services we offer</h2>
              <div className="card" style={{ width: 'auto' }}>
                <ul className="list-group list-group-dark">
                  <li className="list-group-item px-3">Cras justo odio</li>
                  <li className="list-group-item px-3">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item px-3">Vestibulum at eros</li>
                </ul>
              </div>
              
            </div>
          </div>
        </section> */}