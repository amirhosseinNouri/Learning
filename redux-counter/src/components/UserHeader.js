import React, { useEffect } from "react";
import { fetchUser } from "../actions/";
import { connect } from "react-redux";

function UserHeader({ fetchUser, id, user }) {
  useEffect(() => {
    fetchUser(id);
  }, []);

  

  if(!user){
      return null
  }
  return <h3>{user.name}</h3>;
}

const mapStateToPros = (state , ownProps) => {
  return { user: state.users.find(item => item.id === ownProps.id) };
};

export default connect(mapStateToPros, { fetchUser })(UserHeader);
