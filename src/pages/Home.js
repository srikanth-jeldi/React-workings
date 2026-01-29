import React from "react";
import { Link } from "react-router-dom";
import inventory from "../data/inventory";
import "../styles/Home.css";

const Home = () => (
  <main>
    <section className="hero">
      <div className="hero__content">
        <span className="badge">Trusted by 12K+ buyers across India</span>
        <h2>Buy & sell pre-owned cars with total confidence.</h2>
        <p>
          AutoVista connects you to verified sellers, 210-point inspections, and
          instant financing—all powered by smart backend services.
        </p>
        <div className="hero__actions">
          <Link to="/inventory" className="primary-button">
            Explore inventory
          </Link>
          <Link to="/sell" className="secondary-button">
            Get an instant offer
          </Link>
        </div>
        <div className="hero__stats">
          <div>
            <h3>48 hrs</h3>
            <p>Average delivery time</p>
          </div>
          <div>
            <h3>4.9/5</h3>
            <p>Customer satisfaction</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>Cities served</p>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__card">
          <h4>Live offer tracker</h4>
          <p>See price drops and dealer bids in real time.</p>
          <div className="hero__card-details">
            <div>
              <span>Bid range</span>
              <strong>₹8.9L - ₹10.2L</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>2 days</strong>
            </div>
          </div>
        </div>
        <div className="hero__image" />
      </div>
    </section>

    <section className="main-section">
      <div className="section-heading">
        <h2 className="section-title">Featured cars ready for the road</h2>
        <p className="section-subtitle">
          Handpicked inventory synced with the backend in real time for pricing,
          inspections, and ownership transfers.
        </p>
      </div>
      <div className="inventory-grid">
        {inventory.map((car) => (
          <article key={car.id} className="inventory-card">
            <img src={car.image} alt={car.name} />
            <div className="inventory-card__body">
              <div className="inventory-card__tag">{car.tag}</div>
              <h3>{car.name}</h3>
              <p className="inventory-card__meta">
                {car.mileage} · {car.fuel} · {car.transmission}
              </p>
              <div className="inventory-card__price">
                <span>{car.price}</span>
                <Link to={`/inventory/${car.id}`}>View details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="main-section value-section">
      <div>
        <span className="badge">Why AutoVista</span>
        <h2 className="section-title">A world-class experience end-to-end.</h2>
      </div>
      <div className="card-grid">
        <div className="info-card">
          <h3>Verified sellers</h3>
          <p>
            KYC-backed listings with instant ownership history from the backend
            services.
          </p>
        </div>
        <div className="info-card">
          <h3>Inspection reports</h3>
          <p>
            210-point checks, high-res photos, and diagnostics delivered in the
            app.
          </p>
        </div>
        <div className="info-card">
          <h3>Smart financing</h3>
          <p>
            Approval in minutes with real-time rate comparisons and flexible EMI
            plans.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
