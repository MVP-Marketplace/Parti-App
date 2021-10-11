import React, { useState } from 'react';
import { Form, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { FacebookButton } from '../StyledComponents/Buttons/FacebookButton';
import { GoogleButton } from '../StyledComponents/Buttons/GoogleButton';
import './accountSetUp.css';

const UserForm = (props) => {
	const [user, setUser] = useState();
	// const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	const [formData, setFormData] = useState({});

	const handleSubmit = async (e) => {
		// stop form reloading aka browser default behavior

		e.preventDefault();
		axios
			.post('/users/register', formData)

			.then((response) => {
				setUser(response.data);
				console.log(response.data);
				localStorage.setItem('user', JSON.stringify(response.data.user._id));
				localStorage.setItem(
					'firstname',
					JSON.stringify(response.data.user.firstName)
				);
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
	console.log(formData);
	return (
		<Container className='flex-column flex-sm-column flex-md-row'>
			<Card className='login-card text-center' centered>
				<h3> Welcome to Parti Greetings </h3>
				<h4> Let's create an account </h4>
				{/* TODO: username should probably be separated into a first name and last name and connect those to an email address that works as the login id. */}
				<Form className='register-form' onSubmit={handleSubmit}>
					<Form.Group as={Row} className='mb-3' controlId='firstname'>
						<Form.Label column sm='3'>
							First Name
						</Form.Label>
						<Col sm='5'>
							<Form.Control
								className='register-form-input'
								onChange={(event) =>
									setFormData({ ...formData, firstName: event.target.value })
								}
								type='text'
								placeholder='First name'
								name='firstname'
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className='mb-3' controlId='lastname'>
						<Form.Label column sm='3'>
							Last Name
						</Form.Label>
						<Col sm='5'>
							<Form.Control
								className='register-form-input'
								onChange={(event) =>
									setFormData({ ...formData, lastName: event.target.value })
								}
								type='text'
								placeholder='Last name'
								name='lastname'
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className='mb-3' controlId='username'>
						<Form.Label column sm='3'>
							Email
						</Form.Label>
						<Col sm='5'>
							<Form.Control
								className='register-form-input'
								onChange={(event) =>
									setFormData({ ...formData, username: event.target.value })
								}
								type='text'
								placeholder='Email'
								name='username'
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} className='mb-3' controlId='password'>
						<Form.Label column sm='3'>
							Password
						</Form.Label>
						<Col sm='5'>
							<Form.Control
								className='register-form-input'
								onChange={(event) =>
									setFormData({ ...formData, password: event.target.value })
								}
								type='password'
								name='password'
								placeholder='Password'
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} className='mb-3' controlId='confirm-password'>
						<Form.Label column sm='3'>
							Confirm Password
						</Form.Label>
						<Col sm='5'>
							<Form.Control
								className='register-form-input'
								onChange={(event) =>
									setFormData({
										...formData,
										confirmPassword: event.target.value,
									})
								}
								type='password'
								placeholder='Confirm Password'
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
		</Container>
	);
};

export default UserForm;
