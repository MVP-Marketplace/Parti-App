import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const footerStyle = {
  backgroundColor: "#D7B0FF",
  borderRadius: "5px",
};

const cardStyle = {
  backgroundColor: "#D7B0FF",
  border: "none",
};

const FooterPage = () => {
  return (
    <Container style={footerStyle}>
      <Row>
        <Col sm>
          <Card style={cardStyle}>
            <Card.Body>
              <h4>Stay Connected </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col sm />
        <Col sm>
          <Card style={cardStyle}>
            <Card.Body>
              <h4>hello@partiapp.com</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <Card style={cardStyle}>
            <Card.Body>
              <h8>© 2021 Parti Greetings</h8>
            </Card.Body>
          </Card>
        </Col>
        <Col sm />
        <Col sm>
          <Card style={cardStyle}>
            <Card.Body>
              <h8>Terms of Service</h8> &nbsp;&nbsp;&nbsp;&nbsp;
              <h8>Privacy Policy</h8>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPage;
