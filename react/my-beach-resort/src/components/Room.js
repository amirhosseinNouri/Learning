import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  console.log(here);
  return (
    <article className="room">
      <div className="img-container">
        <picture>
          <source
            type="image/webp"
            srcset={`${images[0]}.split('.')[0].webp`}
          />
          <source
            type="image/jpeg"
            srcset={`${images[0]}.split('.')[0].jpeg`}
          />
          <img src={images[0] || defaultImage} alt="Single Room" />
        </picture>
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link className="btn-primary room-link" to={`/rooms/${slug}`}>
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
