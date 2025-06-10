import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' muofheb@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
<section className="c-space my-20" id="about">
  <div className="grid-container">
    <div className="about_header">
      <p>Get To Know More</p>
      <h1 class="title">About Me</h1>
    </div>

    <div class="section__content">
    
      <div class="section__pic-container">
        <img src="./assets/pic02.jpg" alt="Profile picture" class="about-pic" />
      </div>

      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="./assets/experience.png"
              alt="Experience icon"
              class="icon"
            />
            <h3>Experience</h3>
            <p>3+ years <br />Software Development</p>
          </div>

          <div class="details-container">
            <img
              src="./assets/education.png"
              alt="education icon"
              class="icon"
            />
            <h3>Education</h3>
            <p>Dip. Diploma<br />Computer Systems Engineering</p>
          </div>

          <div class="details-container">
            <img
              src="./assets/certificate.png"
              alt="certificate icon"
              class="icon"
            />
            <h3>Certificates</h3>
            <p>+8 Certificates<br />Automation & Programming</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-container">
      <p>
          I’m a full-stack developer and automation engineer with over three years of hands-on experience delivering real-world solutions. 
          My journey started as a system administrator at Telkom, where I developed a strong foundation in infrastructure, DevOps, and scripting. 
          Over time, I transitioned into software development, blending my backend knowledge with modern frontend frameworks to build complete, production-grade systems.
          I hold a diploma in Computer Systems Engineering and have earned over eight certifications in software development and automation. 
          Most recently, I designed, built, and deployed a uniform ordering platform used across 60+ KFC stores — streamlining operations for hundreds of employees.
          I’m passionate about solving problems, simplifying workflows, and turning ideas into tools that people actually use. 
          I thrive in fast-paced, collaborative environments, and I’m always pushing myself to learn, improve, and deliver high-quality, scalable solutions.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
