import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

function PostList() {
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>Post List</div>;
}

export default connect(null, { fetchPosts })(PostList);
