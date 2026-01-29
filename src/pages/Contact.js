import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <main className="main-section contact">
    <div className="contact__header">
      <span className="badge">We are here to help</span>
      <h2 className="section-title">Connect with AutoVista.</h2>
      <p className="section-subtitle">
        Speak with our experts about buying, selling, inspections, or delivery
        timelines.
      </p>
    </div>
    <div className="contact__layout">
      <form className="contact__form">
        <label>
          Full name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="Tell us how we can help" />
        </label>
        <button type="submit" className="primary-button">
          Send message
        </button>
      </form>
      <div className="contact__info">
        <div>
          <h3>Headquarters</h3>
          <p>AV Tech Park, OMR, Chennai</p>
        </div>
        <div>
          <h3>Support hours</h3>
          <p>Mon - Sat · 9 AM - 8 PM</p>
        </div>
        <div>
          <h3>Hotline</h3>
          <p>+91 9944 222 111</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>support@autovista.com</p>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
