import React, { useState, useEffect } from "react";
import { images } from "../data/gallery";
import { AiFillInstagram } from "react-icons/ai";

function Arte() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = (image) => {
    if (!isMobile) {
      setModalContent(image);
      setShowModal(true);
    }
  };

  const handleCaptionClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className="h1">
        <h1>Galeria de Arte</h1>
      </div>
      <div className="gallery-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.cover} alt={image.name} className="gallery-image" />
            <div
              className="gallery-caption"
              onClick={(event) => handleCaptionClick(event)}
            >
              <p className="gallery-name">{image.name}</p>
              <p className="gallery-author">
                Autor: {image.author}{" "}
                <a
                  className="iGicon"
                  href={image.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </p>
              <p className="gallery-price">Preço: {image.price}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="gallery-modal" onClick={() => setShowModal(false)}>
          <div
            className="gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={modalContent.cover} alt={modalContent.name} />
          </div>
        </div>
      )}
    </>
  );
}

export default Arte;
