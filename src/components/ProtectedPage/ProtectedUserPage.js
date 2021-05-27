import { connect } from "react-redux";

import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import { addTodo, deleteTodo } from '../../redux/actions';

import './ProtectedPage.css';


function ProtectedUserPage({ todos, addTodo, deleteTodo }) {
  console.log(todos);

  return (
    <div>
      <TodoForm addTask={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            removeTask={deleteTodo}
            />
        )
      })}
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(ProtectedUserPage);


