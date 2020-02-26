import React from "react";
import { Container, Navbar, Row, Col, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Info from "../containers/Info";
import logoSrc from "./logo.png";
import "./Template.css";
import { useSelector } from "react-redux";
import { get } from "lodash";

export default function Template({ children }) {
  const data = useSelector(state => get(state, "auth.data.id"));
  return (
    <Container>
      <header className="header">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=".dt_soft"
              src={logoSrc}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/todo" exact>
                To-do
              </Nav.Link>
              <Nav.Link as={NavLink} to="/albums" exact>
                albums
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        {data ? (
          <Row>
            <Col md={4}>
              <Info />
            </Col>
            <Col md={8}>{children}</Col>
          </Row>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {children}
          </div>
        )}
      </main>
    </Container>
  );
}
