import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const PostsUserForm = () => {
  const [input, setInput] = useState({});

  const user = useSelector((state) => state.userCreate.user);

  const fetchPosts = () => {
    console.log("fetch post");
    const data = {
      text: input.content,
      user: user.id,
    };
    const token = Cookies.get("token");
    fetch("https://my-pasteque-space.herokuapp.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.error ? true : false);
        if (response.error) {
          console.log(response.message);
        } else {
          console.log(response.user);
        }
      });
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const clickfetch = () => {
    console.log("fetching");
    fetchPosts();
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
