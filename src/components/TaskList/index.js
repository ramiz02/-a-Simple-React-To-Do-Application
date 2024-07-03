import React from 'react'
import './index.css'

const TaskList = ({tasks, deleteTask, toggleCompleteTask, openEditModal}) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`task ${task.completed ? 'completed' : ''}`}
        >
          <span onClick={() => toggleCompleteTask(task.id)}>{task.text}</span>
          <div>
            <button className="edit-button" onClick={() => openEditModal(task)}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
