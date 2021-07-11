import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PurpleBackground from "../../images/purple-background.png";

const footerStyle = {
  borderRadius: "5px",
  margin: "top:0px",
};

const cardStyle = {
  backgroundColor: "#D7B0FF",
  border: "none",
};

const FooterPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${PurpleBackground})`,
        footerStyle,
      }}
    >
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
              <h4>hello@particards.com</h4>
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
    </div>
  );
};

export default FooterPage;
