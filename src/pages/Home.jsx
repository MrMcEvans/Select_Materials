import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 29.884951,
  lng: -93.939949
};
const markerPosition = {
  lat: 29.884951, // Replace with the latitude of the marker
  lng: -93.939949 // Replace with the longitude of the marker
};

function MyMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCOgrlyOC6bg6nncXVdJihSflA9XvKrtSc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  )
}

export default function Home() {
  return (
    <div className="container">
      <div className='home-card'>
        <section className="wrap">
          
          <div className="card">
          <h3 className="Tab">About Us</h3>
  <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              amet repellendus recusandae atque eaque distinctio aliquid beatae
              cupiditate facilis, excepturi laboriosam veniam molestiae magni
              similique quod odit architecto officia non.</div>
</div>
            <p>
              
            </p>
          
        </section>
        <section className="wrap">
        <div className="card text-center">
  <div className="card-header">Services</div>
  <div className="card-body">
    <h5 className="card-title">Products we offer</h5>
    <div className="card" style={{width: 'auto'}}>
  <ul className="list-group list-group-light">
    <li className="list-group-item px-3">Cras justo odio</li>
    <li className="list-group-item px-3">Dapibus ac facilisis in</li>
    <li className="list-group-item px-3">Vestibulum at eros</li>
  </ul>
</div>
    <a href="/Contact" className="btn btn-primary" data-mdb-ripple-init>Contact For a Quote</a>
  </div>
  <div className="card-footer text-muted">2 days ago</div>
</div>
        </section>
        <br /><br /><br />
        <section >
        <MyMapComponent className='map'/>
        </section>
      </div>
    </div>
  );
}
