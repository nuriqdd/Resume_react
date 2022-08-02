import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="info"
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Card style={{ width: "18rem", backgroundColor: "pink" }}>
        <Card.Img
          variant="top"
          src="https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"
        />
        <Card.Body>
          <Card.Title>info</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>name: Nurlan</ListGroup.Item>
          <ListGroup.Item>number: +996555988555</ListGroup.Item>
          <ListGroup.Item>email: nuriqgh@gmail.com</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">send message</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contacts;
