import React, { useEffect, useState } from "react";
import "./Header.scss";
import {
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiPlus,
} from "react-icons/fi";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsFixed(scrollTop > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx("app-header", {
        ["fixed"]: isFixed,
      })}
    >
      {/* <div className="left-section">
        <img
          srcSet="/images/logo.png 2x"
          alt="Metafora Logo"
          className="logo"
        />
      </div> */}

      <div className="center-section">
        <div className="search-bar">
          <FiSearch className="icon" />
          <input type="text" placeholder="Rechercher dans Metafora" />
        </div>
        <button className="add-button">
          <FiPlus className="icon" />
        </button>
      </div>

      <div className="right-section">
        <FiBell className="icon" />
        <FiHelpCircle className="icon" />
        <FiSettings className="icon" />
        <div className="user-info">
          <img src="/images/logo.png" alt="User Avatar" className="avatar" />
          <div className="text">
            <div className="name">Sébastien Hanouna</div>
            <div className="role">CEO, Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
