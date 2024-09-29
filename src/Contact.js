import './Contact.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState ,useEffect} from 'react';
import { FaGithub, FaLinkedin,FaEnvelope, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { FaClipboard, FaCheck } from 'react-icons/fa';


const Contacts = ()=>{

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const [copied, setCopied] = useState(false);

  const email = 'jothimani88531@gmail.com';

    useEffect(()=>{
        Aos.init()
      },[])

    return(


    <>  




<section id="contact" className="bg-bg text-white overflow-hidden mt-10 pb-8 z-200"> 

<div data-aos="flip-down"
 data-aos-delay="500"
   data-aos-easing="ease-in-back"
   data-aos-offset="0"
     >
  
    <div className="max-w-6xl mx-auto text-center px-4"> {/* Added px-4 for padding */}
      <h2 className="xl:text-4xl font-bold mb-6">Get in Touch</h2>

      <div className="bg-bg rounded-lg shadow-[0_4px_10px_#66fcf1] p-8 max-w-md mx-auto">
        <p className="mb-4">Feel free to reach out through any of the platforms below!</p>

        <div className="flex m-2 justify-center flex-row">
          <a href="https://wa.me/+918838771582?text=hello" target='_blank' className="hover:text-hovercolor transition-colors duration-300 m-2 text-2xl xl:text-4xl"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/jothi-mani-d-640665256/" target='_blank' className="hover:text-hovercolor transition-colors duration-300 text-2xl m-2 xl:text-4xl"><FaLinkedin /></a>
          <a href="https://github.com/jothimani2004" target='_blank' className="hover:text-hovercolor transition-colors duration-300 m-2 text-2xl xl:text-4xl"><FaGithub /></a>
        </div>
      </div>



    </div>
 

    </div>
  
    </section>
   





    <div className="bg-bg rounded-lg shadow-lg p-8 max-w-md mx-auto text-center m-8">
      <h2 className="xl:text-4xl font-bold text-white mb-4">Contact Me</h2>
      <div className="flex justify-center items-center space-x-4">
       
        <a href={`mailto:${email}`} target='_blank' className="text-white hover:text-hovercolor flex items-center ">
          <FaEnvelope className='lg:block hidden' />
          <span>{email}</span>
        </a>
        
        <button onClick={copyToClipboard} className="text-white hover:text-hovercolor flex items-center p-1  lg:p-2 lg:rounded-xl rounded-xl">
          {copied ? <FaCheck /> : <FaClipboard />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  



   





</>


    

);

}

export default Contacts;