import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filters, setFilters] = useState({
    category: '',
    projectType: ''
  });

  const { projects, loading, error } = useProjects(filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      category: '',
      projectType: ''
    });
  };

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header animate-fade-in-up">
          <h1>Project Gallery</h1>
          <p className="section-description">Explore my collection of technical and creative projects</p>
        </div>
        
        <div className="filters animate-fade-in-up delay-1">
          <div className="filter-group">
            <label htmlFor="category">Category</label>
            <select 
              id="category" 
              name="category" 
              value={filters.category} 
              onChange={handleFilterChange}
            >
              <option value="">All Categories</option>
              <option value="technical">Technical</option>
              <option value="non-technical">Non-Technical</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="projectType">Project Type</label>
            <select 
              id="projectType" 
              name="projectType" 
              value={filters.projectType} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full Stack</option>
              <option value="design">Design</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="filter-actions">
            <button className="btn btn-secondary" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="loading-placeholder animate-fade-in-up">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : error ? (
          <div className="error-placeholder animate-fade-in-up">
            <p>Error loading projects: {error}</p>
            <button className="btn btn-secondary" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        ) : projects.length === 0 ? (
          <div className="empty-placeholder animate-fade-in-up">
            <h3>No projects found</h3>
            <p>Try adjusting your filters to see more projects</p>
            <button className="btn btn-primary" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project._id} className={`animate-fade-in-up delay-${index % 4}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;