import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
// import "";

const Header = () => {
  return (
    <div>
      <>
        <Navbar classname="navinfo" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Resume</Navbar.Brand>
            <Nav
              className="me-auto"
              style={{
                width: "700px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <NavLink to="/school">Study</NavLink>
              <NavLink to="/hobby">hobby</NavLink>
              <NavLink to="/skills">skills</NavLink>
              <NavLink to="/contacts">contacts</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
