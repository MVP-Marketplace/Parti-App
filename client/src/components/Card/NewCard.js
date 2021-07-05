import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col, Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import TimezoneSelect from 'react-timezone-select'
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import './card.css'


import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateNewCard(props) {
    
    const [show , setState] = useState(true); // handles state for modal 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [occasion, setOccasion] = useState('');
    const [calendarDate, setcalendarDate] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState('')
    const [dueDate, setDueDate] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const fistModalHandleClose = ()=> {
      setState( false );
  };
  
    const handleSelect=(evtKey, event)=>{
      console.log(evtKey, event.target.innerText);
      setOccasion(event.target.innerText)
    }
    const handlecalendarDateChange = (date) => {
      setcalendarDate(date)
    }
  
    const onFormSubmit = (e) => {
      e.preventDefault();
      console.log(calendarDate)
    }

    const handleSubmit = async (e) =>{
    // stop form reloading aka browser default behavior
    e.preventDefault();
    const convertedDate = setOtherZone(calendarDate, selectedTimezone)
    setDueDate(convertedDate)
    const userId = JSON.parse(localStorage.getItem('user'))
    console.log(userId)
    axios.post('/card', {
            userId: userId,
            recipientEmail: email,
            recipientFirstName: firstName,
            recipientLastName: lastName,
            dueTime: [{hours:hours, minutes:minutes}],
            dueDate: convertedDate,
            // dueTimeZone: selectedTimezone,
            occasion: occasion,
            title: title
            })
        .then((response)=>{
          console.log("LINE 57", response.data)
          console.log("LINE 58", response.data.createdCard._id)
          localStorage.setItem('cardId', JSON.stringify(response.data.createdCard._id));
          props.history.push('/create-card-success',{ dueDate :convertedDate , occasion: occasion, title: title, cardId: response.data.createdCard._id} )
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
      setState(false )
      setModalState("modal-one")
     }
     
     const handleShowModalTwo = () => {
      setModalState("modal-two")
     }
     
     const handleClose = () => {
      setModalState("close")
     }

     const moment = require('moment-timezone')
   
     // converts date to selected time zone 
    const setOtherZone = (calendarDate, selectedTimezone) => {
      const dateWithoutZone = moment(calendarDate).format("YYYY-MM-DD HH:mm ")
      const dateWithOtherZone = [dateWithoutZone, selectedTimezone.value].join(" ")
      console.log('line 104','dateWithLocalZone:',  dateWithOtherZone)
      return dateWithOtherZone
    }

     return (
      <div>
         <Modal 
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         className='my-modal'
         show={show} 
         onHide={fistModalHandleClose}
         dialogClassName="modal-80w"
         fullscreen='xl-down'
         className="my-modal">
                    <Modal.Title
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "34px"}
                    }> New Parti Card</Modal.Title>
                    <hr></hr>
                    <Modal.Body>
                    <h4>Who is this Parti card for?</h4>
                    <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col sm="5">
              <Form.Control 
              type="text"
              placeholder="First Name" 
              onChange={event => setFirstName(event.target.value)}
              style={{
                    width: '150%',
                    height:'calc(2.5em + .75rem + 2px)'}}
              />
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
              onChange={event => setLastName(event.target.value)}
              style={{
                    width: '150%',
                    height:'calc(2.5em + .75rem + 2px)'}}
              />
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
              style={{
                    width: '150%',
                    height:'calc(2.5em + .75rem + 2px)'}}
              />
            </Col>
            </Form.Group>
          </Form>
          <div className='next-button'> <SmallGreenButton 
            onClick={handleShowModalOne} 
            >Next </SmallGreenButton></div>
          
          </Modal.Body>
          </Modal>


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
            {['Anniversary', 'Birthday', 'Graduation', 'Promotion', 'Wedding'].map((variant) => (
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

       <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <DatePicker
              name="startDate"
              dateFormat="MM/dd/yyyy"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              selected={calendarDate}
              onChange={handlecalendarDateChange}
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

            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}/>
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
