import React from "react";
import vehicle from '../assets/ConstructionVehicle.jpg';


export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
        <div class="-logo-card">
  <img src={vehicle} id="logo" class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-body">
    <h5 class="card-title2">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              amet repellendus recusandae atque eaque distinctio aliquid beatae
              cupiditate facilis, excepturi laboriosam veniam molestiae magni
              similique quod odit architecto officia non.</p>
    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
  </div>
</div>
      </div>
  );
}