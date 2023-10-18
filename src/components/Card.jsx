

import PropTypes from 'prop-types';

export default function Card({ title, image, description, link}) {
    return (
        <div className='main'>
        <div className="card">
            <img src={image} className="card-img-bottom" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary">View Project</a>
            </div>
        </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
