import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import ecodeLengua from '../assets/lengua.png';


function ProjectCard({project}) {
  return (
    <Link to={'/project/' + project._id} className="projectCard">
      <img src={project.picture} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            {/* meto el path que estaba en css con un d: */}
            <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
          </svg>                     
          <img className="card__thumb" src={ecodeLengua} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{project.name}</h3>            
            <span className="card__status">Goal: ${project.goal}</span>
          </div>
        </div>
        <p className="card__description">{project.shortDesc}</p>
      </div>
    </Link>
  )
}

export default ProjectCard


