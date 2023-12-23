import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faUser,
  faGear,
  faCartShopping,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <Link to={"/"}>
            <h2>
              <FontAwesomeIcon icon={faCartShopping} /> TShop
            </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-2 me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav href="" className="me-3">
              <Link to={"/"}>
                <FontAwesomeIcon icon={faHouse} className="me-1" />
                Home
              </Link>
            </Nav>
            <Nav href="" className="me-3">
              <Link to={"/orders"}>
                <FontAwesomeIcon icon={faClipboard} className="me-1" />
                My Orders
              </Link>
            </Nav>
            <Nav href="" className="me-3">
              <Link to={"/Profile"}>
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Profile
              </Link>
            </Nav>
            <Nav href="" className="me-3">
              <Link to={"/Settings"}>
                <FontAwesomeIcon icon={faGear} className="me-1" />
                Settings
              </Link>
            </Nav>
          </Nav>
          <Form className="d-flex">
            <Button className="signhbtn cursor-pointer text-white d-none">
              <Link to={"/SignUp"}>Sign Up</Link>
            </Button>
            <Link to={"/Contact"}>
              <Button className="signhbtn cursor-pointer text-white ">
                Contact Us
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
