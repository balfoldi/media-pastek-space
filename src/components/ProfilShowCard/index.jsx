import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";

const ProfilShowCard = () => {
  const user = useSelector((state) => state.userCreate.user);

  const element = <FontAwesomeIcon icon={faCoffee} />;

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>My profile</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card>
            <Card.Body>
              <strong>Username : -</strong> {user.username}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <strong>Email : -</strong> {user.email}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <strong>Description : -</strong>{" "}
              {user.description ? user.description : "empty"}
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProfilShowCard;
