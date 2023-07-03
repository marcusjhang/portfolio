import React from "react"
import { SiBootstrap, SiGit, SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiDjango, SiFigma, SiSqlite} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';


const skills = [
  { skill: "Python", icon: <SiPython /> },
  { skill: "Java", icon: <FaJava /> },
  { skill: "JavaScript", icon: <SiJavascript /> },
  { skill: "HTML", icon: <SiHtml5 /> },
  { skill: "CSS", icon: <SiCss3 /> },
  { skill: "React", icon: <SiReact /> },
  { skill: "Bootstrap", icon: <SiBootstrap /> },
  { skill: "Django", icon: <SiDjango /> },
  { skill: "SQLite", icon: <SiSqlite /> },
  { skill: "Figma", icon: <SiFigma /> },
  { skill: "Git", icon: <SiGit /> },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <div className="flex items-center space-y-4 mb-10">
          <h1 className="text-left font-bold text-4xl">
            About 
          </h1>
          <hr className="flex-grow h-1 mx-8 my-4 bg-teal-500 border-0 rounded"></hr>
        </div>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              I am a freshman at the National University of Singapore (NUS), pursuing a double degree in <strong><a className="underline" href="https://www.comp.nus.edu.sg" target="_blank" rel="noopener noreferrer">Computer Science</a></strong> and <strong><a className="underline" href="https://bba.nus.edu.sg" target="_blank" rel="noopener noreferrer">Business Adminstration</a></strong>. 👨‍🎓
            </p>
            <br />
            <p>
              I love technology. I'm currently exploring the world of <strong><a className="underline" href="https://marcus-ang.com/projects/" target="_blank" rel="noopener noreferrer">Full Stack Web Development</a></strong>! With some dabbling in Machine Learning on the side. 👨‍💻
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              I mainly spend my free time <strong><a className="underline" href="https://marcus-ang.com/blog/readinglist/" target="_blank" rel="noopener noreferrer">Reading</a></strong>, <strong><a className="underline" href="https://marcus-ang.com/blog/running/" target="_blank" rel="noopener noreferrer">Running</a></strong>, or Swimming. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-3">Skills</h1>
            <div className="flex flex-wrap justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <div key={idx} className="flex items-center bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {item.icon}
                  <p className="ml-2">{item.skill}</p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection