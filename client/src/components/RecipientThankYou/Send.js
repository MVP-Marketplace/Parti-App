import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./index.css";

function Send() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <div className="button">
              <Button variant="outline-secondary">Send to All</Button>{" "}
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div
              className="button"
              style={{
                width: "80%",
                textAlign: "left",
              }}
            >
              <Button variant="outline-secondary">Choose Who to Send</Button>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Send;
