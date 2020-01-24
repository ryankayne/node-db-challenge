const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    // findTasks,
    add
};

function find() {
    return db('project')
}

function findById(id) {
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

  function add(project) {
    return db('project')
      .insert(project, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }