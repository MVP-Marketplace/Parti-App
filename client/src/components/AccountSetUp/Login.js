import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
const styles = {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}

const UserForm = (props) => {

  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(user)

  // "Test11@gmail.com", password: "123456"
  const handleSubmit = async (e) =>{
    // stop form reloading aka browser default behavior
    e.preventDefault();
    axios.post('/users/login', {username: username, password: password})
        .then((response)=>{
          setUser(response.data)
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data));
          props.history.push('/')
      })
        .catch(error => {
            setUser({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
      
      console.log('line 33' , localStorage)
      }
      
  
  return (
    <div style={styles}>
    <Form className="register-form" onSubmit={handleSubmit}>
      <h1>Create an account </h1>
      
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Email"
            name="username"
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirm-password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="email"
            // onChange={}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Sign up
        </Button>
        <p>or Sign up with</p>
        <Form.Group>
        <Button variant="primary" type="submit">
          FACEBOOK
        </Button> 
        </Form.Group>
        <Button variant="primary" type="submit">
          Google
        </Button>
      </Form>
    </div>
  );

};
 
export default UserForm;
