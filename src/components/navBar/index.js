import React, { useState, useEffect } from "react";
import "./style.scss";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  useEffect(() => {
    const OnBodyClick = () => {
      setToggleIcon(false);
    };

    document.body.addEventListener("click", OnBodyClick);

    return () => {
      document.body.removeEventListener("click", OnBodyClick);
    };
  });

  const handleToggleIcon = (e) => {
    e.stopPropagation();
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-container-logo">
            <FaReact size={30} />
          </Link>
          <ul className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}>
            {data.map((item, ind) => (
              <li
                key={ind}
                className={` navbar-container-menu-item ${
                  item ? !toggleIcon : ""
                }`}
                // onChange={toggleChecked}
              >
                <Link className="navbar-container-menu-item-links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-icon" onClick={(e) => handleToggleIcon(e)}>
            {toggleIcon ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
