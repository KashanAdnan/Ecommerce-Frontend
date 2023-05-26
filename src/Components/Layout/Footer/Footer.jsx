import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="contact">
        <div className="main-contact">
          <div className="contact-content">
            <h5>Getting started</h5>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Upgrade Guide</a>
            </li>
            <li>
              <a href="#">Browser Support</a>
            </li>
            <li>
              <a href="#">Dark Mode</a>
            </li>
          </div>

          <div className="contact-content">
            <h5>Explore</h5>
            <li>
              <a href="#">Prototyping</a>
            </li>
            <li>
              <a href="#">Design systems</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </div>

          <div className="contact-content">
            <h5>Resources</h5>
            <li>
              <a href="#">Best practices</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Learn design</a>
            </li>
          </div>

          <div className="contact-content">
            <h5>Community</h5>
            <li>
              <a href="#">Discussion Forums</a>
            </li>
            <li>
              <a href="#">Code of Conduct</a>
            </li>
            <li>
              <a href="#">Contributing</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
          </div>
        </div>
      </section>

      <div className="end-text">
        <p>© 2022 All Rights Reserved by Kashan Adnan Younus</p>
      </div>
    </>
  );
};

export default Footer;
