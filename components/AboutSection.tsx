import React from "react"
import { SiBootstrap, SiGit, SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiRedux, SiDjango, SiFigma, SiSqlite, SiTailwindcss} from 'react-icons/si';
import { FaJava} from 'react-icons/fa';


const skills = [
  { skill: "Python", icon: <SiPython /> },
  { skill: "Java", icon: <FaJava /> },
  { skill: "JavaScript", icon: <SiJavascript /> },
  { skill: "HTML", icon: <SiHtml5 /> },
  { skill: "CSS", icon: <SiCss3 /> },
  { skill: "React", icon: <SiReact /> },
  { skill: "Redux", icon: <SiRedux /> },
  { skill: "Bootstrap", icon: <SiBootstrap /> },
  { skill: "Tailwind", icon: <SiTailwindcss /> },
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
              I am a freshman at the National University of Singapore, pursuing a double degree in <strong>Computer Science</strong> and <strong>Business Adminstration</strong>. &#x1F468;&#x200D;&#x1F393;
            </p>
            <br />
            <p>
              I love technology. I&apos;m currently exploring the world of <strong>Full Stack Web Development</strong>! &#x1F9D1;&#x200D;&#x1F4BB;
            </p>
            <br />
            <p>
              <strong><a className="underline" href="https://marcus-ang.com/" target="_blank" rel="noopener noreferrer">More about me</a></strong>.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-3">Languages and Tools:</h1>
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