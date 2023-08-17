import React from "react";
import { Link } from "react-router-dom";
import { LogoLight, Payment, ScrollToTop, SocialIcons } from "../utils/helper";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="ftr-email">
          <h2>Want style Ideas and Treats?</h2>
          <form className="email">
            <input type="email" name="email" placeholder="Enter Email*" required />
            <input type="submit" className="btn-subscribe" value="Subscribe" />
          </form>
        </div>
        <div className="footer-wrapper">
          <div className="ftr-cont">
            <Link to="/" className="ftr-logo">
              <img src={LogoLight} alt="logo" />
            </Link>
            <SocialIcons />
          </div>

          <ul className="ftr-list">
            <Link to="#!" className="ftr-head">
              SUPPORT
            </Link>
            <Link to="#!" className="ftr-items">
              Contact Us
            </Link>
            <Link to="#!" className="ftr-items">
              FAQs
            </Link>
            <Link to="#!" className="ftr-items">
              Size Guide
            </Link>
            <Link to="#!" className="ftr-items">
              Shipping & Returns
            </Link>
          </ul>
          <div className="ftr-list">
            <Link to="#!" className="ftr-head">
              SHOP
            </Link>
            <Link to="#!" className="ftr-items">
              Men's Shopping
            </Link>
            <Link to="#!" className="ftr-items">
              Women's Shopping
            </Link>
            <Link to="#!" className="ftr-items">
              Kid's Shopping
            </Link>
            <Link to="#!" className="ftr-items">
              Discount
            </Link>
          </div>
          <div className="ftr-list">
            <Link to="#!" className="ftr-head">
              COMPANY
            </Link>
            <Link to="#!" className="ftr-items">
              Our Story
            </Link>
            <Link to="#!" className="ftr-items">
              Career
            </Link>
            <Link to="#!" className="ftr-items">
              Terms & Conditions
            </Link>
            <Link to="#!" className="ftr-items">
              Privacy & Cookie Policy
            </Link>
          </div>
          <div className="ftr-list">
            <Link to="#!" className="ftr-head">
              CONTACT
            </Link>
            <Link to="#!" className="ftr-items">
              1-888-923-8044
            </Link>
            <Link to="#!" className="ftr-items">
              1-888-923-8055
            </Link>
            <Link to="#!" className="ftr-items">
              help@allbirds.com
            </Link>
            <Link to="#!" className="ftr-items">
              support@allbirds.com
            </Link>
          </div>
        </div>
      </div>

      <div className="footbar">
        <div className="container">
          <div className="footbar-wrapper">
            <p>© 2021 All rights reserved.</p>
            <img src={Payment} alt="payments" />
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
};

export default Footer;
