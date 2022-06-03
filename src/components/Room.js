import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/default.png";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <>
      <div className="single_offers">
        <div className="about_thumb">
          <img src={images[0] || defaultImg} alt="single room" />
        </div>
        <h3>{name}</h3>
        <ul>
          <li>{price} $</li>
        </ul>
        <Link className="book_now" to={`/rooms/${slug}`}>
          Feature
        </Link>
      </div>
    </>
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
