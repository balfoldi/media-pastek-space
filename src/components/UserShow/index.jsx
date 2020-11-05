import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Post from "./../PostsList/Post";
const UserShow = (props) => {
  const posts = useSelector((state) => state.posts.post);
  console.log("userpotsts");
  console.log(posts);
  const propsUserPosts = posts.filter((post) => {
    return post.user && post.user.id === props.user.id;
  });
  return (
    <>
      <div
        onClick={() => props.setShowUser(false)}
        className="modal-container"
      ></div>
      <div className="modal-content">
        <div className="card-header d-flex flex-row justify-content-between px-5">
          <h2>{props.user.username}</h2>
          <i className="text-secondary">{props.user.description}</i>
          <span
            onClick={() => props.setShowUser(false)}
            className="close align-self-center"
          >
            &times;
          </span>
        </div>
        <div className="modal-body post-index">
          {propsUserPosts.map((post) => {
            return <Post post={post} />;
          })}
        </div>
        <div className="modal-footer">
          <i className="text-secondary">{props.user.email}</i>
        </div>
      </div>
    </>
  );
};

export default UserShow;
