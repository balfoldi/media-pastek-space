import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import  ProfilShowCardDisplay from "./ProfilShowCardDisplay"
import  ProfilShowCardForm from "./ProfilShowCardForm"


const ProfilShowCard = () => {
  const user = useSelector((state) => state.userCreate.user);
  const [editing, setEditing] = useState(false);
  return (
    <>
      <Card>
        {editing ? <ProfilShowCardForm edit={setEditing}/> : <ProfilShowCardDisplay edit={setEditing}/> }
      </Card>
    </>
  );
};
export default ProfilShowCard;
