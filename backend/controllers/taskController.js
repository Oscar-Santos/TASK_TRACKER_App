const Task = require('../models/taskModel');
const mongoose = require('mongoose');


// get all tasks
const getTasks = async (req, res) => {

    const user_id = req.user._id
    const tasks = await Task.find({ user_id })
  
    res.status(200).json(tasks)
}

// get a specific task
const getTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'cannot get a specific task'})
    }
    try {
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch(error) {
        res.status(404).json({message: 'cannot get a specific task'})
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const task = await Task.findByIdAndDelete({_id: id})
  
    if(!task) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(task)
  }
// create a new task
const createTask = async (req, res) => {
    
    const { title, description, priority, status } = req.body

    try {
        const user_id = req.user._id
        const task = await Task.create( { title, description, priority, status, user_id } )
        res.status(200).send(task)
    } catch (error) {
        res.status(400).json({ error: "You must make a selection for every option." })
        // res.status(400).json({ message: 'cannot create a task' })
    }
    
}

// update a specific task 
const updateTaskAttr = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findOneAndUpdate({_id: id}, {...req.body})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({ message: 'cannot update a task attribute' })
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTaskAttr
}

