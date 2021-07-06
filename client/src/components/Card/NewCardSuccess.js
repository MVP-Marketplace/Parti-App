import { Card, Button } from "react-bootstrap";
import './card.css'
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';

function NewCardSuccess(props) {
  
  const occasion = props.location.state.occasion
  const cardId = props.location.state.cardId


  const handleSubmit = async (e) =>{
    props.history.push('/create-card-select-theme',{  occasion: occasion, cardId:cardId} )
      }
    return (
        <Card>
          <Card.Header> New Parti Card </Card.Header>
          <hr></hr>
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

      </Card>
    );
  }
  
  export default NewCardSuccess;
  


