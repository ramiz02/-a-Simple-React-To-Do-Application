import React, {useState, useEffect} from 'react'
import './index.css'

const Modal = ({show, onClose, onSave, task}) => {
  const [editText, setEditText] = useState(task ? task.text : '')

  useEffect(() => {
    if (task) {
      setEditText(task.text)
    }
  }, [task])

  if (!show) {
    return null
  }

  const handleSave = () => {
    onSave(task.id, editText)
    onClose()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="edit-heading">Edit Your Task</h2>
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          className="input-edit-field"
        />
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Modal
