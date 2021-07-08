import React, { useState } from 'react';
import { Card, Button, Modal, Row, Form , Col, Image } from "react-bootstrap";
import './card.css'
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';

import SadCard from '../../images/SadCard.svg'

function NewCardSuccess(props) {
  
  const occasion = props.location.state.occasion
  const cardId = props.location.state.cardId

  const [show , setState] = useState(true); // handles state for modal 

  const handleSubmit = async (e) =>{
    // props.history.push('/create-card-select-theme',{  occasion: occasion, cardId:cardId} )
      }
  
  const fistModalHandleClose = ()=> {
        setState( false );
    };
  
    return (
      <Modal 
      show={show}
      onHide={fistModalHandleClose}
      className='my-modal'
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-80w"
      fullscreen='xl-down'>
      <Modal.Title
      style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "34px"}
      }> New Parti Card</Modal.Title>
      <hr></hr>
      <Modal.Body>
      <Image variant="top" src={SadCard}/>
      <h4>New Card Successfully Created!</h4>
      <Modal.Text> "{props.location.state.title} "</Modal.Text>
      <Modal.Text>  Scheduled : {props.location.state.dueDate} </Modal.Text>
    <div> 
        <SmallGreenButton 
      // onClick={handleShowModalOne} 
        > Invite Contributors </SmallGreenButton>

        <SmallGreenButton 
          onClick={handleSubmit}>
          Start Designing </SmallGreenButton></div>

    </Modal.Body>
    </Modal>
    );
  }
  
  export default NewCardSuccess;
  


