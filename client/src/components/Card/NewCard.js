import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col, Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateNewCard(props) {


    // const [user, setUser] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occasion, setOccasion] = useState('');
    const [dueDate, setdueDate] = useState('');
    // dueTime
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [timeZone, setTimeZone] = useState('');
    
    const [title, setTitle] = useState('');

 
    const handleSelect=(evtKey, event)=>{
      console.log(evtKey, event.target.innerText);
      setOccasion(event.target.innerText)
    }
    const handleTimeZoneSelect=(evtKey, event)=>{
      console.log(evtKey, event.target.innerText);
      setTimeZone(event.target.innerText)
    }

    const handleDueDateChange = (date) => {
      setdueDate(date)
    }
  
    const onFormSubmit = (e) => {
      e.preventDefault();
      console.log(dueDate)
    }
    const handleSubmit = async (e) =>{
    // stop form reloading aka browser default behavior
    e.preventDefault();
    // const userID =   localStorage.getItem('user')
    const userId = JSON.parse(localStorage.getItem('user'))
    console.log(userId)
    axios.post('/card', {
            userId: userId,
            recipientEmail: email,
            recipientFirstName: firstName,
            recipientLastName: lastName,
            dueTime: [{hours:hours, minutes:minutes}],
            dueDate: dueDate,
            dueTimeZone: timeZone,
            occasion: occasion,
            title: title
            })
        .then((response)=>{
          console.log(response.data)
          props.history.push('/welcome')
      })
        .catch(error => {
            console.error('There was an error!', error);
        });
      setModalState("close")
      console.log('line 33' , localStorage.user)
      }

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

     return (
      <div>
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
              <Form.Control 
              type="text"
              placeholder="First Name" 
              onChange={event => setFirstName(event.target.value)}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="5">
              <Form.Control 
              type="text"
              placeholder="Last Name" 
              onChange={event => setLastName(event.target.value)}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="5">
              <Form.Control 
              type="text" 
              placeholder="Email" 
              onChange={event => setEmail(event.target.value)}
              />
            </Col>
            </Form.Group>
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

            <DropdownButton id="dropdown-menu-align-right" title="Birthday" onSelect={handleSelect}>  
            {['Anniversary', 'Baby', 'Birthday', 'Graduation', 'Promotion', 'Wedding'].map((variant) => (
            <Dropdown.Item
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
                value = {variant}
              >{variant}
              </Dropdown.Item>
            ),
          )}
          </DropdownButton>


            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Name Your Card 
            </Form.Label>
            <Col sm="5">
              <Form.Control
              type="text" 
              placeholder="Title"
              onChange={event => setTitle(event.target.value)}
              />
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
          
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Choose Delivery
            </Form.Label>

       <form onSubmit={onFormSubmit }>
        <div className="form-group">
          <DatePicker
              name="startDate"
              dateFormat="MM/dd/yyyy"
              selected={ dueDate }
              onChange={handleDueDateChange }
          />
        </div>
        </form>
            <Col sm="5">
            </Col>
            </Form.Group>
            

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Delivery Time
            </Form.Label>
            <Col sm="5">
            <Form.Control 
              type="text" 
              placeholder="Hour"
              onChange={event => setHours(event.target.value)}
              />
            <Form.Control 
              type="text" 
              placeholder="Minutes"
              onChange={event => setMinutes(event.target.value)} />
            </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Select Time Zone
            </Form.Label>
            <Col sm="5"> 

            <DropdownButton id="dropdown-menu-align-right" title="Eastern Standart Time" onSelect={handleTimeZoneSelect}>  
            {['Eastern Standart Time', 'Central Standart Time', 'Mountain Standart Time', 'Pacific Standart Time'].map((variant) => (
            <Dropdown.Item
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
                value = {variant}
              >{variant}
              </Dropdown.Item>
            ),
          )}
          </DropdownButton>
            </Col>
            </Form.Group>

         
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Schedule Later</Button> 
            <Button onClick={handleSubmit}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     )
  }
  
  export default CreateNewCard;
