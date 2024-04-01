import React from 'react';
import '../App.css';
import refutokenLogo from '../assets/refutoken.png';

function AboutUs() {
  return (
    <div className="content-below-navbar">
      <h1 className="page-title">About Us / Trust Us</h1>
      <img 
        src={refutokenLogo} // URL de la imagen o imagen de assets
        alt="About Us" 
        className="page-image"
      />

      <div className="section">
        <h2 className="subtitle">Roots and Routes</h2>
        <p className="paragraph">
        To build a strong foundation of trust, it is crucial to begin by showcasing our NGO's Identity, Essence, Roots, and Horizons (Roots and Routes). This section should unveil our unique journey that has shaped who we are, highlighting how our past experiences and future goals intertwine to define our current identity. Here, we aim to include a detailed narrative of our mission, vision, and values, which are the cornerstones of our actions and decisions. It's also important to introduce our executive team and key collaborators, whose expertise, experience, and dedication are instrumental in driving our mission forward. Through this section, our goal is not just to inform but also to inspire and connect with our supporters and sponsors, establishing a bond of trust and transparency.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">What We Do</h2>
        <p className="paragraph">
        In our Activities section, we delve into the diverse range of initiatives and services that define our daily operations and long-term goals. This includes our commitment to supporting vulnerable individuals through personalized assistance, contributing to sustainable development through cooperation projects, and responding to humanitarian emergencies. We provide essential services such as counseling, housing, and employment assistance, reflecting our dedication to practical support. Additionally, we are actively involved in Social Impact Investing, where we not only contribute financially but also measure the impact of these investments to ensure they align with our objectives. This section is designed to offer a comprehensive overview of our multifaceted approach to creating a positive change in society.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">Years of Experience</h2>
        <p className="paragraph">
        In the Experience section, we aim to provide a tangible sense of our achievements and the real-world impact we've made through our past projects. This includes a detailed account of our previous initiatives, highlighting key successes and milestones we've reached. To bring these achievements to life, we'll incorporate testimonials from beneficiaries and collaborators, offering personal insights into how our work has positively influenced lives and communities. Additionally, we'll present statistics and infographics that visually depict the impact we've created, providing a clear and engaging representation of our effectiveness and reach. This section is designed to not only reflect on our accomplishments but also to illustrate the measurable difference our efforts have made.
        </p>
        <ol className="project-list">
          <li>Proyecto 1</li>
          <li>Proyecto 2</li>
          <li>Proyecto 3</li>
          {/* Agregar más elementos <li> según sea necesario */}
        </ol>
      </div>
    </div>
  );
}

export default AboutUs;
