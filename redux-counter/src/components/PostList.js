import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

function PostList({ posts , fetchPosts }) {
  console.log(posts);

  useEffect(() => {

      fetchPosts()
  }, []);
  return <div>Post List</div>;
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);