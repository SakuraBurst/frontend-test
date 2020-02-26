import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <Jumbotron
      style={{
        width: "432px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h3>Welcome!</h3>
      <p>
        <Button as={Link} to="/login" variant="primary">
          Let's Rock
        </Button>
      </p>
    </Jumbotron>
  );
}
