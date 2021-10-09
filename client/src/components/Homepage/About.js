import { Container, Card, Row, Col } from "react-bootstrap";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import Photo4 from "../../stockPhotos/c-landingpage-photo.png";
import History from "../History/History";
import PurpleGreenBackground from "../../images/purple-green-background.png";

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${PurpleGreenBackground})`,
        backgroundSize: "120% 100%",
        paddingTop: "120px",
        paddingBottom: "20px",
        minHeight: "45vh",
      }}
    >
      <Container>
        <Row className="justify-content-md-center m-3">
          <Col className="justify-content-md-center m-3">
            <Card
              className="text-center"
              border="0"
              style={{
                width: "25rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Card.Img src={Photo4} />
            </Card>
          </Col>
          <Col className="justify-content-md m-3">
            <Card
              border="0"
              style={{
                width: "25rem",
                backgroundColor: "transparent",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Card.Body>
                <Card.Img
                  src={Photo4}
                  style={{
                    width: "100%",
                    minHeight: "20rem",
                    maxHeight: "22rem",
                    objectFit: "cover",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: 0, backgroundColor: "transparent" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "46px", fontWeight: 700 }}>
                  What is Parti Greetings?
                </Card.Title>
                <Card.Subtitle
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 400,
                    lineHeight: "1.3rem",
                  }}
                >
                  Parti provides a new way to digitally celebrate events. Remove
                  the need for video editing and time lost to long video
                  montages, and take back the enjoyment of the celebration by
                  viewing message and videos from friends, family, and
                  colleagues. You can also revisit your events anytime you want
                  and easily find the messages you'd like to see.
                </Card.Subtitle>

                <form className="d-flex justify-content-center justify-content-md-start">
                  <SmallGreenButton
                    onClick={() => History.push("/register")}
                    className="mt-3 mb-4 "
                  >
                    Get Started
                  </SmallGreenButton>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
