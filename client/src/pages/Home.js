
import { useState,  useEffect } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'


import Form from '../components/Form'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const {tasks, dispatch} = useTasksContext()
  const { user } = useAuthContext()

  const fetchTasks = async () => {
  
    const response = await fetch(`/api/tasks`, {
      headers: { 
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    console.log(json)
    if (response.ok) {
      
      dispatch({type: 'SET_TASKS', payload: json})

      navigate('/home')
    }
  }

  useEffect(() => {

    if (user) {
      fetchTasks()
    }

  }, [user])

const [updatedTask, setUpdatedTask] = useState({
  _id: '', // Store the task ID for updates
  title: '',
  description: '',
  priority: '',
  status: '',
});

const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
const [successMessage, setSuccessMessage] = useState(null);

const handleUpdateSubmit = async () => {
  try {
    const response = await fetch(`/api/tasks/${updatedTask._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(updatedTask),
    });

    if (response.ok) {
      // Update the local state with the updated task
      const updatedTaskIndex = tasks.findIndex((task) => task._id === updatedTask._id);
      const updatedTasks = [...tasks];
      updatedTasks[updatedTaskIndex] = updatedTask;
      dispatch({ type: 'SET_TASKS', payload: updatedTasks });

      setSuccessMessage('Task updated successfully');
      setIsUpdateFormVisible(false);

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

    } else {
      console.error('Failed to update task');
    }
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

  const handleClick = async (taskId) => {

   console.log(taskId)
    try {
      
      if (!user) {
        return
      }

      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
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


  return (

  <div className='home'>
  <div className='tasks'>
    {tasks &&
      tasks.map((task, index) => (
        <div className='task-details' key={task._id}>
          <h4>Task # {index + 1}</h4>
          <p>
            <strong>Title:</strong> {task.title}
          </p>

          <p>
            <strong>Description:</strong> {task.description}
          </p>

          <p>
            <strong>Priority</strong> {task.priority}
          </p>

          <p>
            <strong>Status:</strong> {task.status}
          </p>

          <p>
            <strong>Created:</strong> {formatDistanceToNow(new Date(task.createdAt), {addSuffix: true})}
            
          </p>

          {isUpdateFormVisible && task._id === updatedTask._id ? (
            <div className='update-form'>
              <input
                type='text'
                placeholder='Updated Title'
                value={updatedTask.title}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, title: e.target.value })
                }
              />
        
              <input
                type='text'
                placeholder='Updated Description'
                value={updatedTask.description}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, description: e.target.value })
                  }
              />
 
          <select 
            name="priority" 
            value={updatedTask.priority}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, priority: e.target.value })
            }>        
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
          </select>

            <select 
              name='status'
              value={updatedTask.status}
              onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, status: e.target.value })
              }>
                <option value="">Select Status</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
             </select>
      
              <button onClick={handleUpdateSubmit}>Update Task</button>
            </div>
          ) : (
            <>
              <span
                className='delete-button material-symbols-outlined'
                onClick={() => handleClick(task._id)}
              >
                Delete
              </span>
             
              <span
                className='update-button material-symbols-outlined'
                onClick={() => {
                  setUpdatedTask(task); // Set the task data to be updated
                  setIsUpdateFormVisible(true); // Show the update form
                }}
              >
                Update
              </span>
            </>
          )}
        </div>
        )
        
  )}
    
      </div>
         <Form /> 
         {successMessage && <p className="success">{successMessage}</p>}
    </div>
  )
  }

export default Home