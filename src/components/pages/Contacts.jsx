import React from "react";

function Iframe() {
  return (
    <div className="iframe">
      <h1>Encontra-nos aqui!</h1>
      <a
        href="https://www.google.com/maps/place/Oldschool/@41.1244943,-8.6181819,17z/data=!3m1!4b1!4m6!3m5!1s0xd2464d61d5013cb:0xa43b7fdd9fa6ca0!8m2!3d41.1244943!4d-8.6159932!16s%2Fg%2F11c5bjc6qr"
        target="_blank"
        rel="noreferrer"
      >
        <img className="iframe-image" src="/images/map.png" alt="" />
      </a>
      <p>
        <span>
          <a href="tel:+351917274301">+351 917 274 301</a>
        </span>
      </p>
      <p>
        <span>
          <span>
            Segunda a sexta-feira das 14h00 às 18h00.
          </span>
        </span>
      </p>
    </div>
  );
}

export default Iframe;
