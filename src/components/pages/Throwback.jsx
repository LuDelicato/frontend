import React, { useState, useEffect } from "react";
import { throwback } from "../data/gallery";
import YouTube from "react-youtube";

function Throwback() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [videoId] = useState("pV9GkEnG8kw");
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
        <h1>Throwback</h1>
        <p>
          Aqui encontras malta que passou pela nossa loja! Obrigada a todxs pelo
          apoio incondicional!
        </p>
      </div>
      <div className="video-container">
        <div className="gallery-video">
          <YouTube videoId={videoId} />
        </div>
      </div>
      <div className="gallery-container">
        {throwback.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => handleImageClick(item)}
          >
            <img src={item.cover} alt={item.name} className="gallery-image" />
            <div
              className="gallery-caption"
              onClick={(event) => handleCaptionClick(event)}
            ></div>
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

export default Throwback;
