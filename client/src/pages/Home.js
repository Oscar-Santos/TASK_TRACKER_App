import { useState,useEffect } from 'react'
import React from 'react'

const Home = () => {

  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`/api/tasks`)
      const json = await response.json()

      if (response.ok) {
        setTasks(json)
      }
    }

    fetchTasks()
  }, [])

  return (
    <div>
      <div className='tasks'>
        {tasks && tasks.map((task) => (
      
      <div className='task-details'>
        <h4>Tasks</h4>
          <p key={task._id}><strong>Title:</strong> {task.title}</p>
          
          <p key={task._id}> <strong>Description:</strong> {task.description}</p>
          
          <p key={task._id}><strong>Priority</strong> {task.priority}</p>
          
          <p key={task._id}><strong>Status:</strong> {task.status}</p> 

          <p key={task._id}><strong>Created:</strong> {task.createdAt}</p> 
          <br />
          </div>
        ))}
      </div>
          
    </div>
  )
  }

export default Home