import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    // const handleSubmit = async (e) =>{
    // // stop form reloading aka browser default behavior
    // e.preventDefault();
    // axios.post('/card', {username: username, password: password})
    //     .then((response)=>{
    //       setUser(response.data)
    //       console.log(response.data)
    //       localStorage.setItem('user', JSON.stringify(response.data));
    //       props.history.push('/welcome')
    //   })
    //     .catch(error => {
    //         setUser({ errorMessage: error.message });
    //         console.error('There was an error!', error);
    //     });
      
    //   console.log('line 33' , localStorage.user)
    //   }

    // "modal-one" | "modal-two" | "close" >("close")
    const [modalState, setModalState] = useState("close")

    const handleShowModalOne = () => {
      setModalState("modal-one")
     }
     
     const handleShowModalTwo = () => {
      setModalState("modal-two")
     }
     
     const handleClose = () => {
      setModalState("close")
     }

     // Calendar 
     const  daySelected = function(m) {
      // m is a moment object
      alert(m.toString());
    };
     return (
      <div>

        {/*           */} 
        <Card>
         <Card.Body>

           <Card.Title as="h5"> New Parti Card </Card.Title>
           <Card.Subtitle> Who is this Parti Card for? </Card.Subtitle>
           <Card.Text>
             <div>
             {/* <Form onSubmit={handleSubmit}>           */}
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" placeholder="First Name" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" placeholder="Last Name" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" placeholder="Email" />
            </Col>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
       </div>
           </Card.Text>
           <Button onClick={handleShowModalOne}>Next</Button>
         </Card.Body>
       </Card>
     


        <Modal show={modalState === "modal-one"}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered>
          <Modal.Body>

          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              What is the occasion? 
            </Form.Label>
            <Col sm="5">
            <DropdownButton id="" title="Birthday">
              <Dropdown.Item as="button">Anniversary</Dropdown.Item>
              <Dropdown.Item as="button">Baby</Dropdown.Item>
              <Dropdown.Item as="button">Birthday</Dropdown.Item>
              <Dropdown.Item as="button">Graduation</Dropdown.Item>
              <Dropdown.Item as="button">Promotion</Dropdown.Item>
              <Dropdown.Item as="button">Wedding</Dropdown.Item>
            </DropdownButton>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Name Your Card 
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" placeholder="" />
            </Col>
            </Form.Group>
          </Form>
          
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShowModalTwo}>Next</Button>
          </Modal.Footer>
        </Modal>
     
        <Modal show={modalState === "modal-two"}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered>
          <Modal.Body>When should we deliver the card?
          
       
          {/* <form onSubmit={ this.onFormSubmit }> */}
          <form >
        <div className="form-group">
          <DatePicker
              // selected={ this.state.startDate }
              // onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />
          <button className="btn btn-primary">Show Date</button>
        </div>
        </form>

        // TODO 
        // add hour : min 
          
          <DropdownButton id="" title="Eastern Standart Time">
              <Dropdown.Item as="button">Eastern Standart Time</Dropdown.Item>
              <Dropdown.Item as="button">Central Standart Time</Dropdown.Item>
              <Dropdown.Item as="button">Mountain Standart Time</Dropdown.Item>
              <Dropdown.Item as="button">Pacific Standart Time</Dropdown.Item>
            </DropdownButton>
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     )
  }
  
  export default CreateNewCard;
