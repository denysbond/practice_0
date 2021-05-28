import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import ProtectedRoute from "./components/ProtectedRoute";
import NotProtectedUserPage from "./components/NotProtectedUserPage/NotProtectedUserPage";
import ProtectedUserPage from "./components/ProtectedPage/ProtectedUserPage";
import NotAuthorized from "./components/NoAuthorized/NotAuthorized";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App({ history }) {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <ProtectedRoute path="/protected" component={ProtectedUserPage} />
          <Route path="/unauthorized">
            <NotAuthorized />
          </Route>
          <Route path="/">
            <NotProtectedUserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
