import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/icon.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
  <div className="container navbar-content flex">
    <div className="brand-and-toggler flex flex-sb">
      <a href="#book-section" className="navbar-brand flex">
        <img src={logoImg} alt="site logo" />
        <span className="text-uppercase fw-7 fs-24 ls-1">LitSeek</span>
        
      </a>

      <button
        type="button"
        className="navbar-toggler-btn"
        onClick={handleNavbar}
      >
        <HiOutlineMenuAlt3
          size={35}
          style={{
            color: `${toggleMenu ? "#fff" : "#010101"}`,
          }}
        />
      </button>
    </div>

    <div
      className={
        toggleMenu
          ? "navbar-collapse show-navbar-collapse"
          : "navbar-collapse"
      }
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#book-section"
            className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
          >
            Home
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#about-section"
            className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar