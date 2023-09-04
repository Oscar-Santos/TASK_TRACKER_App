const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTaskAttr } = require('../controllers/taskController');

const router = express.Router();



// get all tasks
router.get('/', getTasks)

// get a specific task
router.get('/:id', getTask)

// create a new task
router.post('/', createTask)

// delete a specific task
router.delete('/:id', deleteTask);

// update a specific task
router.patch('/:id', updateTaskAttr);










module.exports = router;