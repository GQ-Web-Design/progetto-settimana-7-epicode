import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

export default function MyFooter() {
  return (
    <Container className="bg-dark">
      <Row className="my-3">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <a href="#" title="facebook">
            <MDBIcon fab icon="facebook" className="text-secondary mx-2 h3" />
          </a>
          <a href="#" title="instagram">
          <MDBIcon fab icon="instagram" className="text-secondary mx-2 h3"/>
          </a>
          <a href="#" title="twitter">
          <MDBIcon fab icon="twitter" className="text-secondary mx-2 h3"/>
          </a>
          <a href="#" title="youtube">
          <MDBIcon fab icon="youtube" className="text-secondary mx-2 h3" />
          </a>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Audio and Subtitle</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Media Center</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Privacy</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Contact Us</a></p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Audio Description</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Investor Relations</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Legal Notices</a></p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Help Center</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Jobs</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Cookie Preferences</a></p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Gift Cards</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Terms of Use</a></p>
            <p><a href="#" className="text-decoration-none text-secondary" title="#">Corporate Informations</a></p>
        </Col>
        
      </Row>
      <Row className="my-3">
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <button className="btn btn-outline-light rounded-0 mb-3">Service Code</button>
        </Col>
      </Row>
      <Row className="my-3 text-secondary">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <p><MDBIcon far icon="copyright" /> 1997 - 2019 Netflix, Inc.</p>
        </Col>
      </Row>
    </Container>
  );
}
