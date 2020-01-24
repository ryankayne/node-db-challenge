const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    // findTasks,
    add
};

function find() {
    return db('task')
}

function findById(id) {
    return db('task')
      .select('task.task_description',
      'task.task_notes',
      'task.completed',
      'project.project_name'  
      )
      .join('project', 'project.id', 'task.project_id')
      .where('project_id', id );

  }

//   function findTasks(id) {
//     return db('task')
//       .select(
//         'task.id',
//         'task.name',
//         'task.description',
//         'task.notes'
//       )
//       .join('task', 'task.task_id', 'task.id')
//       .where({ task_id: id })
//       .orderBy('task_id');
//   }

  function add(task) {
    return db('task')
      .insert(task, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }