import React from "react";

import Container from "react-bootstrap/Container";
import PostsUserForm from "../components/PostsUserForm";
import { useSelector } from "react-redux";
import PostsList from "../components/PostsList";

const Home = () => {
  const user = useSelector((state) => state.userCreate.user.username);

  return (
    <Container Classname="mt-3">
      {user ? (
        <PostsUserForm />
      ) : (
        <>
        <h1>BEST PASTEK SOCIALE MEDIA EVER CREATED ON EARTH </h1>
        <p>Sucribe to start sharring you marvelouse life with the most influant pastek "in da world".</p>
        </>
      )}

      <PostsList/>
    </Container>
  );
};
export default Home;
