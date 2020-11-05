import React, { useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "./../../../redux";
import Cookies from "js-cookie";

export const ProfilShowCardForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userCreate.user);
  const error = useSelector((state) => state.userCreate.error);
  const [input, setInput] = useState({ username: user.username });

  const fetchUser = () => {
    const token = Cookies.get("token");
    return (dispatch) => {
      dispatch(fetchUserRequest());
      fetch(`https://my-pasteque-space.herokuapp.com/users/${user.id}/`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.error ? true : false);
          if (response.error) {
            console.log(response.message);
          } else {
            console.log(response);
            Cookies.get("user", response);
            dispatch(fetchUserSuccess(response));
            props.edit(false);
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
  const clickFetch = () => {
    dispatch(fetchUser());
  };
  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Card.Body>
        <Form>
          <Card>
            <Card.Body>
              <Form.Control
                name="username"
                type="username"
                value={input.username}
                onChange={handleInputChange}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Form.Control
                name="email"
                type="email"
                placeholder={user.email}
                onChange={handleInputChange}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Form.Control
                name="description"
                type="description"
                placeholder={
                  user.description ? user.description : "description"
                }
                onChange={handleInputChange}
              />
            </Card.Body>
          </Card>
        </Form>
        <Button
          variant="success"
          className="w-100"
          onClick={() => clickFetch()}
          type="submit"
        >
          <FontAwesomeIcon icon={faCheckSquare} />
        </Button>
      </Card.Body>
    </>
  );
};
export default ProfilShowCardForm;
