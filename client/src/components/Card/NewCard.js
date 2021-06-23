import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

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
     
     return (

      
      <div>


        <Card>
         <Card.Body>
           <Card.Title as="h5"></Card.Title>
           <Card.Subtitle></Card.Subtitle>
           <Card.Text>
             <div>
             {/* <Form onSubmit={handleSubmit}>           */}
             <Form>          
             <input type="text" name="username"  />
           <input type="email" name="email"  />
           <input type="submit" value="Sing-in" />
         </Form>
       </div>
           </Card.Text>
           <Button onClick={handleShowModalOne}>Show Modal One</Button>
           {/* <Card.Link href="#"> </Card.Link> */}
         </Card.Body>
       </Card>

        
     
        <Modal show={modalState === "modal-one"}>
          <Modal.Body>This is Modal One</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShowModalTwo}>Show Modal Two</Button>
          </Modal.Footer>
        </Modal>
     
        <Modal show={modalState === "modal-two"}>
          <Modal.Body>This is Modal Two</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     )
     }



  //   return (
  //      

  //   );
  // }
  
  export default CreateNewCard;

