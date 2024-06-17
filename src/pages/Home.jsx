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
      <h2 className="caption" id="captionText">
      </h2>
      <div>
        <section className="wrap">
          <h3 className="Tab">About Us</h3>
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              amet repellendus recusandae atque eaque distinctio aliquid beatae
              cupiditate facilis, excepturi laboriosam veniam molestiae magni
              similique quod odit architecto officia non.
            </p>
          
        </section>
        <section className="wrap">
        <div className="section-container">
            <h3 className="Work">Placeholder</h3>
        
          <ul  className="imgClass ">

                            
              <li>
               
              </li>
              <li>
               
              </li>
              <li>
                
              </li>

          </ul>
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
