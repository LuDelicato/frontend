import React, { useState } from "react";
import { hero } from "../data/data";

function ItemCards({ setSelectedCategoryID }) {
  const [changeCategory, setchangeCategory] = useState(null);

  const changeCardColor = (id) => {
    if (id === changeCategory) {
      setchangeCategory(null);
      setSelectedCategoryID(null);
    } else {
      setchangeCategory(id);
      setSelectedCategoryID(id);
    }
  };

  return (
    <section className="itemCards">
      {hero.map((item) => (
        <div
          className={`card ${
            changeCategory === item.categoryID
              ? `active-category category-${changeCategory}`
              : ""
          }`}
          key={item.id}
          onClick={() => changeCardColor(item.categoryID)}
        >
          <div className="left">
            <img src={item.cover} alt="" />
          </div>
          <div className="right">
            <h1>{item.name}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ItemCards;
