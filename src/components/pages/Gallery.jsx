import React from "react";
import { Link } from "react-router-dom";
import { galleries } from "../data/gallery";

function Gallery() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="card-container">
        {galleries.map((gal) => (
          <Link
            key={gal.id}
            to={gal.path}
            className="card"
            onClick={handleClick}
          >
            <div className="card-content">{gal.name}</div>
            <div className="card-img-container">
              <img src={gal.img} alt=""></img>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Gallery;
