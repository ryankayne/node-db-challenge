const express = require('express');

const Project = require('./project-model.js')

const router = express.Router();

router.get('/', (req, res) => {
  Project.list()
  .then(project => {
    res.json(project);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to get project' });
  });
});