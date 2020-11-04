import React from "react";

import Container from "react-bootstrap/Container";
import PostsUserForm from "../components/PostsUserForm";
import { useSelector } from "react-redux";


const Home = () => {
  const user = useSelector((state) => state.userCreate.user.username);

  return (
    <Container>
      <h1>BEST PASTEK SOCIALE MEDIA EVER CREATED ON EARTH </h1>
      {user && <PostsUserForm />}
    </Container>
  );
};
export default Home;
