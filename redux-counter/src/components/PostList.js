import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { AiOutlineUser } from "react-icons/ai";
import UserHeader from './UserHeader'

function PostList({ posts, fetchPosts }) {
  console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className="postlist">
      {posts.map((item) => {
        return (
          <article key={item.id} className="item">
            <div className="item__top">
              <AiOutlineUser className="item__icon"></AiOutlineUser>
              <h4>{item.title}</h4>
            </div>
            <div className="item__bottom">{item.body}</div>
            <UserHeader id={item.userId}></UserHeader>
          </article>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
