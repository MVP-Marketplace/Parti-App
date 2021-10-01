import { Container, Row, Card, Col } from "react-bootstrap";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import History from "../History/History";

import Photo1 from "../../images/Group 318.svg";
import Photo2 from "../../images/Group 412.svg";
import Photo3 from "../../images/Group 413.svg";
import Photo4 from "../../images/Group 323.svg";

function StepByStep() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Card
          className="m-5"
          border="0"
          style={{ backgroundColor: "transparent" }}
        >
          <Card.Title style={{ fontSize: "24px", fontWeight: 700 }}>
            Here's how it works with step by step process
          </Card.Title>
        </Card>
      </Row>

      <Row
        style={{ margin: "0 auto" }}
        className="row-cols-s-2 row-cols-lg-4 justify-content-between"
      >
        <Col className="d-flex justify-content-center">
          <Card
            style={{
              minWidth: "15rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            className="m-3 px-2"
          >
            <Card.Img
              variant="top"
              src={Photo1}
              style={{ width: "100%", minHeight: "12rem" }}
            />
            <Card.Body>
              <Card.Title>Create</Card.Title>
              <Card.Subtitle style={{ maxWidth: "12rem" }}>
                Want to celebrate a special someone? Create a digitial,
                customizable Parti card!
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card
            style={{
              minWidth: "15rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            className="m-3 px-2"
          >
            <Card.Img
              variant="top"
              src={Photo2}
              style={{ width: "100%", minHeight: "12rem" }}
            />
            <Card.Body>
              <Card.Title>Collaborate</Card.Title>
              <Card.Subtitle style={{ maxWidth: "12rem" }}>
                Invite unlimited collaborators. They can use any smart device or
                camera to record up to a 3 min video or upload pictures.
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card
            style={{
              minWidth: "15rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            className="m-3 px-2"
          >
            <Card.Img
              variant="top"
              src={Photo3}
              style={{ width: "100%", minHeight: "12rem" }}
            />
            <Card.Body>
              <Card.Title>Edit</Card.Title>
              <Card.Subtitle style={{ maxWidth: "12rem" }}>
                Organize the order of videos, pictures, choose a background
                theme and don't forget to upload your own!
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card
            style={{
              minWidth: "15rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            className="m-3 px-2"
          >
            <Card.Img
              variant="top"
              src={Photo4}
              style={{ width: "100%", minHeight: "12rem" }}
            />
            <Card.Body>
              <Card.Title>Send</Card.Title>
              <Card.Subtitle style={{ maxWidth: "12rem" }}>
                The recipient enjoys the string of videos from all the
                contributors. They can filter through individual posts or view
                them all!
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center m-5">
        <form>
          <SmallGreenButton
            onClick={() => History.push("/register")}
            className="m-3"
          >
            Get Started
          </SmallGreenButton>
        </form>
      </Row>
    </Container>
  );
}

export default StepByStep;
