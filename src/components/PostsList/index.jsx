import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  postEdit,
} from "./../../redux";
import Cookies from "js-cookie";
import "./_styles.scss";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.post);
  console.log("posts");
  console.log(posts);

  const dispatch = useDispatch();

  const [count, setCount] = useState([]);

  const fetchPosts = () => {
    console.log("fetchPosts");
    const token = Cookies.get("token");
    return (dispatch) => {
      console.log("return");
      dispatch(fetchPostRequest());
      fetch("https://my-pasteque-space.herokuapp.com/posts", {
        method: "get",
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.error ? true : false);
          if (response.error) {
            console.log(response.message);
            dispatch(fetchPostFailure(response.message));
          } else {
            console.log(response.post);
            dispatch(fetchPostSuccess(response));
            console.log(posts);
          }
        });
    };
  };

  const fetchPostsCount = () => {
    fetch("https://my-pasteque-space.herokuapp.com/posts/count")
      .then((response) => response.json())
      .then((data) => {
        count(data);
      });
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <p> {count} </p>
      {posts &&
        posts
          .sort((a, b) => {
            return b.id - a.id;
          })
          .map((post) => {
            return <Post post={post} homeIndex={true} />;
          })}
    </div>
  );
};

export default PostsList;
