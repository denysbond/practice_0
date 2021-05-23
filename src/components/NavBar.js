import {
  Link,
} from "react-router-dom";
import { withRouter } from "react-router";

function NavBar({ history }) {
  return (
    <nav>
      <Link to="/">NotProtectedUserPage</Link>
      <Link to="/protected">ProtectedUserPage</Link>
      <button onClick={() => {
        localStorage.setItem("isAuthorized", true);
        history.push("/protected");
      }}>LogIn</button>
      <button onClick={() => {
        localStorage.setItem("isAuthorized", false);
        history.push("/");
      }}>LogOut</button>
    </nav>
  )
}

export default withRouter(NavBar);
