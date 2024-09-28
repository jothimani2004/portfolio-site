import './Skills.css';
import React from 'react';
import { FaNodeJs, FaReact, FaPython, FaGit, FaLinux } from 'react-icons/fa';
import { DiMongodb, DiPostgresql, DiJavascript1, DiPostman, DiEjs } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa'; // HTML, CSS, GitHub
import { DiVisualstudio} from 'react-icons/di'; // VSCode, Postman
import { FiWind } from 'react-icons/fi';

const skills=[
    {
      icon:<FaNodeJs />,
      name:"nodejs",
      category:"backend"
    },
  
    {
       icon:<SiExpress />,
       name:"expressjs",
       category:"backend"
    },
    {
        icon:<FaReact />,
        name:"Reactjs",
        category:"frontend"
      },
      {
         icon:<FaPython />,
         name:"Python",
         category:"programminglanguages"
      },
      {
        icon:<FaNodeJs />,
        name:"nodejs",
        category:"backend"
      },
      {
         icon:<FiWind />,
         name:"Tailwindcss",
         category:"frontend"
       },
      {
         icon:<FaGit />,
         name:"Git",
         category:"toolsandtechnologies"
      },
      {
          icon:<FaLinux />,
          name:"Linux",
          category:"toolsandtechnologies"
        },
        {
           icon:<DiMongodb />,
           name:"Mongodb",
           category:"backend"
        },
        {
            icon:<DiPostgresql />,
            name:"Postgresql",
            category:"backend"
         },
         {
            icon:<DiJavascript1 />,
            name:"Javascript",
            category:"programminglanguages"
          },
          {
            icon:<DiJavascript1 />,
            name:"Javascript",
            category:"frontend"
          },
          {
             icon:      <img
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        alt="Postman"
        className="w-6 h-6 m-2 filter invert brightness-150 opacity-1"
      />,
             name:"Postman",
             category:"toolsandtechnologies"
        },
        //   {
        //       icon:<DiEjs />,
        //       name:"Ejs",
        //       category:"frontend"
        //    },
        {
            icon:<FaHtml5 />,
            name:"Html5",
            category:"frontend"
         },
         {
             icon:<FaCss3Alt />,
             name:"Css",
             category:"frontend"
          },
          {
             icon:<FaGithub />,
             name:"Github",
             category:"toolsandtechnologies"
           },
           {
            icon:<DiVisualstudio />,
            name:"Visualstudio",
            category:"toolsandtechnologies"
          }
 

  ]


const Skills = ()=>(

   
    <>
   
    <div className='skillsection' id='skills'>

    
        <div className='skilltitle pt-10'><h1>skills</h1></div>

             
        <div data-aos="fade-up"
     data-aos-duration="3000">
        
        <div className='skillcontainer'>


  

            <div className='frontend skill'>
            <b><h1 style={{ textAlign: 'center' }} className='m-2'>Frontend</h1></b>

                <ul className='iconandname'>
                    {skills
                    .filter(skill => skill.category === 'frontend')  
                    .map((skill) => (
                        <li className='iconandnameeach'>
                        {skill.icon}  {skill.name}
                      </li>                   
                     ))}
                </ul>
            </div>
           
            <div className='backend skill'>
            <b><h1 style={{ textAlign: 'center' }} className='m-2'>Backend</h1></b>

                 <ul className='iconandname'>
                    {skills
                    .filter(skill => skill.category === 'backend')  
                    .map((skill) => (
                        <li className='iconandnameeach'>
                        {skill.icon}  {skill.name}
                      </li>  
                    ))}
                 </ul>

            </div>






            <div className='programminglanguages skill'>
           <b><h1 style={{ textAlign: 'center' }} className='m-2'>programming</h1></b> 

                 <ul className='iconandname'>
                    {skills
                    .filter(skill => skill.category === 'programminglanguages')  
                    .map((skill) => (
                        <li className='iconandnameeach'>
                        {skill.icon}   {skill.name}
                      </li>

                    ))}
                 </ul>

            </div>

         
            
            <div className='toolsandtechnologies skill'>
            <b><h1 style={{ textAlign: 'center' }} className='m-2'>tools</h1></b>

                 <ul className='iconandname'>
                    {skills
                    .filter(skill => skill.category === 'toolsandtechnologies')  
                    .map((skill) => (
                        <li className='iconandnameeach'>
                        {skill.icon}   {skill.name}
                      </li>
                    ))}
                 </ul>

            </div>


          
        </div>

        </div>
   </div>
    </>
)

export default Skills;