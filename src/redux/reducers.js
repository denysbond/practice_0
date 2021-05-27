import { SET_USER, ADD_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
  user: {
    name: "",
    surname: "",
  },
  todos: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const { name, surname } = action.payload;
      return {
        ...state,
        user: {
          name,
          surname,
        }
      }
    }
    case ADD_TODO: {
      const { todo } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { task: todo, id: Date.now() }]
      }
    }

    case DELETE_TODO: {
      const { id }  = action.payload;
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== id)]
      }
    }
    
    default: {
      return state;
    }
  }
}