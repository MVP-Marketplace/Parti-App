import { Col, Row, Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsEnvelope } from "react-icons/bs";
import "./index.css";

const envelopeStyle = {
  width: "496px",
  height: "376px",
  display: "flex",
  justifyContent: "center",
};

function About() {
  return (
    <Jumbotron>
      <Col>
        <Row>
          <Col>
            <BsEnvelope style={envelopeStyle} />
          </Col>
          <Col>
            <br />
            <div>
              <h3>What is Parti App?</h3>
            </div>
            <br />
            <div>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra placerat purus, a efficitur nibh rutrum vel. Suspendisse
                tincidunt velit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras viverra placerat purus, a efficitur nibh
                rutrum vel. Suspendisse tincidunt velit
              </h6>
            </div>
            <br />
            <br />
            <div className="button">
              <Button variant="outline-secondary">Let's Get Started!</Button>{" "}
            </div>
          </Col>
        </Row>
      </Col>
    </Jumbotron>
  );
}

export default About;
