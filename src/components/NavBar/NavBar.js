import { Link } from "react-router-dom";

import { withRouter } from "react-router";
import "./NavBar.css";

function NavBar({ history }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="links">
        <Link to="/">
          <span>NotProtectedUserPage</span>
        </Link>

        <Link to="/protected">
          <span>ProtectedUserPage</span>
        </Link>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            localStorage.setItem("isAuthorized", true);
            history.push("/protected");
          }}
        >
          LogIn
        </button>

        <button
          onClick={() => {
            localStorage.setItem("isAuthorized", false);
            history.push("/");
          }}
        >
          LogOut
        </button>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
