import React from "react";
import selectMaterialsImage from '../assets/SelectMaterials.png';


export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
        <div className="container text-center">
        <p className="lead">Port Arthur, TX</p>
          <img
            src={selectMaterialsImage}
            className="img-fluid responsive-img"
            alt="Responsive image"
          />
          {/* <h1 className="display-4">Select Materials</h1> */}
          
        </div>
      </div>
  );
}