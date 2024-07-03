import React, {useState} from 'react'

import './index.css'

const TaskInput = ({addTask}) => {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task)
      setTask('')
    }
  }

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="input-field"
      />
      <button className="add-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  )
}

export default TaskInput
