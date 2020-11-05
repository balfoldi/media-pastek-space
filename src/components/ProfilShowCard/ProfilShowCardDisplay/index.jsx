import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const ProfilShowCardDisplay = (props) => {
  const user = useSelector((state) => state.userCreate.user);
  const [editing, setEditing] = useState(false);
  return (
    <>
        <Card.Body>
          <Card>
            <Card.Body>
              <strong>Username : </strong> {user.username}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <strong>Email : </strong> {user.email}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <strong>Description : </strong>{" "}
              {user.description ? user.description : "empty"}
            </Card.Body>
          </Card>
          <Button className="w-100" onClick={() => props.edit(true)}><FontAwesomeIcon icon={faUserEdit} /></Button>
        </Card.Body>

    </>
  );
};
export default ProfilShowCardDisplay;
