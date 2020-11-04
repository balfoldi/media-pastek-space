import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const PostsList = () => {
  return (
    <>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </>
  );
};

export default PostsList;
