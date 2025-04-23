import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from "lucide-react"

import { Badge } from "../components/badge"
import { Button } from "../components/button"
import { Card, CardContent, CardFooter } from "../components/card"

import firstWebsite from '../assets/images/firstWebsite.jpg'
import gerdomWebsite from '../assets/images/gerdomrealty.jpg'
import portfolioWebsite from '../assets/images/portfolio.jpg'
import htmlIcon from '../assets/icons/html.svg'
import cssIcon from '../assets/icons/css.svg'
import dockerIcon from '../assets/icons/docker.svg'
import flaskIcon from '../assets/icons/flask.svg'
import gcrIcon from '../assets/icons/gcr.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import sqlIcon from '../assets/icons/sql.svg'
import tailwindIcon from '../assets/icons/tailwind.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import nextIcon from '../assets/icons/next.svg'
import reactIcon from '../assets/icons/react.svg'
import vercelIcon from '../assets/icons/vercel.svg'
import viteIcon from '../assets/icons/vite.svg'
import renderIcon from '../assets/icons/render.svg'
import nodeIcon from '../assets/icons/node.svg'
import threeIcon from '../assets/icons/three.svg'

const projects = [
  {
    title: "First Website",
    description:
      "Developed as part of the CSE 477 Web Application Architecture course, this full-stack web app featured user authentication, real-time chat, and a playable piano built with JavaScript. The project emphasized core web technologies (HTML, CSS, JS) and backend development with Flask, SQL databases, and Docker for local hosting. Final deployment was done using Google Cloud Run.<br /><br />I do not have the Github Repo but I can show the code if you would like to see.",
    image: firstWebsite,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "SQL",
      "Docker",
      "Google Cloud Run"
    ],
    liveUrl: "https://exam-601515733227.us-central1.run.app/home",
    githubUrl: null
  },
  {
    title: "Gerdom Realty & Investment Website",
  description:
    "A fully responsive, full-stack real estate website built with Next.js and TypeScript for a commercial real estate agency in Michigan. Created as a freelance project for a member of the country club where I caddie, this was my first professional job after graduating college — and I started it with no prior experience in Next.js. The site features an interactive property map, dynamic team member profiles, a 'Recent News' section displaying the latest 10 closed transactions, and a contact form. It also includes sections showcasing the agency's key business relationships and a newsletter signup. Built using Tailwind CSS, ShadCN UI, and deployed via Vercel.",
  image: gerdomWebsite,
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN UI",
    "React",
    "Vercel"
  ],
  liveUrl: "https://www.gerdomrealty.com/",
  githubUrl: null
  },
  {
    title: "Interactive Portfolio Website",
    description:
      "You're looking at it! This interactive 3D portfolio was designed and developed to showcase my work, skills, and personality in a unique and immersive way. Built with React and Vite, the site features a custom Three.js-powered 3D planet that visitors can explore, making the experience both visual and engaging. The frontend is deployed on Vercel for speed and scalability, while the backend is hosted on Render to handle contact form submissions and future API integrations.",
    image: portfolioWebsite,
    techStack: [
      "React",
      "Vite",
      "Three.js",
      "Node.js",
      "Express.js",
      "Vercel",
      "Render"
    ],
    liveUrl: null,
    githubUrl: [
      "https://github.com/Phillipd44/portfolio",
      "https://github.com/Phillipd44/portfolioBackend"
    ]
  }
]


const Projects = () => {
  return (
    <section className="relative w-full min-h-screen bg-orange-200">
      <main className="container py-12 px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-orange-800 text-center pt-10">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of projects I've worked on, showcasing my skills and experience in web development.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <div className="relative aspect-video md:aspect-square w-full h-full">
                  <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full transition-transform hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col">
                <CardContent className="flex-1 p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold mb-2">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {tech === "HTML" && <img src={htmlIcon} alt="HTML" className="w-6 h-6" />}
                          {tech === "CSS" && <img src={cssIcon} alt="CSS" className="w-6 h-6" />}
                          {tech === "JavaScript" && <img src={javascriptIcon} alt="JavaScript" className="w-6 h-6" />}
                          {tech === "Flask" && <img src={flaskIcon} alt="Flask" className="w-6 h-6" />}
                          {tech === "SQL" && <img src={sqlIcon} alt="SQL" className="w-6 h-6" />}
                          {tech === "Docker" && <img src={dockerIcon} alt="Docker" className="w-6 h-6" />}
                          {tech === "Google Cloud Run" && <img src={gcrIcon} alt="GCR" className="w-6 h-6" />}
                          {tech === "Next.js" && <img src={nextIcon} alt="Next.js" className="w-6 h-6" />}
                          {tech === "TypeScript" && <img src={typescriptIcon} alt="TypeScript" className="w-6 h-6" />}
                          {tech === "Tailwind CSS" && <img src={tailwindIcon} alt="Tailwind CSS" className="w-6 h-6" />}
                          {tech === "React" && <img src={reactIcon} alt="React" className="w-6 h-6" />}
                          {tech === "Vercel" && <img src={vercelIcon} alt="Vercel" className="w-6 h-6" />}
                          {tech === "Vite" && <img src={viteIcon} alt="Vite" className="w-6 h-6" />}
                          {tech === "Render" && <img src={renderIcon} alt="Render" className="w-6 h-6" />}
                          {tech === "Node.js" && <img src={nodeIcon} alt="Node.js" className="w-6 h-6" />}
                          {tech === "Three.js" && <img src={threeIcon} alt="Three.js" className="w-6 h-6" />}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button asChild variant="default" size="sm">
                        <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <div className="flex gap-2">
                        {Array.isArray(project.githubUrl) ? (
                          project.githubUrl.map((url, index) => (
                            <Button key={index} asChild variant="outline" size="sm">
                              <Link to={url} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                {index === 0 ? 'Frontend Code' : 'Backend Code'}
                              </Link>
                            </Button>
                          ))
                        ) : (
                          <Button asChild variant="outline" size="sm">
                            <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
          ))}
      </div>
      </main>
    </section>
  )
}

export default Projects
