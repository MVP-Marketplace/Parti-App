import { Card, Button } from "react-bootstrap";

function NewCardSuccess(props) {

  const occasion = props.location.state.occasion


  const handleSubmit = async (e) =>{
    props.history.push('/create-card-select-theme',{  occasion: occasion} )
      }
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
          <Button 
           onClick={handleSubmit}
           variant="primary"> 
           Start Designing 
           </Button>
         
        </Card.Body>
      </Card>
    );
  }
  
  export default NewCardSuccess;
  


