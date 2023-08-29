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
          <p key={task._id}>{task.title}</p>
        ))}
      </div>

    </div>
  )
  }

export default Home