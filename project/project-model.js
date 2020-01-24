const db = require('../data/dbConfig.js');

module.exports = {
    findProject,
    findProjectById,
    // findTasks,
    addProject,
    findTask,
    // findTaskById,
    addTask,
    findResource,
    addResource
};

function findProject() {
    return db('project')
}

function findProjectById(id) {
    return db('project')
      .where({ id })
      .first();
  }

//   function findTasks(id) {
//     return db('project')
//       .select(
//         'task.id',
//         'project.name',
//         'task.description',
//         'task.notes'
//       )
//       .join('task', 'task.project_id', 'project.id')
//       .where({ project_id: id })
//       .orderBy('task_id');
//   }

  function addProject(project) {
    return db('project')
      .insert(project)
    //   .then(id => {
    //     return findById(id);
    //   });
  }

  function findTask(id) {
    return db('task')
    .select('task.task_description',
      'task.task_notes',
      'task.completed',
      'project.project_name'  
      )
      .join('project', 'project.id', 'task.project_id')
      .where('project_id', id );
}

// function findTaskById(id) {
//     return db('task')
//     .where({id})
      
//   }

  function addTask(task) {
    return db.insert(task, '*').into('task');
  }

  function findResource() {
    return db('resources')
}

function addResource(resource) {
    return db('resources').insert(resource)
  };