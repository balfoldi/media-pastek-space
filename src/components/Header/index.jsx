import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";
import Cookies from "js-cookie";
import { userLogout } from "../../redux/user/userActions";
import "./_styles.scss";
import Animations from "./Animations.js";

const Header = () => {
  const User = useSelector((state) => state.userCreate.user.username);
  const dispatch = useDispatch();

  const loggingOut = () => {
    Cookies.set();
    dispatch(userLogout());
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <NavLink className="navbar-brand" to="/">
          <h2 class="ml16"> The W🍉termelon Network </h2>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!User && (
              <>
                <NavLink className="nav-link" to="/register">
                  Sign Up
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
            {User && (
              <>
                <NavLink className="nav-link" to="/users/me">
                  My profile
                </NavLink>
                <NavLink onClick={loggingOut} className="nav-link" to="/">
                  Log out
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {User && <Alert variant="light">Logged in as {User}</Alert>}
    </>
  );
};
export default Header;
