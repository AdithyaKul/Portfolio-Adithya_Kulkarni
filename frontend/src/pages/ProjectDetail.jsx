import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProject } from '../hooks/useProjects';

const ProjectDetail = () => {
  const { id } = useParams();
  const { project, loading, error } = useProject(id);

  if (loading) return (
    <div className="container">
      <div className="loading-placeholder animate-fade-in-up">
        <div className="spinner"></div>
        <p>Loading project details...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="container">
      <div className="error-placeholder animate-fade-in-up">
        <p>Error loading project: {error}</p>
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    </div>
  );

  if (!project) return (
    <div className="container">
      <div className="error-placeholder animate-fade-in-up">
        <h3>Project Not Found</h3>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="btn btn-primary">
          Browse All Projects
        </Link>
      </div>
    </div>
  );

  return (
    <div className="project-detail">
      <div className="container">
        <div className="navigation animate-fade-in-up">
          <Link to="/projects" className="btn btn-secondary">
            ← Back to Projects
          </Link>
        </div>

        <div className="project-header animate-fade-in-up delay-1">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className={`category ${project.category}`}>{project.category}</span>
            <span className="type">{project.projectType}</span>
            {project.featured && <span className="featured">Featured</span>}
          </div>
        </div>

        {project.imageUrl && (
          <div className="project-image animate-scale-in delay-2">
            <img src={project.imageUrl} alt={project.title} />
          </div>
        )}

        <div className="project-description animate-fade-in-up delay-3">
          <h2>About This Project</h2>
          <p>{project.description}</p>
        </div>

        <div className="project-details">
          <div className="technologies animate-fade-in-up delay-4">
            <h3>Technologies & Tools</h3>
            <ul>
              {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))
              ) : (
                <li>No technologies specified</li>
              )}
            </ul>
          </div>

          <div className="project-links animate-fade-in-up delay-4">
            <h3>Project Resources</h3>
            <div className="links-container">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Source Code
                </a>
              )}
              {(!project.liveUrl || project.liveUrl === "#") && !project.githubUrl && (
                <p>No external links available for this project.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;