import vehicle from '../assets/ConstructionVehicle.jpg';
import img1 from '../assets/ConstructionPic1.png';
import img2 from '../assets/ConstructionPic2.png';
import './style.css';
import { Carousel, initMDB } from "mdb-ui-kit";
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';




export default function CarouselInit() {
    useEffect(() => {
        initMDB({ Carousel });
    }, []);
    return (

        <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>


            <div className="carousel-inner rounded-5 shadow-4-strong">
                <div className="carousel-item active" data-mdb-interval="3000">
                    <img src={img1} className="d-block w-100"
                        alt="Sunset Over the City" />
                    <h2>Select Materials</h2>
                    <h3>
                        Port Arthur, TX <br />
                        <HashLink
                            to="#pamap"
                            className="btn btn-dark"
                            role="button"
                        >
                            Directions
                        </HashLink>
                    </h3>
                    
                    
                </div>

                <div className="carousel-item" data-mdb-interval="3000">
                    <img src={img2} className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <h2>Select Materials</h2>
                    <h3>
                        Beaumont, TX <br />
                        <HashLink
                            to="#bemap"
                            className="btn btn-dark"
                            role="button"
                        >
                            Directions
                        </HashLink>
                    </h3>

                </div>

                <div className="carousel-item">
                    <img src={vehicle} className="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />

                    <h2>
                        COMING SOON
                    </h2>
                    <h3><small className="text-muted">Orange Location</small><br />
                        <HashLink
                            to="#bemap"
                            className="btn btn-dark"
                            role="button"
                        >
                            Directions
                        </HashLink></h3>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}