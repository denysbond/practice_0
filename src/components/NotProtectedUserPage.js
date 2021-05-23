import { connect } from "react-redux";

import { getUser } from "../redux/selectors";

function NotProtectedUserPage({ user }) {
  console.log("user", user);
  return <div>
    <div>
      <span>Name:</span>
      <span>{user.name}</span>
    </div>
    <div>
      <span>Surname:</span>
      <span>{user.surname}</span>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps, null)(NotProtectedUserPage);