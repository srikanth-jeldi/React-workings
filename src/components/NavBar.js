import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__content">
      <div className="navbar__brand">
        <span className="navbar__logo">CH</span>
        <div>
          <h1>carhub360</h1>
          <p>Epitome-grade used cars</p>
        </div>
      </div>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Explore
        </NavLink>
        <NavLink to="/inventory">Buy Cars</NavLink>
        <NavLink to="/sell">Sell Car</NavLink>
        <NavLink to="/inventory">My Listings</NavLink>
        <NavLink to="/contact">Support</NavLink>
      </nav>
      <div className="navbar__actions">
        <div className="navbar__greeting">
          <span>Good afternoon, Balaji</span>
          <small>Verified seller</small>
        </div>
        <button type="button" className="secondary-button">
          Dashboard
        </button>
        <button type="button" className="primary-button">
          Logout
        </button>
      </div>
    </div>
  </header>
);

export default NavBar;
