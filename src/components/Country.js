import React from "react";
import Card from "react-bootstrap/Card";

const Country = ({ name, region, flag }) => {
  return (
    <div className="country-container d-inline-block">
      <Card className="country">
        <Card.Img className="card-img" variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{region}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;
