import React, { useState } from 'react';
import { Form, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { FacebookButton } from '../StyledComponents/Buttons/FacebookButton';
import { GoogleButton } from '../StyledComponents/Buttons/GoogleButton';
import './accountSetUp.css';

const UserForm = (props) => {
	const [user, setUser] = useState();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		// stop form reloading aka browser default behavior

		e.preventDefault();
		axios
			.post('/users/register', { username: username, password: password })

			.then((response) => {
				setUser(response.data);
				// console.log(response.data.user._id)
				localStorage.setItem('user', JSON.stringify(response.data.user._id));
				props.history.push('/welcome');
			})
			.catch((error) => {
				setUser({ errorMessage: error.message });
				console.error('There was an error!', error);
			});

		console.log('line 33', localStorage);
	};

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
		<Card className='register-card text-center' centered>
			<h3> Welcome to Parti Greetings </h3>
			<h4> Let's create an account </h4>
			{/* TODO: username should probably be separated into a first name and last name and connect those to an email address that works as the login id. */}
			<Form className='register-form' onSubmit={handleSubmit}>
				<Form.Group as={Row} className='mb-3' controlId='username'>
					<Form.Label column sm='3'>
						Email
					</Form.Label>
					<Col sm='5'>
						<Form.Control
							onChange={(event) => setUsername(event.target.value)}
							type='text'
							placeholder='Email'
							name='username'
							style={{
								width: '334px',
								height: 'calc(2.5em + .75rem + 2px)',
							}}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className='mb-3' controlId='password'>
					<Form.Label column sm='3'>
						Password
					</Form.Label>
					<Col sm='5'>
						<Form.Control
							onChange={(event) => setPassword(event.target.value)}
							type='password'
							name='password'
							placeholder='Password'
							style={{
								width: '334px',
								height: 'calc(2.5em + .75rem + 2px)',
							}}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className='mb-3' controlId='confirm-password'>
					<Form.Label column sm='3'>
						Confirm Password
					</Form.Label>
					<Col sm='5'>
						<Form.Control
							type='password'
							placeholder='Confirm Password'
							style={{
								width: '334px',
								height: 'calc(2.5em + .75rem + 2px)',
							}}
						/>
					</Col>
				</Form.Group>
				<SmallGreenButton type='submit' onSubmit={handleSubmit}>
					Sign up
				</SmallGreenButton>
				<Card.Text> or </Card.Text>
				<Card.Text> Sign up with </Card.Text>
				<FacebookButton
					type='submit'
					href='http://localhost:3001/auth/facebook'
				/>
				<GoogleButton
					type='submit'
					href='http://localhost:3001/users/auth/google'
				/>
			</Form>
			<Card.Text>
				Already have an account?
				<a href='/login' target='_self'>
					{' '}
					Click here to Sign In
				</a>
			</Card.Text>
		</Card>
	);
};

export default UserForm;
