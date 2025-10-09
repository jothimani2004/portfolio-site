import React, { useEffect } from 'react';
import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import zenotion from './assert/zenotion.png';
import course from './assert/course.png';
import auth from './assert/Screenshot 2025-04-05 021556.png'
import dept from './assert/WhatsApp Image 2025-04-05 at 07.51.40_bfd9c567.jpg'
import smilingstars from './assert/smilingstars.png'

const projects = [
  {
    title: 'SMILING STARS ( Freelancing Web App for Daycare Center) ',
    image: smilingstars,
    stack: ["React.js", "Node.js"," Express.js", "postgreSql"],
    description:
   "Built a web platform for a daycare offering 7 programs. Developed a public site for enquiries and a CMS for admins to manage admissions, attendance, payments, and receipts generation program-wise. ",    codeLink: 'https://github.com/Nanonimous/frontend-backend-smilystar',
    liveLink: 'https://smilingstarsdaycare.in/',
    liveText: 'live',
  }

  {
    title: 'MVIT CSE ICB Study Resource Hub',
    image: dept,
    stack: ["React.js", "Node.js"," Express.js", "MongoDB"],
    description:
   " Designed and developed a full-featured web platform with student profiles, resource sharing, event showcases, faculty and student directories (year-wise), subject offerings, academic calendar, and timetable pages — all with role-based authentication for admins and students.",    codeLink: 'https://github.com/jothimani2004/departrment-project',
    liveLink: 'https://mvitcseicb.in/',
    liveText: 'live',
  },
  {
    title: 'Zenotion',
    image: zenotion,
    stack: ['Embedded js', 'Node js', 'Express js', 'PostgreSQL'],
    description:
      'This website facilitates the sharing of educational resources between teachers and students. It includes personal spaces for students to store and manage their resources. Through this project, I gained valuable experience in both front-end and back-end development.',
    codeLink: 'https://github.com/jothimani2004/zenotion',
    demoLink:"https://youtu.be/3cw0xUy66y0?si=B73weckfBmP1L_KM",
    liveText: 'Zenotion',
  },
  
  {
    title: 'User Authentication & Security System',
    image: auth,
    stack: ["React.js", "Node.js"," Express.js", "MongoDB", "bcrypt", "JWT", "Google API", "reCAPTCHA"],
    description:
    " A secure authentication system integrating email/password authentication and Google OAuth 2.0, featuring JWT-based authentication, reCAPTCHA protection, and secure profile retrieval",
    codeLink: 'https://github.com/jothimani2004/healthCare-checkin/',
    demoLink: "https://youtu.be/3cBt3NF3zMM?si=O3dp_SrHppFfiK04",
    liveText: 'Demo',
  },
  {
    title: 'Onlinecourse',
    image: course,
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'I developed an online course selling website using HTML, CSS, and JavaScript, focusing on creating a user-friendly interface for browsing and purchasing courses. The website features responsive design elements to enhance user experience across different devices, allowing seamless course navigation and purchase. My work included building dynamic elements and forms, ensuring smooth interactions for potential learners.',
    codeLink: 'https://github.com/jothimani2004/onlinecourse',
    liveLink: 'https://jothimani2004.github.io/onlinecourse/',
    liveText: 'course selling',
  },
];

const Projectsection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='projectsection' id='projects'>
      <div className='topicsectionss pt-10 mb-10'>project</div>

      {projects.map((project, index) => (
        <div
          className='projectcontainer mt-10'
          data-aos='fade-up'
          data-aos-duration='3000'
          key={index}
        >
          <div className='title'>
            <h1 className='text-4xl ml-0 mr-6'>{project.title}</h1>
          </div>

          <div className='projectimg w-full mt-5 flex flex-row justify-center gap-4'>
  <img
    src={project.image}
    alt={`${project.title} screenshot`}
    className='h-56 rounded-xl'
  />
  {/* <img
    src={project.image}
    alt={`${project.title} screenshot`}
    className='h-56 rounded-xl'
  />
  <img
    src={project.image}
    alt={`${project.title} screenshot`}
    className='h-56 rounded-xl'
  /> */}
</div>


          <div className='stack m-3'>
            <ul>
              {project.stack.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className='projectcontent xl:text-2xl pl-8'>
            {project.description}
          </div>

          <div className='projectbutton'>
            <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
              <button
                type='button'
                className='relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold'
              >
                <span className='block group-hover:hidden lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>
                  view code
                </span>
                <span className='hidden group-hover:block lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>
                  GitHub -&gt;
                </span>
              </button>
            </a>
            
            {project.liveLink && (
              <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                <button
                  type='button'
                  className='relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold'
                >
                  <span className='block group-hover:hidden lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>View Website</span>
                  <span className='hidden group-hover:block lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>{project.liveText} →</span>
                </button>
              </a>
            )}

            {project.demoLink && (
              <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                <button
                  type='button'
                  className='relative group text-color bg-bg hover:bg-color hover:text-white px-20 py-2 font-bold'
                >
                  <span className='block group-hover:hidden lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>View Demo</span>
                  <span className='hidden group-hover:block lg:text-2xl lg:pl-5 lg:pr-5 lg:pt-3 lg:pb-3'>{project.liveText} →</span>
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectsection;
