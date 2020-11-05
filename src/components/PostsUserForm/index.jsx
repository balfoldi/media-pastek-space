import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  postEdit,
} from "./../../redux";
import { useSelector, useDispatch } from "react-redux";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PostsUserForm = () => {
  const [input, setInput] = useState({});
  const posts = useSelector((state) => state.posts.post);
  const user = useSelector((state) => state.userCreate.user);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    console.log("fetch post");
    const data = {
      text: input.content,
      user: user.id,
    };
    console.log(data);
    const token = Cookies.get("token");
    return (dispatch) => {
      dispatch(fetchPostRequest());
      fetch("https://my-pasteque-space.herokuapp.com/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("response");
          console.log(response);
          console.log(response.error ? true : false);
          if (response.error) {
            console.log(response.message);
            dispatch(fetchPostFailure(response.message));
          } else {
            console.log("postscreate");

            console.log(posts);

            dispatch(fetchPostSuccess(posts.concat([response])));
            console.log("postscreated");

            console.log(posts);
          }
        });
    };
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const clickfetch = () => {
    console.log("fetching");
    dispatch(fetchPosts());
  };

  return (
    <>
      <Card>
        <Form>
          <Card.Body>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                type="content"
                placeholder="Content"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Card.Body>
        </Form>
        <Card.Footer>
          <Button
            className="mb-5"
            onClick={clickfetch}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default PostsUserForm;
