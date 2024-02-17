import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Contact Me</h1>
        <a href="tel:+918217798368">+918217798368</a>
        
      </div>

      <div>
        <div>
          <a href="https://www.linkedin.com/in/manjunath-pattanashetti/" target={"blank"}>
            <AiOutlineLinkedin size={70}/>
          </a>
          <a href="mailto:manju143614@gmail.com" >
           <AiOutlineMail size={70}/>
          </a>
          <a href="tel:+918217798368" target={"blank"}>
            <AiOutlinePhone size={70}/>
            
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
