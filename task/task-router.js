const express = require('express');

const Task = require('./task-model')

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params;

  Task.findById(id)
  .then(task => {
    res.json(task);
  })
  .catch(error => {
      console.log(error);
    res.status(500).json({ message: 'Failed to get task' });
  });
});

router.post('/:id', (req, res) => {
    const taskData = req.body;
  
    Task.add(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (error => {
        console.log(error);
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router;