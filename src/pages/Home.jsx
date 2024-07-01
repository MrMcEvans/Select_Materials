import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Jumbotron from '../components/Jumbotron';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 29.884951,
  lng: -93.939949,
};
const markerPosition = {
  lat: 29.884951, // Replace with the latitude of the marker
  lng: -93.939949, // Replace with the longitude of the marker
};

function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCOgrlyOC6bg6nncXVdJihSflA9XvKrtSc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Jumbotron />
      <div className="home-card">
        <section className="wrap">
          <div className="card">
            <h1 className="card-title">Who are we?</h1>
            <div className="card-body">
              
                <h2>Welcome to Select Materials</h2>
              <p>
                Located in the heart of Port Arthur, TX, Select Materials has
                been a trusted provider of high-quality soil, gravel, and
                landscaping materials <strong> since 2019 </strong>. We
                are dedicated to serving both residential and commercial
                customers with top-notch products and exceptional customer
                service.
              </p>
              <br />
              <br />
              <br />

              <div className='card'>
              <h2>Our Mission</h2>
              
              
              <p>
                Our mission is to provide the best materials and services to
                help our customers create beautiful, sustainable, and functional
                outdoor spaces. We believe in building long-term relationships
                based on trust, quality, and reliability.
                
              </p>
              </div>
              <br />
              <br />
              <br />

              <div className='card'>
              <h2>What Sets Us Apart</h2>
              <ul className='list-group'>
                <li >
                  <strong>Quality Products:</strong> We source only the best
                  materials to ensure your projects are built to last.
                </li >
                <li >
                  <strong>Expertise:</strong> Our knowledgeable team is here to
                  offer advice and assistance tailored to your specific needs.
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
              <br />
              <br />
              
              <h2>Our Products</h2>
              <p>We offer a wide range of products including:</p>
              <ul className='list-group list-group-light'>
                <ul className="list-group-item"><a
                      href="/About"
                      className="btn btn-dark"
                      role="button"
                    >
                      <strong>Pure Clay</strong>
                    </a></ul>
                <ul className="list-group-item"><a
                      href="/About"
                      className="btn btn-dark"
                      role="button"
                    >
                      <strong>Top Soil</strong>
                    </a></ul>
                <ul className="list-group-item"><a
                      href="/About"
                      className="btn btn-dark"
                      role="button"
                    >
                      <strong>Clay 60/40</strong>
                    </a></ul>
                
              </ul>
              
              <p>
                Whether you are working on a small garden or a large
                construction project, Select Materials has the supplies you need
                to get the job done right.
              </p>
              
              <br />
              <br />
              <br />
              <div className='card'>
              <h2>Contact Us</h2>
              <p>
                We invite you to visit our facility, give us a call, or explore
                our website to learn more about our products and services. Our
                team is here to help you every step of the way.
              </p>
              <p>
                Thank you for choosing Select Materials. We look forward to
                serving you!
              </p>
              <a
                href="/Contact"
                className="btn btn-secondary btn-lg"
                data-mdb-ripple-init
              >
                Contact For A Quote
              </a>
              </div>
            </div>
          </div>
          <p></p>
        </section>
        
        <br />
        <br />
        <br />
        <section>
          <MyMapComponent className="map" />
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