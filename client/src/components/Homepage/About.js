import { Card, Row, Col, Image } from "react-bootstrap";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import Photo4 from "../../stockPhotos/c-landingpage-photo.png";
// import BackgroundPhoto from "../../images/Group 25 10.svg"
// import "./index.css";



function About() {
  return (
    <div className="About-BackgroundPhoto">
    <Row className="justify-content-md-center m-5">
      <Col className="justify-content-md-center m-3">
        <Card className="text-center" border="0" style={{ width: '25rem' }}>
          <Image src={Photo4} />
        </Card>
      </Col>
      <Col className="justify-content-md m-3">
        <Card border="0" style={{ width: '25rem' }}>
          <Card.Title style={{fontSize: 48}}>What is Parti Greetings?</Card.Title>
          <Card.Body>
            <Card.Subtitle>
              Parti provides a new way to digitally celebrate events.
              Remove the need for video editing and time lost to long video
              montages, and take back the enjoyment of the celebration by
              viewing message and videos from friends, family, and colleagues.
              You can also revisit your events anytime you want and easily
              find the messages you'd like to see.
            </Card.Subtitle>
            <SmallGreenButton className="m-3">
              Get Started
            </SmallGreenButton>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
}

export default About;
