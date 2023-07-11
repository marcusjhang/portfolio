import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "IP Locator",
    description: "Displays your location on the map based on IP Address provided. Built using ReactJS, Tailwind, LeafletJS and IP Geolocation API by IPify.",
    image: "/IPLocator.png",
    link: "https://github.com/marcusjhang/iplocator",
  },
  {
    name: "Commerce",
    description: "A full-stack Pokemon-themed Commerce Page. Built using Django, Python, HTML, and Bootstrap.",
    image: "/pokecommerce.png",
    link: "https://github.com/marcusjhang/pokecommerce",
  },
  {
    name: "Wiki",
    description: "My first backend project, a Wiki-Like Encyclopedia. Built using Django, Python, HTML, and Bootstrap.",
    image: "/wiki.png",
    link: "https://github.com/marcusjhang/wiki",
  },
  {
    name: "Advice Generator",
    description: "A randomised wisdom generator. Built using React, CSS, and the Advice API.",
    image: "/advice.png",
    link: "https://github.com/marcusjhang/advice-generator",
  },
  {
    name: "Library",
    description: "My first interaction with Vanilla Javascript! Helps users track their reading list.",
    image: "/library.png",
    link: "https://github.com/marcusjhang/library",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
        <div className="flex items-center space-y-4 mb-10">
          <h1 className="text-left font-bold text-4xl">
            Projects 
          </h1>
          <hr className="flex-grow h-1 mx-8 my-4 bg-teal-500 border-0 rounded"></hr>
        </div>
      <div className="flex flex-col mt-8 space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
