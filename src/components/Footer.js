import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div>
        <h3>carhub360</h3>
        <p>
          Cardekho-inspired marketplace with epitomehub polish, backed by
          secure backend services.
        </p>
      </div>
      <div className="footer__columns">
        <div>
          <h4>Marketplace</h4>
          <ul>
            <li>Browse inventory</li>
            <li>Sell your car</li>
            <li>Verified partners</li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Chat support</li>
            <li>Notifications</li>
            <li>Gateway payments</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>hello@carhub360.com</li>
            <li>+91 90000 00000</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="footer__copyright">
      © 2024 carhub360. Built for trusted second-hand car journeys.
    </p>
  </footer>
);

export default Footer;
