import React from "react";
import "../styles/SellCar.css";

const SellCar = () => (
  <main className="main-section sell">
    <div className="sell__header">
      <span className="badge">Sell in 24 hours</span>
      <h2 className="section-title">Get the best offer for your car.</h2>
      <p className="section-subtitle">
        Share your car details and let AutoVista match you with verified buyers
        backed by trusted partners.
      </p>
    </div>
    <div className="sell__layout">
      <form className="sell__form">
        <label>
          Car model
          <input type="text" placeholder="e.g. Hyundai Creta" />
        </label>
        <label>
          Registration year
          <input type="number" placeholder="2021" />
        </label>
        <label>
          KM driven
          <input type="number" placeholder="28000" />
        </label>
        <label>
          City
          <input type="text" placeholder="Chennai" />
        </label>
        <label>
          Phone number
          <input type="tel" placeholder="+91 90000 00000" />
        </label>
        <button type="submit" className="primary-button">
          Get instant valuation
        </button>
      </form>
      <div className="sell__steps">
        <div>
          <h3>1. Share your details</h3>
          <p>Tell us about your car and availability for inspection.</p>
        </div>
        <div>
          <h3>2. Schedule inspection</h3>
          <p>Certified experts inspect your car with real-time reporting.</p>
        </div>
        <div>
          <h3>3. Receive offer</h3>
          <p>Get competitive bids powered by live market demand.</p>
        </div>
        <div>
          <h3>4. Get paid</h3>
          <p>Complete paperwork and get paid instantly via secure transfer.</p>
        </div>
      </div>
    </div>
  </main>
);

export default SellCar;
