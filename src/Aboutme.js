import React from 'react';
import './Aboutme.css';
import profileImage from './assert/profile.jpg';
// Replace with your profile image

const HeroSection = () => {
  return (
    <div data-aos="fade-up"
     data-aos-duration="3000">
    <section className="hero-section mt-20 xl:mt-0" id='about'>
        <div className='aboutcontainer'>
              <div className="hero-content">
                        <h1>Hi, I am  <span>Jothimani</span></h1>
                        <h2> I'm a  <span>Full-Stack Developer</span></h2>
                        <p className='m-8 text-2xl leading-20'>
                        I specialize in building efficient, scalable web applications using the MERN stack. With a strong foundation in full-stack development, I’m also exploring the field of cybersecurity to enhance the security of the applications I create.

Currently, I am seeking opportunities for an internship or part-time role to gain hands-on industry experience and work alongside professionals in the field. I am passionate about learning new technologies and constantly improving my skills.

"Feel free to check out my resume to learn more about my experience and skills!"


                        
                        </p>
                        <div className="hero-buttons mt-10">


<div>
      <a
        href="https://drive.google.com/file/d/1Z54jyEEArIPrBZAxLDmBCqCL6LekDaf6/view?usp=sharing"
        target="_blank"
      
        className="ml-14 inline-block px-6 py-3 bg-hovercolor hover:bg-color text-gray-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        Check Resume
      </a>
    </div>
 
</div>

              </div>
              <div className="hero-image">
                <img src={profileImage} alt="Profile" />
              </div>

        </div>
    </section>
    </div>
  );
};

export default HeroSection;
