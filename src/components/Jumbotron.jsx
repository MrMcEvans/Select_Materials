import vehicle from '../assets/ConstructionVehicle.jpg';
import './style.css';

export default function Jumbotron() {
  return (
    <div class="bg-image">
    <img
      src={vehicle}
      class="img-fluid"
      alt="Sample"
    />
    <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <p class="text-white mb-0">Can you see me?</p>
      </div>
    </div>
  </div>
)}



