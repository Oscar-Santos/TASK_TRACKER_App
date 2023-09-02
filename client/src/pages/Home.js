import { useEffect } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import Form from '../components/Form'
import React from 'react'

const Home = () => {
  const {tasks, dispatch} = useTasksContext()
  

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`/api/tasks`)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_TASKS', payload: json})
      }
    }

    fetchTasks()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='tasks'>
        {tasks && tasks.map((task) => (
      
      <div className='task-details'>
        <h4>Task</h4>
          <p key={task._id}><strong>Title:</strong> {task.title}</p>
          
          <p key={task._id}> <strong>Description:</strong> {task.description}</p>
          
          <p key={task._id}><strong>Priority</strong> {task.priority}</p>
          
          <p key={task._id}><strong>Status:</strong> {task.status}</p> 

          {/* <p key={task._id}><strong>Created:</strong> {task.createdAt}</p>  */}
          <br />
          <span>Delete</span>
   </div>
          
        ))}
    
      </div>
         <Form /> 
         
    </div>
  )
  }

export default Home