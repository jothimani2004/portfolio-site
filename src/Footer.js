
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin,FaEnvelope, FaWhatsapp, FaDiscord } from 'react-icons/fa';


const Footer = ()=>{

    useEffect(()=>{
        Aos.init()
      },[])

    return(<>

<footer className="bg-gray-900 text-white py-8 px-4">

  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
    {/* Logo or Name */}

    <div className='flex flex-col'>
    <div className="text-left  lg:ml-0">
      <h2 className="lg:text-2xl font-bold">Jothimani Portfolio</h2>
      <p className="text-gray-400 text-sm mt-2 M-0">
        Web Developer | Cybersecurity Enthusiast
      </p>
    </div>
    
    {/* Navigation Links */}
    <div className="flex items-center  text-gray-400 text-sm mb-6 lg:mb-0 flex-col lg:flex-row">
      <a href="#about" className="hover:text-white">About</a>
      <a href="#projects" className="hover:text-white">Projects</a>
      <a href="#skills" className="hover:text-white">Skills</a>
      <a href="#contact" className="hover:text-white">Contact</a>
    </div>

    </div>
    
    {/* Social Media Icons */}

  </div>

  <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">

</div>
  
  <div className="text-center text-gray-500 text-sm mt-6">
    &copy; 2024 Jothimani. All Rights Reserved.
  </div>
</footer>




  






</>
      
    

);

}

export default Footer;