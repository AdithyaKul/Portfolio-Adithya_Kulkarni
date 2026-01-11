import React, { useState, useEffect } from 'react';
import { useProjects } from '../hooks/useProjects';
import { createProject, updateProject, deleteProject } from '../services/api';

const Admin = () => {
  const { projects, loading, error, refresh } = useProjects();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    category: 'technical',
    projectType: 'other',
    imageUrl: '',
    liveUrl: '',
    githubUrl: '',
    featured: false
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info'); // 'info', 'success', 'error'

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('info');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
      };

      if (editingId) {
        await updateProject(editingId, projectData);
        setMessage('Project updated successfully!');
        setMessageType('success');
        setEditingId(null);
      } else {
        await createProject(projectData);
        setMessage('Project created successfully!');
        setMessageType('success');
      }

      // Reset form
      setFormData({
        title: '',
        description: '',
        technologies: '',
        category: 'technical',
        projectType: 'other',
        imageUrl: '',
        liveUrl: '',
        githubUrl: '',
        featured: false
      });

      // Refresh projects list
      refresh();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
      setMessageType('error');
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      category: project.category,
      projectType: project.projectType,
      imageUrl: project.imageUrl || '',
      liveUrl: project.liveUrl || project.projectUrl || '',
      githubUrl: project.githubUrl || '',
      featured: project.featured || false
    });
    setEditingId(project._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await deleteProject(id);
        setMessage('Project deleted successfully!');
        setMessageType('success');
        refresh();
      } catch (err) {
        setMessage(`Error: ${err.message}`);
        setMessageType('error');
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      technologies: '',
      category: 'technical',
      projectType: 'other',
      imageUrl: '',
      liveUrl: '',
      githubUrl: '',
      featured: false
    });
    setMessage('');
    setMessageType('info');
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="page-header animate-fade-in-up">
          <h1>Admin Dashboard</h1>
          <p className="section-description">Manage your portfolio projects with ease</p>
        </div>

        {message && (
          <div className={`alert alert-${messageType} animate-fade-in-up`}>
            <div className="alert-icon">
              {messageType === 'success' && '✓'}
              {messageType === 'error' && '⚠'}
              {messageType === 'info' && 'ℹ'}
            </div>
            <div className="alert-message">{message}</div>
          </div>
        )}

        <div className="admin-content">
          <div className="form-section animate-fade-in-up delay-1">
            <div className="form-header">
              <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
              {editingId && (
                <button type="button" className="btn btn-secondary btn-small" onClick={handleCancelEdit}>
                  Cancel Edit
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., RegisterYu Campus App"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Describe the impact and technical challenges..."
                ></textarea>
                <div className="char-count">{formData.description.length} characters</div>
              </div>

              <div className="form-group">
                <label htmlFor="technologies">Technologies (comma separated)</label>
                <input
                  type="text"
                  id="technologies"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  placeholder="React, Node.js, Supabase"
                />
                <div className="tech-preview">
                  {formData.technologies.split(',').map((tech, i) => tech.trim() && (
                    <span key={i} className="tech-tag-preview">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="technical">Technical</option>
                    <option value="non-technical">Non-Technical</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="design">Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/..."
                />
                {formData.imageUrl && (
                  <div className="image-preview">
                    <img src={formData.imageUrl} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="liveUrl">Live Project URL</label>
                  <input
                    type="text"
                    id="liveUrl"
                    name="liveUrl"
                    value={formData.liveUrl}
                    onChange={handleChange}
                    placeholder="https://project.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="githubUrl">GitHub Repository</label>
                  <input
                    type="text"
                    id="githubUrl"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <label htmlFor="featured">Mark as Featured Project</label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-large">
                  {editingId ? 'Update & Save' : 'Publish Project'}
                </button>
              </div>
            </form>
          </div>

          <div className="projects-section animate-fade-in-up delay-2">
            <div className="section-header">
              <h2>Project Inventory</h2>
              <div className="section-actions">
                <span className="project-count">{projects.length} Total</span>
                <button className="btn btn-secondary btn-small" onClick={refresh}>
                  ⟳ Sync
                </button>
              </div>
            </div>
            {loading ? (
              <div className="loading-placeholder">
                <div className="spinner"></div>
                <p>Synchronizing project data...</p>
              </div>
            ) : error ? (
              <div className="error-placeholder">
                <p>Connection issue: {error}</p>
                <button className="btn btn-secondary" onClick={() => refresh()}>
                  Retry Fetch
                </button>
              </div>
            ) : (
              <div className="projects-list-admin">
                {projects.length === 0 ? (
                  <div className="empty-placeholder">
                    <div className="empty-icon">📁</div>
                    <h3>No projects found</h3>
                    <p>Start your journey by adding a new project!</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div key={project._id} className="project-item-admin">
                      <div className="project-status">
                        {project.featured && <span className="featured-dot" title="Featured"></span>}
                      </div>
                      <div className="project-info-admin">
                        <h3>{project.title}</h3>
                        <div className="project-meta-admin">
                          <span className={`badge badge-${project.category}`}>{project.category}</span>
                          <span className="badge badge-type">{project.projectType}</span>
                        </div>
                      </div>
                      <div className="project-actions-admin">
                        <button
                          className="action-btn edit"
                          onClick={() => handleEdit(project)}
                          title="Edit"
                        >
                          ✎
                        </button>
                        <button
                          className="action-btn delete"
                          onClick={() => handleDelete(project._id)}
                          title="Delete"
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;