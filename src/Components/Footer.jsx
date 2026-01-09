import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="footer mt-10">
      <div className="footer-top">
        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Available in */}
        <div className="footer-section">
          <h3>Available in:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
         
        </div>

        {/* Life at Swiggy */}
        <div className="footer-section">
          <h3>Life at Swiggy</h3>
          <ul>
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Swiggy</p>
        <div className="app-buttons">
          <button className="app-btn">Download on App Store</button>
          <button className="app-btn">Get it on Google Play</button>
        </div>
      </div>
    </footer>
   

 
  );
};

export default Footer;