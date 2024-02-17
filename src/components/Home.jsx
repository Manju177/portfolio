import React from "react";
import vg from "../assets/coder.avif";

import Services from "./Services";
import Work from "./Work";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Manjunath P</h1>
          <p>Software Engineer, Front End Developer</p>
        </main>
      </div>
 
<div>
<h1 className='serviceHeading'>About</h1>
<div className="home2" id='about'>
      
      <img src={vg} alt="Graphics" />

      <div>
        <p>
        Hi, I'm Manjunath Pattanashetti, a Front-End Engineer passionate about crafting engaging web 
        experiences. Proficient in HTML, CSS, and JavaScript, I specialize in turning designs 
        into intuitive, user-friendly interfaces. With a keen eye for detail and a knack for 
        modern frameworks.
        </p>
      </div>
    </div>
</div>

      

      <div className="service" id="skills">
      <h1 className='serviceHeading'>Skills</h1>
      
        <Services/>
      </div>

      <div className="service" id="work">
        <Work/>
      </div>

      <div id="contact">
        <Footer/>
      </div>
    </>
 
  );
};

export default Home;