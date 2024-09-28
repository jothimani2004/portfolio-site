import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure this file does not conflict with Tailwind CSS
import { FaBars, FaTimes } from 'react-icons/fa'; // Combine the imports
import Aos from 'aos';
import 'aos/dist/aos.css';
import logoImage from './assert/f.png';


const NavBar = () => {

  useEffect(() => {
    Aos.init(); // Optional: Adjust duration if needed
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);


    
     
  };


  return (
    <>
     


        <nav className="navbar shadow-2xl">

          
     <div data-aos="fade-right"  data-aos-duration="3000">
          {/* Desktop Menu */}

          <div className="shadow-inner disktopmenu hidden md:flex justify-between font-bold xl:text-2xl lg:text-xl md:text-lg bg-bg pt-10 text-color p-4 pr-60 lg:pr-40 md:pr-20 ">
  <div className='logo text-hovercolor font-extrabold  xl:ml-40 lg:ml-20 md:ml-10 sm:ml-0 ' >
    <img src={logoImage} alt="Profile" />
  </div>
  <ul className="flex space-x-10 items-center">
    <li><a href="#about" className="hover:text-hovercolor">About</a></li>
    <li><a href="#projects" className="hover:text-hovercolor">Projects</a></li>
    <li><a href="#skills" className="hover:text-hovercolor">Skills</a></li>
    <li><a href="#contact" className="hover:text-hovercolor">Contact</a></li>
  </ul>
</div>



          </div>

          {/* Mobile Menu Button */}
          <div 
  className="md:hidden text-3xl m-8 cursor-pointer z-10 bg-bg text-hovercolor hover:text-hovercolor absolute top-0 right-0" 
  onClick={toggleMenu}
>
  {isOpen ? <FaTimes /> : <FaBars />}
</div>


<div className=' md:hidden hover:text-hovercolor logo text-hovercolor font-extrabold  ml-40 mt-8' >
    <img src={logoImage} alt="Profile" />
  </div>
          {/* Mobile Menu */}
          <ul
  className={`lg:hidden fixed z-10 top-20 w-full bg-bg text-gray-600 font-bold text-xl transition-transform transform ${isOpen ? 'translate-x-0 translate-y-0' : 'translate-x-full translate-y-0'} flex flex-col items-center space-y-4 p-6`}
            >
            <li><a href="#about" className="hover:text-hovercolor" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="hover:text-hovercolor" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" className="hover:text-hovercolor" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#contact" className="hover:text-hovercolor" onClick={toggleMenu}>Contact</a></li>
          </ul>



        </nav>



  
      
    </>
  );
};

export default NavBar;
