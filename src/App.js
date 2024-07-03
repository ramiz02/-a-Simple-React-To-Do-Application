import React, {useState, useEffect} from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  const [showModal, setShowModal] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = task => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}])
  }

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleCompleteTask = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    )
  }

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, text: updatedTask} : task,
      ),
    )
  }

  const openEditModal = task => {
    setCurrentTask(task)
    setShowModal(true)
  }

  const closeEditModal = () => {
    setShowModal(false)
    setCurrentTask(null)
  }

  return (
    <div className="App">
      <h1>Build a Simple React To-Do Application</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompleteTask={toggleCompleteTask}
        openEditModal={openEditModal}
      />
      <Modal
        show={showModal}
        onClose={closeEditModal}
        onSave={editTask}
        task={currentTask}
      />
    </div>
  )
}

export default App
