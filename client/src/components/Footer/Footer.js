import React from "react";
import { Row, Col, Card, Link } from "react-bootstrap";
import PurpleBackground from "../../images/purple-background.png";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
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
              <a href="https://www.facebook.com/" className="facebook">
                <FiFacebook icon={FiFacebook} />
              </a>
              <a href="https://www.instagram.com/" className="instagram">
                <FiInstagram icon={FiInstagram} />
              </a>
              <a href="https://www.twitter.com/" className="twitter">
                <FiTwitter icon={FiTwitter} />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm />
        <Col sm>
          <Card style={cardStyle}>
            <Card.Body>
              <Link>hello@particards.com</Link>
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
