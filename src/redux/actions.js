import { SET_USER, ADD_TODO, DELETE_TODO } from "./actionTypes";

export const setUser = userData => {
  return {
    type: SET_USER,
    payload: {
      name: userData.name,
      surname: userData.surname,
    }
  }
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      todo
    }
  }
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
};