import { useState,  useEffect } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'


import Form from '../components/Form'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const {tasks, dispatch} = useTasksContext()

  const fetchTasks = async () => {
  
    const response = await fetch(`/api/tasks`)
    const json = await response.json()

    console.log(json)
    if (response.ok) {
      
      dispatch({type: 'SET_TASKS', payload: json})

      navigate('/home')
    }
  }

  useEffect(() => {

    fetchTasks()
  }, [])



  const handleClick = async (taskId) => {
   console.log(taskId)
    try {
      
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        dispatch({ type: 'DELETE_TASK', payload: { _id: taskId } });
        console.log('Component re-rendered after task deletion');
      } else {
        console.error('Failed to delete task');
      }
      navigate('/home')
    } catch (error) {
      console.error('Error deleting task:', error);
    }
    
  };
  
// if (tasks.length == 0) {
//   return (
//     <div>
//       loading......
//       </div>
//   )
// }


  return (
    <div className='home'>
      <div className='tasks'>
        {tasks && tasks.map((task) => (
      
      <div className='task-details' key={task._id}>
        <h4>Task</h4>
          <p key={task._id}><strong>Title:</strong> {task.title}</p>
          
          <p key={task._id}> <strong>Description:</strong> {task.description}</p>
          
          <p key={task._id}><strong>Priority</strong> {task.priority}</p>
          
          <p key={task._id}><strong>Status:</strong> {task.status}</p> 
      
          {/* <p key={task._id}><strong>Created:</strong> {task.createdAt}</p>  */}
          
          {/* <span onClick={handleClick}>Delete</span> */}
          <span onClick={() => handleClick(task._id)}>Delete</span>
          {/* <span onClick={() => handleUpdate(task._id)}>Update</span> */}
   </div>
          
        ))}
    
      </div>
         <Form /> 
         
    </div>
  )
  }

export default Home