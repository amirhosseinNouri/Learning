import React, { useEffect } from "react";
import { fetchUser } from "../actions/";
import { connect } from "react-redux";

function UserHeader({ fetchUser, id, users }) {
  useEffect(() => {
    fetchUser(id);
  }, []);

  const user = users.find((item) => item.id === id);

  if(!user){
      return null
  }
  return <h3>{user.name}</h3>;
}

const mapStateToPros = (state) => {
  return { users: state.users };
};

export default connect(mapStateToPros, { fetchUser })(UserHeader);
