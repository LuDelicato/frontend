import React from "react";
import Chatbot from "../common/Chatbot";
import { social } from "../data/socialmedia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";

library.add(faHeart);

function Footer() {
  const heartStyle = {
    "--fa-animation-duration": "0.5s",
  };

  return (
    <footer className="footer">
      <ul>
        {social.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              className={`links ${item.name}`} /* Add CSS class based on social media name */
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
      <Chatbot />
      <div className="privServ">
        <a href="privacidade" className="privacy">
          Política de Privacidade
        </a>
        <span className="slash"> / </span>
        <a href="termosdeservico" className="privacy">
          Termos de Serviço
        </a>
      </div>

      <div className="footer">
        <div className="copyright">
          <p>Copyright © 2023 Oldschool® Todos os Direitos Reservados</p>
        </div>
        <div className="madeby">
          <p>
            Made with{" "}
            <FontAwesomeIcon
              icon="heart"
              className="fa-beat"
              style={heartStyle}
            />{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/luanna-delicato-7535a5139/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ld">Luanna Delicato</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
