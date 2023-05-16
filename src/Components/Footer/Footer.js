import React from "react";
import FooterLOGO from "../../assets/navLogo.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
// import {  } from 'react-icons/bs';

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_Container flexcolCenter">
      <div className="footer_section flexrowSB">
        <div className="footer_Logo">
          <img src={FooterLOGO} className="logo" height={40} width={120} />
          <div className="footer_socialMediaOptions">
            <button className="social_button">
              <AiFillInstagram />
            </button>
            <button className="social_button">
              <AiFillFacebook />
            </button>
            <button className="social_button">
              <AiFillTwitterSquare />
            </button>
          </div>
        </div>
        <div className="Newletter">
          <h4>Newsletter</h4>
          <input placeholder="Enter your Email Id"/>
        </div>
      </div>
      <p className="copyright">©2023-All Right Reserved</p>
    </div>
  );
};

export default Footer;
