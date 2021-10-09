import { Card, Row, Container } from "react-bootstrap";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import GreenBackground from "../../images/green-background.png";
import PartiCard1 from "../../images/particard1.png";
import PartiCard2 from "../../images/particard2.png";
import History from "../History/History";

function Showcase() {
  return (
    <div
      style={{
        backgroundImage: `url(${GreenBackground})`,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-center mx-auto">
          <Card
            className="m-5"
            border="0"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Title style={{ fontSize: "24px", fontWeight: 700 }}>
              Check out some of our favorite Parti Cards!
            </Card.Title>
          </Card>
        </Row>

        <Row className="justify-content-center">
          <Card
            border="0"
            style={{ backgroundColor: "transparent", minWidth: "32rem" }}
          >
            <Card.Img
              variant="top"
              src={PartiCard1}
              style={{ width: "100%", minHeight: "32rem" }}
            />
          </Card>

          <Card
            border="0"
            style={{ backgroundColor: "transparent", minWidth: "15rem" }}
          >
            <Card.Img
              variant="top"
              src={PartiCard2}
              style={{ width: "100%", minHeight: "32rem" }}
            />
          </Card>
        </Row>

        <Row className="justify-content-center m-5">
          <Card
            // className="m-5"
            border="0"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Title style={{ fontSize: "24px", fontWeight: 700 }}>
              Let's start making memories!
            </Card.Title>
          </Card>
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
    </div>
  );
}

export default Showcase;
