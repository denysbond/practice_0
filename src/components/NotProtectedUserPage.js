import { connect } from "react-redux";

import Todo from "./Todo/Todo";

function NotProtectedUserPage({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo logOut notAuthPage todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(NotProtectedUserPage);
