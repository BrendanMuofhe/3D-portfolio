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
          I am a dedicated software developer with over three years of experience in creating innovative solutions and improving user experiences. 
          My journey in technology began with a diploma in Computer Systems Engineering, where I gained a solid foundation in programming and system design. 
          Along the way, I have earned more than eight certificates in automation and programming, continuously enhancing my skills to stay ahead in this rapidly evolving field.
          My passion lies in leveraging technology to solve real-world problems and streamline processes. I thrive in collaborative environments, enjoy tackling challenges, 
          and am always eager to learn new technologies and methodologies. Whether it's working on a team project or diving into independent research, 
          I am committed to delivering high-quality results that exceed expectations.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
