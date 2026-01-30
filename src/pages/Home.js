import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const mostSearched = [
  {
    id: "ms-1",
    title: "Electric Cars",
    subtitle: "Top EV picks in Hyderabad",
    image:
      "https://images.unsplash.com/photo-1549921296-3b4a4a03a1ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ms-2",
    title: "Hyundai Kona Electric",
    subtitle: "Hot deals · 2022 - 2024",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ms-3",
    title: "Kia Seltos GTX Plus",
    subtitle: "Premium certified listings",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
  }
];

const trustPillars = [
  {
    title: "Verified Listings",
    description: "KYC-backed sellers and inspection-ready inventory."
  },
  {
    title: "Secure Payments",
    description: "Escrow-ready digital payments with instant receipts."
  },
  {
    title: "Trusted Sellers",
    description: "Ratings and review-backed seller networks."
  },
  {
    title: "Smart Discovery",
    description: "Location-first matches from the discovery service."
  },
  {
    title: "Concierge Support",
    description: "Dedicated help from search to delivery."
  }
];

const brandLogos = [
  "Hyundai",
  "Tata",
  "Kia",
  "Maruti Suzuki",
  "Mahindra",
  "Toyota"
];

const Home = () => {
  const carTypes = useMemo(
    () => ["SUV", "Sedan", "Hatchback", "Luxury", "Electric"],
    []
  );
  const models = useMemo(
    () => ["All models", "Creta", "Seltos", "City", "Nexon EV"],
    []
  );
  const cities = useMemo(
    () => ["Hyderabad", "Bengaluru", "Chennai", "Pune", "Delhi NCR"],
    []
  );
  const fuels = useMemo(() => ["Petrol", "Diesel", "EV", "Hybrid"], []);

  const [filters, setFilters] = useState({
    type: carTypes[0],
    model: models[0],
    city: cities[0],
    fuel: fuels[0]
  });

  const summary = `${filters.type} · ${filters.model} · ${filters.city} · ${filters.fuel}`;

  const handleChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleReset = () => {
    setFilters({
      type: carTypes[0],
      model: models[0],
      city: cities[0],
      fuel: fuels[0]
    });
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__search">
            <div className="hero__badge">Find your right car</div>
            <p>Showing best deals near {filters.city}</p>
            <label className="hero__field">
              <span>Car type</span>
              <select value={filters.type} onChange={handleChange("type")}>
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="hero__field">
              <span>Model</span>
              <select value={filters.model} onChange={handleChange("model")}>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </label>
            <label className="hero__field">
              <span>City</span>
              <select value={filters.city} onChange={handleChange("city")}>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <label className="hero__field">
              <span>Fuel</span>
              <select value={filters.fuel} onChange={handleChange("fuel")}>
                {fuels.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </label>
            <div className="hero__price">
              <div>
                <span>Price</span>
                <strong>₹3,00,000 - ₹15,00,000</strong>
              </div>
              <div className="hero__slider">
                <span />
                <span className="hero__slider-knob" />
                <span className="hero__slider-knob" />
              </div>
            </div>
            <div className="hero__buttons">
              <Link to="/inventory" className="primary-button">
                Search
              </Link>
              <button
                type="button"
                className="secondary-button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className="hero__summary">{summary}</div>
          </div>

          <div className="hero__content">
            <span className="badge">carhub360 · epitomehub experience</span>
            <h2>Find your perfect car in Hyderabad</h2>
            <p>
              Starts at <strong>₹13.66 LAKH</strong> with verified inspections,
              discovery insights, and secure gateway services.
            </p>
            <div className="hero__cta">
              <Link to="/inventory" className="primary-button">
                View more
              </Link>
              <button type="button" className="secondary-button">
                Talk to expert
              </button>
            </div>
            <div className="hero__card">
              <div>
                <h4>Verified Listings</h4>
                <p>Only authenticated vehicles from trusted sellers.</p>
              </div>
              <div>
                <h4>Secure Payments</h4>
                <p>Gateway-protected transfers with full visibility.</p>
              </div>
              <div>
                <h4>Trusted Sellers</h4>
                <p>Ratings, history, and chat support included.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__image" />
      </section>

    <section className="main-section search-section">
      <div className="section-heading">
        <h2 className="section-title">Most searched cars in Hyderabad</h2>
        <p className="section-subtitle">
          Curated discovery powered by backend listing, notification, and chat
          services.
        </p>
      </div>
      <div className="search-grid">
        {mostSearched.map((item) => (
          <article key={item.id} className="search-card">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            <button type="button" className="secondary-button">
              View all
            </button>
          </article>
        ))}
      </div>
    </section>

    <section className="main-section trust-section">
      <div className="section-heading">
        <h2 className="section-title">
          Trusted by millions for an effortless experience
        </h2>
      </div>
      <div className="trust-grid">
        {trustPillars.map((pillar) => (
          <div key={pillar.title} className="trust-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="main-section brand-section">
      <div className="brand-header">
        <h2 className="section-title">Top brands on carhub360</h2>
        <button type="button" className="secondary-button">
          View all
        </button>
      </div>
      <div className="brand-grid">
        {brandLogos.map((brand) => (
          <div key={brand} className="brand-pill">
            {brand}
          </div>
        ))}
      </div>
    </section>
    </main>
  );
};

export default Home;
