import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
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

  const handleSubmit = async (e) =>{
    // stop form reloading aka browser default behavior
    e.preventDefault();
    axios.post('/users/register', {username: username, password: password})
        .then((response)=>{
          setUser(response.data)
          console.log(response.data.user._id)
          localStorage.setItem('user', JSON.stringify(response.data.user._id));
          props.history.push('/welcome')
      })
        .catch(error => {
            setUser({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
      
      console.log('line 33' , localStorage)
      }

//   const handleGoogleSignUp = async (e) =>{
//     // stop form reloading aka browser default behavior
//     e.preventDefault();
//     axios.get('http://localhost:3001/users/auth/google', {username: username, password: password})
//         .then((response)=>{
//           setUser(response.data)
//           console.log(response.data)
//           localStorage.setItem('user', JSON.stringify(response.data));
//         //   props.history.push('/')
//       })
//         .catch(error => {
//             setUser({ errorMessage: error.message });
//             console.error('There was an error!', error);
//         });
      
//       console.log('line 52' , localStorage)
//       }
    
  
  return (
    <div style={styles}>
    <Form className="register-form" onSubmit={handleSubmit}>
      <h3>Welcome to Parti Greetings </h3>
      <h4>Let's create an account </h4>
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
            name="password"
            // onChange={}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Sign up
        </Button>
        <p>or Sign up with</p>
        <Form.Group>
        <SmallGreenButton> Sign Up </SmallGreenButton>
        <Button variant="primary" type="submit">
          FACEBOOK
        </Button> 
        </Form.Group>
        <Button variant="primary" href="http://localhost:3001/users/auth/google">
          Google
        </Button>
      </Form>
    </div>
  );

};
 
export default UserForm;