import vehicle from '../assets/ConstructionVehicle.jpg';
import './style.css';

export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
      <div className="-logo-card">
        <img
          src={vehicle}
          id="logo"
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="Jumbotron-Text">
          <h5 className="card-title2">Select Materials </h5>
          <h6 className='card-title3'>Port Arthur, Texas</h6>
        </div>
      </div>
    </div>
  );
}
