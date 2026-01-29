import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__content">
      <div className="navbar__brand">
        <span className="navbar__logo">AV</span>
        <div>
          <h1>AutoVista</h1>
          <p>Used Cars, Reimagined</p>
        </div>
      </div>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/sell">Sell</NavLink>
        <NavLink to="/financing">Financing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="navbar__actions">
        <button type="button" className="secondary-button">
          Log in
        </button>
        <button type="button" className="primary-button">
          Schedule test drive
        </button>
      </div>
    </div>
  </header>
);

export default NavBar;
