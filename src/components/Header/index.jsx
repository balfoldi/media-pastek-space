import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

const Header = () => {
  const User = useSelector((state) => state.userCreate.user.username);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <NavLink className="navbar-brand" to="/">
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
