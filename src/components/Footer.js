import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We provide high-quality stationery and school supplies at the best prices.
            Our goal is to make learning and creativity easier for everyone.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
           
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@apsstationerymart.com</p>
          <p> Phone:<a href="tel:+919876543210"> +91 8072364306</a></p>
          <p>Address:APS Stationery, New Bajaar,lalpet,cuddalore District,India</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/_.yaxzz._/"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>
            <a href="https://wa.me/918072364306"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StationeryMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
