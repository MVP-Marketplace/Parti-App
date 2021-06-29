import { Card, Button } from "react-bootstrap";

function NewCardSuccess(props) {
    return (
        <Card>
        <Card.Body>
          <Card.Title as="h5">New Card Successfully Created!</Card.Title>
          <Card.Subtitle>
           "{props.location.state.title} "</Card.Subtitle>
          <Card.Text>
            Scheduled:{props.location.state.dueDate}
          </Card.Text>
          <Button href="/create-card" variant="primary"> Invite Contributors</Button>
          <Card.Link href="#"> Start Designing  </Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
  export default NewCardSuccess;
  


