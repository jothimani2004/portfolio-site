import React from 'react';
import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import zenotion from './assert/zenotion.png';
import course from './assert/course.png'


const Projectsection = () => {


    useEffect(()=>{
        Aos.init()
      },[])
    
    
    return(


    <>



    <div className='projectsection' id='projects'>

   
        
    <div className='topicsectionss pt-10 mb-10'>project</div>
    <div data-aos="fade-up"
     data-aos-duration="3000">

        <div className='projectcontainer mt-2'>
            <div className='title'>
                <h1 className='text-4xl ml-0 mr-6'>Zenotion</h1>
            </div>
                <div className='projectimg w-full ml-0 mt-5 '>

                    <img src={zenotion} alt='website image' className='h-auto  w-full rounded-xl'   />
                </div>
                <div className='stack m-3'>
                    <ul className=''>
                        <li>Embedded js</li>
                        <li>Node js</li>
                        <li>Express js</li>
                        <li>Postgresql</li>
                    </ul>
                </div>
                <div className='projectcontent xl:text-2xl pl-8'>
                This website facilitates the sharing of educational resources between teachers and students. It includes personal spaces for students to store and manage their resources. Through this project, I gained valuable experience in both front-end and back-end development.
                </div>
                <div className="projectbutton">
                <a href='https://github.com/jothimani2004/zenotion'><button
                  type="button"
                  className="relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold"
                >
                      <span className="block group-hover:hidden lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">view code</span>
                      <span className="hidden group-hover:block lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">GitHub -&gt;</span>
                      </button></a>
                      <a href='https://zenotion.college/'><button type="button" 
                        className="relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold transition-all duration-300 ease-in-out" 
                        >

<span className="block group-hover:hidden opacity-100 transition-opacity duration-1000 ease-in-out group-hover:opacity-0 delay-1000 lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">view website</span>
<span className="hidden group-hover:block opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 delay-1000 lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">Zenotion -&gt;</span>
  </button></a>

                </div>
            
        </div>

        </div>


    <div data-aos="fade-up"
     data-aos-duration="3000">

        <div className='projectcontainer mt-10'>
            <div className='title'>
                <h1 className='text-4xl ml-0 mr-6'>Onlinecourse</h1>
            </div>
                <div className='projectimg w-full ml-0 mt-5'>
                    <img src={course} alt='website image' className='h-auto  w-full rounded-xl'  />
                </div>
                <div className='stack m-3'>
                    <ul className=''>
                        <li>HTML</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        
                    </ul>
                </div>
                <div className='projectcontent xl:text-2xl pl-8'>
                "I developed an online course selling website using HTML, CSS, and JavaScript, focusing on creating a user-friendly interface for browsing and purchasing courses. The website features responsive design elements to enhance user experience across different devices, allowing seamless course navigation and purchase. My work included building dynamic elements and forms, ensuring smooth interactions for potential learners."   
                </div>
                <div className="projectbutton">
                <a><button
  type="button"
  className="relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold"
>
  <span className="block group-hover:hidden lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3" >view code</span>
  <span className="hidden group-hover:block lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">GitHub -&gt;</span>
</button></a>
 <a href=''><button type="button" 
  className="relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold transition-all duration-300 ease-in-out" 
  >

<span className="block group-hover:hidden opacity-100 transition-opacity duration-1000 ease-in-out group-hover:opacity-0 delay-1000 lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">view website</span>
<span className="hidden group-hover:block opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 delay-1000 lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3">Zenotion -&gt;</span>
  </button></a>

                </div>
            
        </div>



    </div>
    </div>

    </>
)


}


export default Projectsection;