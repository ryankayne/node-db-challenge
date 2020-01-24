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
      .where({ id })
      .first();
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