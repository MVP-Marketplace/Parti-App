import { Card, Row, Container } from "react-bootstrap";
import { SmallGreenButton } from "../components/StyledComponents/Buttons/SmallGreenButton";
import GreenBackground from "../images/green-background.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${GreenBackground})`,
        backgroundSize: "100% 100%",
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
            <Card.Body>
              <Card.Title style={{ fontSize: "24px", fontWeight: 700 }}>
                Error 404 Not Found
              </Card.Title>

              <Link to="/">
                <SmallGreenButton>Back to Home</SmallGreenButton>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
