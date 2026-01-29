import React from "react";
import { Link, useParams } from "react-router-dom";
import inventory from "../data/inventory";
import "../styles/Vehicle.css";

const Vehicle = () => {
  const { id } = useParams();
  const car = inventory.find((item) => item.id === id) || inventory[0];

  return (
    <main className="main-section vehicle">
      <div className="vehicle__breadcrumbs">
        <Link to="/inventory">Inventory</Link> / {car.name}
      </div>
      <div className="vehicle__layout">
        <div className="vehicle__media">
          <img src={car.image} alt={car.name} />
          <div className="vehicle__gallery">
            <img
              src="https://images.unsplash.com/photo-1502872364588-894d4eb27752?auto=format&fit=crop&w=600&q=80"
              alt="Interior"
            />
            <img
              src="https://images.unsplash.com/photo-1502872364588-894d4eb27752?auto=format&fit=crop&w=600&q=80"
              alt="Dashboard"
            />
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=600&q=80"
              alt="Side profile"
            />
          </div>
        </div>
        <div className="vehicle__details">
          <span className="badge">{car.tag}</span>
          <h2>{car.name}</h2>
          <p className="vehicle__price">{car.price}</p>
          <p className="vehicle__meta">
            {car.mileage} · {car.fuel} · {car.transmission}
          </p>
          <div className="vehicle__highlights">
            <div>
              <h4>Inspection score</h4>
              <p>98 / 100</p>
            </div>
            <div>
              <h4>Ownership</h4>
              <p>Single owner</p>
            </div>
            <div>
              <h4>Warranty</h4>
              <p>6 months included</p>
            </div>
          </div>
          <div className="vehicle__actions">
            <button type="button" className="primary-button">
              Book a test drive
            </button>
            <button type="button" className="secondary-button">
              Download report
            </button>
          </div>
          <div className="vehicle__service">
            <h3>Why it stands out</h3>
            <ul>
              <li>Backend verified service history and insurance status.</li>
              <li>Instant transfer paperwork with e-signature.</li>
              <li>Financing offers from 12+ lenders in minutes.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vehicle;
