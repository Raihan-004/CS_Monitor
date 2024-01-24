import React from "react";
import Logo from "../img/logo.png";
import {FiFacebook} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
     <div className="textsection">
      <p>Follow us on</p>
     </div>
     <div className="iconsection">
      <a href="https://web.facebook.com"><FiFacebook/></a>
      <a href="https://www.linkedin.com/"><FaLinkedinIn/></a>
      <a href="https://www.instagram.com/?hl=en"><AiOutlineInstagram/></a>
     </div>
    </footer>
  );
};

export default Footer;