import { Container, Col, Row, Media } from "react-bootstrap";
import "./index.css";

const mediaStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "817px",
  height: "454px",
};

function HowTo() {
  return (
    <Container>
      <Col>
        <div>
          <br />
          <br />
          <h3>Here's how it works with step by step process</h3>
          <br />
          <br />
        </div>
      </Col>
      <Col>
        <div>
          <Media style={mediaStyle}>
            <img
              // className="mr-3"
              src="https://via.placeholder.com/817x414.png?text=Video+placeholder."
              alt="Generic placeholder"
            />
          </Media>
        </div>
      </Col>
    </Container>
  );
}

export default HowTo;
