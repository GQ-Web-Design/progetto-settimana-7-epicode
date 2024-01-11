import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} className="img-fluid" id="logo" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MDBIcon fas icon="bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Show</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-none text-light">
              <MDBIcon fas icon="search" className="text-white"/>
            </button>
            <button className="btn btn-outline-none text-light">
              <span className="text-white">KIDS</span>
            </button>
            <button className="btn btn-outline-none text-light">
            <MDBIcon fas icon="bell" className="text-white" />
            </button>
            <DropdownButton
              align="end"
              id="dropdown-item-button"
              className="dropdown-menu-end"
              variant="btn btn-outline-none text-light"
              title={<img
                src={Avatar}
                className="img-fluid"
                width="30px"
                alt={Avatar}
              />}
              >
              <Dropdown.Item as="button">
                <a className="text-secondary dropdown-menu-end " href="#">
                  Setting
                </a>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <a className="text-secondary dropdown-menu-end" href="#">
                  Another action
                </a>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <a className="text-secondary dropdown-menu-end" href="#">
                  Something else here
                </a>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
