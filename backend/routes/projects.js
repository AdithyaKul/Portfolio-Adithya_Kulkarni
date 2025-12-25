const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// GET /api/projects - Get all projects
router.get('/', getAllProjects);

// GET /api/projects/:id - Get a single project by ID
router.get('/:id', getProjectById);

// POST /api/projects - Create a new project
router.post('/', createProject);

// PUT /api/projects/:id - Update a project
router.put('/:id', updateProject);

// DELETE /api/projects/:id - Delete a project
router.delete('/:id', deleteProject);

// DELETE /api/projects/title/:title - Delete a project by title
router.delete('/title/:title', async (req, res) => {
  try {
    const Project = require('../models/Project');
    const result = await Project.deleteMany({ 
      title: { $regex: new RegExp(req.params.title, 'i') } 
    });
    
    if (result.deletedCount > 0) {
      res.status(200).json({ 
        message: `Successfully removed ${result.deletedCount} project(s)`, 
        deletedCount: result.deletedCount 
      });
    } else {
      res.status(404).json({ message: 'No projects found with that title' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;