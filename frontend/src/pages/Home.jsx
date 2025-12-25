import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const { projects, loading, error } = useProjects({ featured: true });

  return (
    <div className="home">
      {/* Hero Section with Profile */}
      <section className="hero">
        <div className="container hero-content">
          <img 
            src="/profile.jpg" 
            alt="Adithya R Kulkarni" 
            className="profile-image animate-scale-in"
          />
          <h1 className="animate-fade-in-up">Adithya R Kulkarni</h1>
          <span className="title animate-fade-in-up delay-1">
            MERN Stack Developer | UI/UX Enthusiast | Creative Designer and Award-Winning Video Editor | Managing Director @OSCode
          </span>
          <p className="description animate-fade-in-up delay-2">
            Passionate about creating digital experiences that blend technical excellence with creative design. 
            Specializing in full-stack development with a focus on user-centric solutions.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-3">
            <Link to="/projects" className="btn btn-primary">
              Explore Projects
            </Link>
            <Link to="/resume" className="btn btn-secondary">
              View Resume
            </Link>
          </div>
          <div className="social-links animate-fade-in-up delay-4">
            <a href="https://www.linkedin.com/in/adithya-kulkarni-0aa444293" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="animate-fade-in-up">Featured Projects</h2>
          <p className="section-description animate-fade-in-up">Handpicked selection of my best work</p>
          {loading ? (
            <div className="loading-placeholder">
              <div className="spinner"></div>
              <p>Loading featured projects...</p>
            </div>
          ) : error ? (
            <div className="error-placeholder">
              <p>Error loading projects: {error}</p>
              <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                Retry
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project._id} className={`animate-fade-in-up delay-${index % 3}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="animate-fade-in-up">About Me</h2>
          <div className="about-content animate-fade-in-up">
            <p>
              I'm a passionate creator who bridges the gap between technology and design. 
              With expertise spanning both technical and creative domains, I craft solutions 
              that are not only functional but also beautiful and meaningful.
            </p>
            <p>
              My approach combines analytical thinking with creative problem-solving to 
              deliver innovative projects that make a real impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;