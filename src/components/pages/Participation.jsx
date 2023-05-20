import React, { useState, useEffect } from "react";
import { participation } from "../data/gallery";

function Participation() {
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
        <h1>Participações</h1>
        <p>
          A Oldschool tem parceria com várias entidades/pessoas. Aqui podes
          ver-nos em ação em algumas participações!
        </p>
      </div>
      <div className="gallery-container">
        {participation.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => handleImageClick(item)}
          >
            <img src={item.cover} alt={item.name} className="gallery-image" />
            <div
              className="gallery-caption"
              onClick={(event) => handleCaptionClick(event)}
            >
              <p className="gallery-name">{item.name}</p>
              <p className="gallery-desc">{item.desc}</p>
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

export default Participation;
