import React from "react";
import { Link } from "react-router-dom";
import inventory from "../data/inventory";
import "../styles/Inventory.css";

const Inventory = () => (
  <main className="main-section inventory">
    <div className="inventory__header">
      <div>
        <span className="badge">Live inventory</span>
        <h2 className="section-title">Browse verified pre-owned cars</h2>
        <p className="section-subtitle">
          Inventory updates every 30 minutes with backend market pricing,
          inspection reports, and ownership details.
        </p>
      </div>
      <div className="inventory__filters">
        <button type="button" className="filter-button active">
          All cars
        </button>
        <button type="button" className="filter-button">SUV</button>
        <button type="button" className="filter-button">Sedan</button>
        <button type="button" className="filter-button">EV</button>
      </div>
    </div>
    <div className="inventory__grid">
      {inventory.map((car) => (
        <article key={car.id} className="inventory-tile">
          <img src={car.image} alt={car.name} />
          <div className="inventory-tile__body">
            <div className="inventory-tile__top">
              <h3>{car.name}</h3>
              <span className="inventory-tile__tag">{car.tag}</span>
            </div>
            <p>
              {car.mileage} · {car.fuel} · {car.transmission}
            </p>
            <div className="inventory-tile__footer">
              <strong>{car.price}</strong>
              <Link to={`/inventory/${car.id}`}>View details</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </main>
);

export default Inventory;
