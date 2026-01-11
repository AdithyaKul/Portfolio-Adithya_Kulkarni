import { useState, useEffect } from 'react';
import { getProjects, getProjectById } from '../services/api';
import { mockProjects } from '../data/mockProjects';

export const useProjects = (filters = {}) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Attempt to fetch from API
      const response = await getProjects(filters);
      setProjects(response.data);
      setError(null);
    } catch (err) {
      console.warn('Backend API not available, using mock data for demonstration.', err);

      // Fallback to mock data with client-side filtering
      let filteredData = [...mockProjects];

      if (filters.featured) {
        filteredData = filteredData.filter(p => p.featured);
      }

      if (filters.category) {
        filteredData = filteredData.filter(p => p.category === filters.category);
      }

      if (filters.projectType) {
        filteredData = filteredData.filter(p => p.projectType === filters.projectType);
      }

      setProjects(filteredData);
      // Clear error so the UI displays the data
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [JSON.stringify(filters)]);

  return { projects, loading, error, refresh: fetchProjects };
};

export const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProject = async () => {
    if (!id) return;

    try {
      setLoading(true);
      // Attempt to fetch from API
      const response = await getProjectById(id);
      setProject(response.data);
      setError(null);
    } catch (err) {
      console.warn('Backend API not available, using mock data for demonstration.', err);
      // Fallback to mock data
      const mockProject = mockProjects.find(p => p._id === id);
      if (mockProject) {
        setProject(mockProject);
        setError(null);
      } else {
        setError("Project not found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  return { project, loading, error, refresh: fetchProject };
};