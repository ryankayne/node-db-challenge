// const express = require('express');

// const Resource = require('./resource-model.js')

// const router = express.Router();

// router.get('/', (req, res) => {
//     Resource.find()
//   .then(resource => {
//     res.status(200).json(resource);
//   })
//   .catch(error => {
//       console.log(error);
//     res.status(500).json({ message: 'Failed to get resource' });
//   });
// });

// router.get('/:id', (req, res) => {
//     const id = req.params;

//     Resource.findById(id)
//   .then(resource => {
//     res.status(200).json(resource);
//   })
//   .catch(error => {
//       console.log(error);
//     res.status(500).json({ message: 'Failed to get resource' });
//   });
// });

// router.post('/', (req, res) => {
//     const resourceData = req.body;
  
//     Resource.add(resourceData)
//     .then(resource => {
//       res.status(201).json(resource);
//     })
//     .catch (error => {
//         console.log(error);
//       res.status(500).json({ message: 'Failed to create new resource' });
//     });
//   });

// module.exports = router;