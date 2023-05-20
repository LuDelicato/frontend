import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import "./DarkMode.css";

function DarkModeBtn(props) {
  const [darkMode, setDarkMode] = useState(() => {
    const keepTheme = localStorage.getItem("darkMode");
    return keepTheme ? JSON.parse(keepTheme) : false;
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    const image = document.getElementById("logo");
    if (darkMode) {
      image.src = "/images/oldschool_white.png";
    } else {
      image.src = "/images/oldschool_black.png";
    }

    const srcImage = document.getElementById("about");
    if (!srcImage) {
      return;
    }
    if (darkMode) {
      srcImage.src = "/images/about_us_whiteMode.png";
    } else {
      srcImage.src = "/images/about_us_darkMode.png";
    }
  }

  return (
    <button className="button" type="button" onClick={toggleDarkMode}>
      <MdDarkMode className="userIcon heIcon" />
    </button>
  );
}

export default DarkModeBtn;
