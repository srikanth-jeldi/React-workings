import React from "react";
import "../styles/Financing.css";

const Financing = () => (
  <main className="main-section financing">
    <div className="financing__header">
      <span className="badge">Instant approvals</span>
      <h2 className="section-title">Flexible financing built for you.</h2>
      <p className="section-subtitle">
        Compare offers from leading banks, manage EMI schedules, and upload
        documents securely in one place.
      </p>
    </div>
    <div className="financing__grid">
      <div className="financing__card">
        <h3>Personalized EMI</h3>
        <p>Choose flexible tenures with competitive interest rates.</p>
        <ul>
          <li>Starting at 8.5% APR</li>
          <li>Tenure from 12-84 months</li>
          <li>No hidden charges</li>
        </ul>
      </div>
      <div className="financing__card">
        <h3>Paperless approvals</h3>
        <p>Upload documents digitally and track approvals in real time.</p>
        <ul>
          <li>Instant eligibility checks</li>
          <li>Secure document vault</li>
          <li>Automated status updates</li>
        </ul>
      </div>
      <div className="financing__card">
        <h3>Trade-in benefits</h3>
        <p>Bundle trade-in value to reduce your upfront down payment.</p>
        <ul>
          <li>Instant trade-in estimates</li>
          <li>Guaranteed minimum value</li>
          <li>Priority approvals</li>
        </ul>
      </div>
    </div>
    <div className="financing__cta">
      <div>
        <h3>Ready to check your eligibility?</h3>
        <p>Get pre-approved in under 5 minutes with no impact to credit score.</p>
      </div>
      <button type="button" className="primary-button">
        Check eligibility
      </button>
    </div>
  </main>
);

export default Financing;
