import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { navbar } from "../data/data";
import DarkModeBtn from "./DarkModeBtn";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ darkMode, cartQuantity }) => {
  const [mobile, setMobile] = useState(false);
  const [headerClass, setHeaderClass] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setHeaderClass("active");
      } else {
        setHeaderClass("");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDarkModeToggle() {}

  const handleUserClick = () => {
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
      <header className={`header ${headerClass}`}>
        <div className="container">
          <nav className="navbar">
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                    <AiOutlineClose className="close heIcon" />
                ) : (
                    <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <a href="/" target={"_self"} rel="noreferrer">
                <img
                    id="logo"
                    src={
                      darkMode
                          ? "/images/oldschool_black.png"
                          : "/images/oldschool_white.png"
                    }
                    alt=""
                />
              </a>
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navbar.map((nav) => (
                    <li key={nav.id}>
                      <div>
                        <NavLink
                            to={nav.path}
                            onClick={(e) => {
                              setMobile(false);
                              handleClick(e);
                            }}
                        >
                          {nav.text}
                        </NavLink>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_user">
              <DarkModeBtn
                  className="dark-mode-btn"
                  onToggle={handleDarkModeToggle}
              />

              <button className="right_user" onClick={handleUserClick}>
                <FaUser />
              </button>
              <button className="right_user" onClick={handleCartClick}>
                <FaShoppingCart />
                <span className="cart-quantity">{cartQuantity}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
};
