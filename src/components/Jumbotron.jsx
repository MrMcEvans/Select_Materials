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
        <div className="card-body">
          <h5 className="card-title2">Select Materials </h5>
          <h6 className='card-title3'>Port Arthur, Texas</h6>

          <p className="card-text">

            At Select Materials, we specialize in providing premium-grade dirt tailored to
            the demands of commercial and residential projects.
            Our commitment to excellence ensures that you receive the highest quality materials,
            meeting the rigorous standards of your professional endeavors.
          </p>
          <p>Your trust is important to us, and we are dedicated to providing
            you with the best service and products available.</p>

        </div>
      </div>
    </div>
  );
}
