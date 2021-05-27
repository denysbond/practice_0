import React from 'react';
import {useState} from 'react';
import './TodoForm.css';

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput("")
  }

  const handleKeyPress = (e) => {
      if(e.key === "Enter") {
          handleSubmit(e)
      }
  }
  
  return (
    <div className = 'form-container'>
      <form onSubmit={handleSubmit}>
          <input
              value={userInput}
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              placeholder="Enter task..."
          />        
      </form>
    </div>
  )
}

export default TodoForm;