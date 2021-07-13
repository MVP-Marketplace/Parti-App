import { Card, Row } from "react-bootstrap";
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row className="justify-content-lg-center m-5">
        <Card
          className="m-5"
          border="0"
          style={{ backgroundColor: "transparent" }}
        >
          <Card.Title style={{ fontSize: 36 }}>
            Check out some of our favorite Parti Cards!
          </Card.Title>
        </Card>
      </Row>

      <Row className="justify-content-lg-center">
        <Card border="0" style={{ backgroundColor: "transparent" }}>
          <Card.Img
            variant="top"
            src={PartiCard1}
            style={{ width: "32rem", minHeight: "32rem" }}
          />
        </Card>

        <Card border="0" style={{ backgroundColor: "transparent" }}>
          <Card.Img
            variant="top"
            src={PartiCard2}
            style={{ width: "32rem", minHeight: "32rem" }}
          />
        </Card>
      </Row>

      <Row className="justify-content-lg-center m-5">
        <Card
          className="m-5"
          border="0"
          style={{ backgroundColor: "transparent" }}
        >
          <Card.Title style={{ fontSize: 36 }}>
            Let's start making memories!
          </Card.Title>
        </Card>
      </Row>
      <Row className="justify-content-lg-center m-5">
        <form>
          <SmallGreenButton
            onClick={() => History.push("/register")}
            className="m-3"
          >
            Get Started
          </SmallGreenButton>
        </form>
      </Row>
    </div>
  );
}

export default Showcase;
