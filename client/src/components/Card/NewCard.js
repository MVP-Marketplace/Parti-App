import { Card, Button, Form } from 'react-bootstrap';


function CreateNewCard() {
    // 1 'who is this part card for' 
    // First Name 
    // Last Name 
    // email
    
    // 2 
    // Occasion : Dropdown 
    // Card title

    // 3 when should we deliver the card ? 
    // delivery date (calendar)
    // Delivery Time hh;mm  
    // Select time zone: Dropdown 

    // 4 
    // Schedule later 
    // Crete card 

    return (
        <Card>
        <Card.Body>
          <Card.Title as="h5"></Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text>
            
          </Card.Text>
          <Button href="" variant="primary"> </Button>
          <Card.Link href="#"> </Card.Link>
        </Card.Body>
      </Card>

    );
  }
  
  export default CreateNewCard;
