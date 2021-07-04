import {
  Container,
  CardGroup,
  Row,
  Card
} from "react-bootstrap";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";


import Photo1 from "../../images/Group 318.svg";
import Photo2 from "../../images/Group 412.svg";
import Photo3 from "../../images/Group 413.svg";
import Photo4 from "../../images/Group 323.svg";

// import "./index.css";

function StepByStep() {
  return (
    <Container>
      <Row className="justify-content-lg-center m-5">
        <Card className="m-5" border="0" >
          <Card.Title style={{ fontSize: 36 }}>Here's how it works with step by step process</Card.Title>
        </Card>
      </Row>
      <Row className="justify-content-lg-center m-5">
        <CardGroup>
          <Card className="m-3" border="0" >
            <Card.Img variant="top" src={Photo1} style={{ width: "12rem", minHeight: "12rem" }} />
            <Card.Body>
              <Card.Title>
                Create
              </Card.Title>
              <Card.Subtitle>
                Want to celebrate a special someone? Create a digitial, customizable Parti card!
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="m-3" border="0" >
            <Card.Img variant="top" src={Photo2} style={{ width: "12rem", minHeight: "12rem" }} />
            <Card.Body>
              <Card.Title>
                Collaborate
              </Card.Title>
              <Card.Subtitle>
                Invite unlimited collaborators. They can use any smart device or camera to record up to a 3 min video or upload pictures.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="m-3" border="0" >
            <Card.Img variant="top" src={Photo3} style={{ width: "12rem", minHeight: "12rem" }} />
            <Card.Body>
              <Card.Title>
                Edit
              </Card.Title>
              <Card.Subtitle>
                Organize the order of videos, pictures, choose a background theme and don't forget to upload your own!
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="m-3" border="0" >
            <Card.Img variant="top" src={Photo4} style={{ width: "12rem", minHeight: "12rem" }} />
            <Card.Body>
              <Card.Title>
                Send
              </Card.Title>
              <Card.Subtitle>
                The recipient enjoys the string of videos from all the contributors. They can filter through individual posts or view them all!
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row className="justify-content-lg-center m-5">
        <SmallGreenButton className="m-3">
          Get Started
        </SmallGreenButton>
      </Row>
    </Container>
  );
}

export default StepByStep;
