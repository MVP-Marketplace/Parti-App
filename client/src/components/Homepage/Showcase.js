import { Container, Card, CardColumns } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import History from "../History/History";
import "./index.css";

const containerStyle = {
  backgroundColor: "#ffffff",
};

function Showcase() {
  return (
    <Container style={{ containerStyle }}>
      <div>
        <h3>Here's what we can do at</h3>
        <h3>Parti App for all celebrations</h3>
        <br />
        <br />
      </div>
      <CardColumns>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x524.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x202.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x524.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x305.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x311.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x311.png"
          />
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <h3>Let's start making memories!</h3>
            <br />
            <form>
              <SmallGreenButton
                onClick={() => History.push("/register")}
                className="m-3"
              >
                Get Started
              </SmallGreenButton>
            </form>
          </blockquote>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x222.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x311.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x202.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x756.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x295.png"
          />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/293x547.png"
          />
        </Card>
      </CardColumns>
    </Container>
  );
}

export default Showcase;
