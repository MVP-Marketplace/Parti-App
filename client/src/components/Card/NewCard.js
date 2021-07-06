import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col, Dropdown, DropdownButton, Image} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import TimezoneSelect from 'react-timezone-select'
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import SadCard from '../../images/SadCard.svg'

import './card.css'


import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateNewCard(props) {
    
    const [show , setState] = useState(true); // handles state for modal 
    const [CardSuccessShow , setCardSuccessShow] = useState(false); // handles state for modal 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [occasion, setOccasion] = useState('');
    const [calendarDate, setcalendarDate] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState('')
    const [dueDate, setDueDate] = useState('');
    // const [hours, setHours] = useState('');
    // const [minutes, setMinutes] = useState('');

    const fistModalHandleClose = ()=> {
      setState( false );
  };

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
            // dueTime: [{hours:hours, minutes:minutes}],
            dueDate: convertedDate,
            // dueTimeZone: selectedTimezone,
            occasion: occasion,
            title: title
            })
        .then((response)=>{
          console.log("LINE 57", response.data)
          console.log("LINE 58", response.data.createdCard._id)
          localStorage.setItem('cardId', JSON.stringify(response.data.createdCard._id));
          
      })
        .catch(error => {
            console.error('There was an error!', error);
        });
      setModalState("close")
      setCardSuccessShow(true);
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

     const handleStartDesigning = () => {
      setModalState("close")
      props.history.push('/create-card-select-theme',{ occasion: occasion } )
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


        <Modal 
          show={modalState === "modal-one"}
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
          }> New Parti Card
          </Modal.Title>
            <hr></hr>
            
        <Modal.Body>
          <Form>
          <h4>What’s the Occasion?</h4>

          <Form.Group  as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
              Occasion
            </Form.Label>
            <Col sm="5"> 
          <Form.Control as="select" 
                        value={occasion}
                        custom 
                        className="me-sm-2" 
                        onChange={e => {
                        setOccasion(e.target.value)}}
                        style={{
                              width: '150%',
                              height:'calc(2.5em + .75rem + 2px)'}}
                        >
          {['Anniversary', 'Birthday', 'Graduation', 'Promotion', 'Wedding'].map((variant) => (
            <option
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
                value={variant}
              >{variant}
              </option>
            ),
          )}
      </Form.Control>
      </Col>
      </Form.Group>
            
            
            <h4>Name Your Card</h4>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            
           
            <Col sm="5"> 
              <Form.Control
              type="text" 
              placeholder="Title"
              onChange={event => setTitle(event.target.value)}
              style={{
                    width: '150%',
                    height:'calc(2.5em + .75rem + 2px)'}}
              />
            </Col>
            </Form.Group>
          </Form>
          
          <div className='next-button'> <SmallGreenButton 
            onClick={handleShowModalTwo} 
            >Next </SmallGreenButton></div>
          </Modal.Body>
        </Modal>

        
     
        <Modal show={modalState === "modal-two"}
               className='my-modal'
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               dialogClassName="modal-80w"
               fullscreen='xl-down'
               >
               <Modal.Title
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "34px"}
              }> New Parti Card</Modal.Title>
              <hr></hr>
            <Modal.Body>
            <h4>When should we deliver the card?</h4>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3,5">
            Choose Delivery Date
            </Form.Label>
            <Col sm="5"> 
            
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <DatePicker
                  className="date-picker"
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
            </Col>
            </Form.Group>

            {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
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
            </Form.Group>  */}

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3,5" style={{marginRight: '30px'}}>
            Select Time Zone
            </Form.Label>
            <Col sm="5"> 
            <TimezoneSelect
              className='time-zone'
              value={selectedTimezone}
              onChange={setSelectedTimezone}
              style={{
                    width: '150%',
                    height:'calc(2.5em + .75rem + 2px)',
                    paddingRight: '15px'}}
              />
            </Col>
            </Form.Group>
            <div className='next-button'> <SmallGreenButton 
                 onClick={handleSubmit} 
                 >Create Card
            </SmallGreenButton>
            </div>
          </Modal.Body>
        </Modal>

        {/* New card Success Modal  */}
        <Modal 
          show={CardSuccessShow}
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
          <Row className="justify-content-md-center">
    <Col xs={12} sm={10} md={10}>
    <div className='modal-image'> <Image src={SadCard}/> </div>
   
          
          <h4>New Card Successfully Created!</h4>
          <p className='title'> {title} </p>
          <p className='due-date'>Scheduled :  {dueDate} </p>

        <div className='modal-buttons'> 
            <SmallGreenButton 
          // onClick={handleShowModalOne} 
            > Invite Contributors </SmallGreenButton>

            <SmallGreenButton
              onClick={handleStartDesigning}>
              Start Designing </SmallGreenButton></div>
              </Col>
    </Row>
        </Modal.Body>
        </Modal>

      </div>
     )
  }
  
  export default CreateNewCard;
