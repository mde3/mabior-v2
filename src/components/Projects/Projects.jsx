import React from 'react'
import './projects.css'
import { projectsData } from '../Constants/Constants'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="projects-title-wrapper container">
        <h1 className="projects-title">Featured Projects</h1>
      </div>
      <div className="projects-container container grid">
        { projectsData.map (({ id, image, title, desc, live, code }) => {
          return(
            <div key={id} className="project-box">
              <img src={image} alt={title} className="project-img" />
              <div className="project-content">
                <h3 className="project-name">{title}</h3>
                <p className="project-desc">{desc}</p>
                <div className="project-link-wrapper">
                  <a href={live} target="_blank" className="project-link project-link-one">Live demo <BiLink className="project-icon" /></a>
                  <a href={code} target="_blank" className="project-link project-link-two">View code <AiOutlineGithub className="project-icon" /></a>
                </div>
              </div>
            </div>
          )})
        }
      </div>
      <div className="projects-more-wrapper">
        <a href="#archives" className="button projects-button">See more below</a>
      </div>
    </section>
  )
}
export default Projects