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
              <div className="p-8">
    <h1 className="text-4xl md:text-5xl font-bold font-sans">
        Hi, I am <span className="text-teal-500">Jothimani</span>
    </h1>
    <h2 className="text-2xl md:text-3xl font-medium mt-2">
        I'm a <span className="text-teal-500">Full-Stack Developer</span>
    </h2>
    <p className="mt-6 text-lg md:text-xl leading-10 font-light brightness-200">
    I specializing in building scalable web applications using the MERN stack and exploring cybersecurity to enhance application security. I'm seeking an internship or part-time role to gain industry experience and grow my skills. I am passionate about working on innovative projects and continuously learning new technologies.
        <br />
        <br />
        Feel free to check out my resume for more details!
    </p>
</div>

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
