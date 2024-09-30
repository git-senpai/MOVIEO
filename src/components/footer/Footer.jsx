import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footer-top">
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy Policy</li>
            <li className="menuItem">About Us</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
            <li className="menuItem">Contact Us</li>
          </ul>
        </div>

        <div className="footer-middle">
          <div className="infoText">
            © 2024 MovieVerse. All Rights Reserved. This website is not
            affiliated with IMDb or any other movie database service. Content
            provided is for informational purposes only. By using this site, you
            agree to our <a href="#">Terms of Use</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </div>

          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <h4>Follow Us</h4>
          <div className="socialIcons ">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
            <span className="icon">
              <FaYoutube />
            </span>
            <span className="icon">
              <FaPinterest />
            </span>
            <span className="icon">
              <FaGithub />
            </span>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
