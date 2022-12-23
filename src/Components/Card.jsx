import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

const Card = ({ id, name, flag, image }) => {
  return (
    <div className="recipe-card">
      <div className="recipie-img-wrapper">
        <img className="recipe-img" src={image} alt="recipe.png" />
      </div>
      <div className="recipe-desc">
        <h2 className="recipe-name">{name}</h2>
      </div>
      <div className="recipe-flag-wrapper">
        <img className="recipe-flag" src={flag} alt="country.svg" />
      </div>

      <div>
        <Link to={`${id}`}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
