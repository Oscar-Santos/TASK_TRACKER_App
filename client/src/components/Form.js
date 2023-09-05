import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Form() {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You need to login to see your tasks')
      return
    }

    const task = { title, description, priority, status };

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
        },
      });

      const json = await response.json();
      if (!response.ok) {
        
        setError(json.error || "Something went wrong");
        setSuccess(null);
      } else {
        navigate('/')
        setTitle("");
        setDescription("");
        setPriority("");
        setStatus("");
        setError(null);
        setSuccess("Task added successfully");
        
        setTimeout(() => {
          setSuccess(null);
        }, 3000); 

        dispatch({type: 'CREATE_TASK', payload: json})
        navigate("/");
        navigate("/home");

      }
    } catch (error) {
      setError("Something went wrong");
      setSuccess(null);
    }
  };

  return (
    <div>
      <form action="" className="create" onSubmit={handleSubmit}>
        <h3>Add a New Task</h3>

        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />

        <label>Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />

        <label>Priority:</label>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Status:</label>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">Select Status</option>
          <option value="To do">To Do</option>
          <option value="in Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button>Add Task</button>
      </form>

      {/* Error and Success Messages */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}
