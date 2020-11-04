import ProfilShowCard from '../components/ProfilShowCard';
import React from "react";
import { Container } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { useSelector } from "react-redux";


const Profile = () => {
    const User = useSelector((state) => state.userCreate.user.form);

    return (
      <Container>
        <ProfilShowCard />
        {User && (
          <Figure>
           Mon Profil {User} </Figure>
        )}
      </Container>
    );
  };
export default Profile;
