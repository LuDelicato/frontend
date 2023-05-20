import React, { useState, useRef, useEffect } from "react";
import { colors } from "../data/colordata";
import "../../index.css";

export const ProductItems = ({ items, brandID }) => {
  const [selectedItemId, setSelectedItemId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const [qty, setQty] = useState({});

  const add = (itemId) => {
    setQty((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const remove = (itemId) => {
    if (qty[itemId] > 0) {
      setQty((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  useEffect(() => {
    const storedQty = JSON.parse(localStorage.getItem("qty"));
    if (storedQty) {
      setQty(storedQty);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("qty", JSON.stringify(qty));
  }, [qty]);

  const filteredItems = brandID
      ? items.filter((item) => item.brandID === brandID)
      : items;

  const handleItemClick = (itemId) => {
    if (itemId === selectedItemId) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setIsModalOpen(false);
  };

  const outsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  });

  return (
      <>
        <div className="product_items">
          {filteredItems.map((item) => (
              <div key={item.id}>
                <div className="box">
                  <div className="img">
                    <img
                        src={item.cover}
                        alt=""
                        onClick={() => handleItemClick(item.id)}
                    />
                  </div>
                  <div className="details">
                    <h1 className="hidden">{item.title}</h1>
                    <p>Preço: €{item.price}</p>
                    <p className="hidden">Descrição: {item.desc}</p>
                  </div>
                </div>
                <div className="quantity-control">
                  <button
                      className="quantity-btn"
                      onClick={() => remove(item.id)}
                  >
                    -
                  </button>
                  <div className="quantity-box">{qty[item.id] || 0}</div>
                  <button
                      className="quantity-btn"
                      onClick={() => add(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
          ))}
        </div>

        {selectedItemId && isModalOpen && (
            <div className="modal" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{items.find((item) => item.id === selectedItemId)?.title}</h2>
                  <button className="close" onClick={handleCloseModal}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img">
                    <img
                        src={items.find((item) => item.id === selectedItemId)?.cover}
                        alt=""
                    />
                  </div>
                  <div className="quantity-control">
                    <button
                        className="quantity-btn"
                        onClick={() => remove(selectedItemId)}
                    >
                      -
                    </button>
                    <div className="quantity-box">
                      {qty[selectedItemId] || 0}
                    </div>
                    <button
                        className="quantity-btn"
                        onClick={() => add(selectedItemId)}
                    >
                      +
                    </button>
                  </div>
                  <br />
                  <div className="details">
                    <p>
                      Marca:{" "}
                      {items.find((item) => item.id === selectedItemId)?.author}
                    </p>
                    <h4>
                      Preço: €
                      {items.find((item) => item.id === selectedItemId)?.price}
                    </h4>
                    <p>
                      Descrição:{" "}
                      {items.find((item) => item.id === selectedItemId)?.desc}
                    </p>
                  </div>
                  <div className="color-box">
                    <br />
                    <div className="color-container">
                      {colors
                          .filter(
                              (color) =>
                                  color.brandID ===
                                  items.find((item) => item.id === selectedItemId)
                                      ?.brandID
                          )
                          .map((color) => (
                              <div
                                  className="color-circle"
                                  key={color.id}
                                  title={color.name}
                                  style={{ backgroundColor: color.hex }}
                              ></div>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
  );
};
