// const db = require('../data/dbConfig.js');

// module.exports = {
//     find,
//     findById,
//     // findTasks,
//     add
// };

// function findTask(id) {
//     return db('task')
//     .select('task.task_description',
//       'task.task_notes',
//       'task.completed',
//       'project_name'  
//       )
//       .join('project', 'project.id', 'task.project_id')
//       .where('project_id', id );
// }

// function findTaskById(id) {
//     return db('task')
//     .where({id})
      
//   }

// //   function findTasks(id) {
// //     return db('task')
// //       .select(
// //         'task.id',
// //         'task.name',
// //         'task.description',
// //         'task.notes'
// //       )
// //       .join('task', 'task.task_id', 'task.id')
// //       .where({ task_id: id })
// //       .orderBy('task_id');
// //   }

//   function addTask(task) {
//     return db.insert(task, '*').into('task');
//   }