import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Col, Dropdown, DropdownButton } from "react-bootstrap";

export default function TitlePage() {
  return (
    <>
      <Col xs={12} sm={6} md={8} lg={8} xl={8} xxl={8}>
        <div className="d-flex align-items-center">
          <h1 className="text-white me-3">TV Shows</h1>
          <DropdownButton
            id="dropdown-item-button"
            className="bg-dark"
            variant="btn btn-dark bg-dark btn-outline-secondary text-white rounded-0"
            title="Genres"
          >
            <Dropdown.Item as="button" className="bg-dark text-white">Soap</Dropdown.Item>
            <Dropdown.Item as="button" className="bg-dark text-white">Action</Dropdown.Item>
            <Dropdown.Item as="button" className="bg-dark text-white">Fantasy</Dropdown.Item>
          </DropdownButton>
        </div>
      </Col>
      <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4} className="text-start text-sm-end">
        <button className="btn btn-outline-secondary rounded-0 text-light">
        <MDBIcon fas icon="align-left" className="text-white"/>
        </button>
        <button className="btn btn-outline-secondary rounded-0 text-light">
        <MDBIcon fas icon="th-large" className="text-white"/>
        </button>
      </Col>
    </>
  );
}
