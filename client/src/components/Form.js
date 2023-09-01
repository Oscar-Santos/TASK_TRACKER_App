
import React, { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description, priority, status };

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error || "Something went wrong");
        setSuccess(null);
      } else {
        setTitle("");
        setDescription("");
        setPriority("");
        setStatus("");
        setError(null);
        setSuccess("Task added successfully");
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
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label>Status:</label>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">Select Status</option>
          <option value="To-do">To Do</option>
          <option value="in-Progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button>Add Task</button>
      </form>

      {/* Error and Success Messages */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}
