import React from 'react';
import './Todo.css';


 function Todo({ todo, removeTask }){

  const isAuthorized = localStorage.getItem('isAuthorized') === "true";

  return (
  <div className = 'todo-container'>
    <div key={todo.id} className="item-todo">
        <div>
            {todo.task}
        </div>

         { !isAuthorized || <div className="item-delete" onClick={() => removeTask(todo.id)}>
         <i className="bi bi-x-circle-fill"></i> 
        </div>} 
    </div>
  </div>
)
  }

  export default Todo;