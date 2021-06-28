import { Container, Col } from "react-bootstrap";
import "./index.css";

function Header() {
  return (
    <Container>
      <Col>
        <div>
          <h3>Thank Your Contributors</h3>
        </div>
      </Col>
      <br />
      <Col>
        <div>
          <h6>
            Let your contributors know how much you appreciate their
            contributions
          </h6>
          <br />
        </div>
      </Col>
    </Container>
  );
}

export default Header;
