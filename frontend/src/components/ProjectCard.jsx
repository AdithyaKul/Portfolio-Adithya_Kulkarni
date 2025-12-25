import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // Truncate description to 120 characters
  const truncatedDescription = project.description.length > 120 
    ? project.description.substring(0, 120) + '...'
    : project.description;
  
  return (
    <div className="project-card scroll-animate">
      {project.imageUrl && (
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="project-meta">
          <span className={`category ${project.category}`}>{project.category}</span>
          <span className="type">{project.projectType}</span>
          {project.featured && <span className="featured">Featured</span>}
        </div>
        <p className="project-description">
          {truncatedDescription}
        </p>
        <Link to={`/projects/${project._id}`} className="btn btn-primary">
          Explore Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;