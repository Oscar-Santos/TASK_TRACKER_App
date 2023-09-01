import { useState } from "react"


export default function Form() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      const task = { title, description, priority, status }

      const response = await fetch('api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
      })

      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
        // setError(json.message)
      }
      if (response.ok) {
        setTitle("")
        setDescription("")
        setPriority("")
        setStatus("")
        setError(null)
        console.log('new task added successfully', json)
      }
    }
   
    return (
        <div>
            <form action="" className="create" onSubmit={handleSubmit}>
                <h3>Add a new Task</h3>

                <label> Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                

                <label> Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                
                <label> Priority:</label>
                <input type="text" onChange={(e) => setPriority(e.target.value)} value={priority}/>
                

                <label> Status:</label>
                <input type="text" onChange={(e) => setStatus(e.target.value)} value={status}/>

                <button>Add Task</button>
            </form>
        </div>
    )
}