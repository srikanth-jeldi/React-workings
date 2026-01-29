import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div>
        <h3>AutoVista Marketplace</h3>
        <p>
          Bringing together vetted sellers, instant financing, and transparent
          inspections.
        </p>
      </div>
      <div className="footer__columns">
        <div>
          <h4>Marketplace</h4>
          <ul>
            <li>Inventory</li>
            <li>Certified partners</li>
            <li>Trade-in offers</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Shipping policy</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>hello@autovista.com</li>
            <li>+91 9944 222 111</li>
            <li>Chennai, India</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="footer__copyright">
      © 2024 AutoVista. Built with secure services and verified sellers.
    </p>
  </footer>
);

export default Footer;
