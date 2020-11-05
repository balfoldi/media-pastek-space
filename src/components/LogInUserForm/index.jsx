import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "./../../redux";
import Cookies from 'js-cookie'
import "./_styles.scss";

const LogInUserForm = () => {
  const dispatch = useDispatch();
  const fetchState = useSelector((state) => state.userCreate);
  const fetchError = useSelector((state) => state.userCreate.error);
  const fetchUserName = useSelector((state) => state.userCreate.user);

  const fetchUser = (props) => {
    return (dispatch) => {
      const data = {
        identifier: input.email,
        password: input.password,
      };
      dispatch(fetchUserRequest());
      fetch("https://my-pasteque-space.herokuapp.com/auth/local/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.error ? true : false);
          if (response.error) {
            console.log(response.message[0].messages[0].message);
            dispatch(fetchUserFailure(response.message[0].messages[0].message));
            console.log(fetchError);
          } else {
            console.log(response.user);
            dispatch(fetchUserSuccess(response.user));
            Cookies.set("token", response.jwt)
            Cookies.set("user", response.user)
          }
        });
    };
  };
  const clickFetch = () => {
    dispatch(fetchUser());
  };
  const [input, setInput] = useState({});

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <>
      <div className="SpaceGroteskFont">
        <Form className="mt-5">
        <h1>Connexion</h1>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter username or email"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
        <Button className="mb-5" onClick={() => clickFetch()} variant="primary" type="submit" to="/">
          Log in
        </Button>
        {fetchUserName.username && (
          <Alert key="success" variant="success">
            Welcome to the best social media of the pastek planet, {fetchUserName.username} !
          </Alert>
        )}
        {fetchError && (
          <Alert key="danger" variant="danger">
            {fetchError}
          </Alert>
        )}
      </div>
    </>
  );
};
export default LogInUserForm;
