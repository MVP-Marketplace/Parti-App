import { Card, Button } from "react-bootstrap";

function Welcome() {
    return (
        <Card>
        <Card.Body>
          <Card.Title as="h5">Welcome to Parti Greetings</Card.Title>
          <Card.Subtitle>Success!</Card.Subtitle>
          <Card.Text>
            Your Account has been created!
          </Card.Text>
          <Button href="/create-card" variant="primary"> Create Card</Button>
          <Card.Link href="#">Take me to Dashboard </Card.Link>
        </Card.Body>
      </Card>

    );
  }
  
  export default Welcome;
  


