import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";

const PostFormEdit = (props) => {
  const [input, setInput] = useState(props.text);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userCreate.user);

  const data = {
    text: input,
  };

  const handleInputChange = (event) => {
    console.log(input);
    setInput(event.target.value);
  };

  const clickfetch = () => {
    props.setText(input)
    dispatch(props.fetchPosts(data))
  };

  return (
    <>
      <Form>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          type="content"
          value={input}
          onChange={handleInputChange}
        />
      </Form>
      <Button variant="success" onClick={clickfetch} variant="primary">
        Edit
      </Button>
    </>
  );
};

export default PostFormEdit;
