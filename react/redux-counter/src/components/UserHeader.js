import { connect } from "react-redux";

function UserHeader({ user }) {
  if (!user) {
    return null;
  }
  return <h3>{user.name}</h3>;
}

const mapStateToPros = (state, ownProps) => {
  return { user: state.users.find((item) => item.id === ownProps.id) };
};

export default connect(mapStateToPros)(UserHeader);
