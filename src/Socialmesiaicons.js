import { FaGithub, FaLinkedin,FaEnvelope, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import './Socialmediaicon.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SocialMediaIcons = () => {


  useEffect(()=>{
    Aos.init()
  },[])

   return(
<div className='social-icons'>    
    <a href="https://github.com/jothimani2004" target='_blank'><FaGithub /></a>
    <a href="https://www.linkedin.com/in/jothi-mani-d-640665256/" target='_blank'><FaLinkedin /></a>
    <a href="mailto:jothimani88531@gmail.com" target='_blank'><FaEnvelope /></a>
    <a href=" https://wa.me/+918838771582?text=hello" rel="noopener noreferrer" target='_blank'><FaWhatsapp /></a>
    <a href="https://discordapp.com/users/jothimani2004_92286" target='_blank'><FaDiscord /></a>
  </div>

 
);

}

export default SocialMediaIcons;
