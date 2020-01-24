const express = require('express');

const Project = require('./project-model.js')

const Task = require('../task/task-model.js')

const router = express.Router();

router.get('/', (req, res) => {
  Project.find()
  .then(project => {
    res.json(project);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to find project' });
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Project.findById(id)
    .then(project => {
        if (proj) {
      res.json(project);
        } else {
            res.status(404).json({ message: 'Failed to find project with that ID.'})
        }
    })
    .catch(error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to find project' });
    });
  });

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Task.findById(id)
    .then(project => {
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Failed to get project' });
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Project.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

module.exports = router;