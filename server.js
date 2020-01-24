const express = require('express');

const ProjectRouter = require('./project/project-router.js');

// const TaskRouter = require('./task/task-router.js');

// const ResourceRouter = require('./resource/resource-router.js');

const server = express();

server.use(express.json());

server.use('/project', ProjectRouter);

// server.use('/api/tasks', TaskRouter);

// server.use('/api/resource', ResourceRouter);

module.exports = server;