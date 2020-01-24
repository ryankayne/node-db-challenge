const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    // findTasks,
    add
};

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
      .where({ id })
      .first();
  }

//   function findTasks(id) {
//     return db('resource')
//       .select(
//         'task.id',
//         'resource.name',
//         'task.description',
//         'task.notes'
//       )
//       .join('task', 'task.resource_id', 'resource.id')
//       .where({ resource_id: id })
//       .orderBy('task_id');
//   }

  function add(resource) {
    return db('resources')
      .insert(resource, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }