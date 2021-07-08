import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FacebookButton } from '../StyledComponents/Buttons/FacebookButton';
import { GoogleButton } from '../StyledComponents/Buttons/GoogleButton';
const styles = {
	position: 'relative',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
};

const Login = (props) => {
	const [setUser, setState] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		// stop form reloading aka browser default behavior
		e.preventDefault();
		axios
			.post('/users/login', {
				username: 'Test10',
				email: 'Test10@gmail.com',
				password: '123456',
			})
			.then((response) => setState({}))
			.catch((error) => {
				setState({ errorMessage: error.message });
				console.error('There was an error!', error);
			});

		//   try {
		//     // console.log('inside login')
		//     const user = await axios({
		//       method: 'POST',
		//       url: `/users/login`,
		//       // username: username.value,
		//       // password: password.value,

		//       username: "Test10",
		//       email: "Test10@gmail.com",
		//       password: "123456"}

		//       // withCredentials: "include",
		//     )
		//     // console.log('user: ', username)
		//     // setUser(user.user)
		//     localStorage.setItem('user', JSON.stringify(user.user));
		//     // console.log(user.data)
		//     // setLoading(true);
		//     console.log(JSON.parse(sessionStorage.getItem('user')))
		//   //  console.log(user.data)
		//    props.history.push('/');
		//   } catch (error) {
		//     console.log('Failed to Log In')
		//   }
		//   // setLoading(false)
		// }

		const handleInputChange = (event) => {
			const { name, value } = event.target;
			setState((prevState) => ({
				...prevState,
				[name]: value,
			}));
			console.log('set statete', setState);
		};

		return (
			<div style={styles}>
				<Form className='register-form' onSubmit={handleSubmit}>
					<h1>Create an account </h1>

					<Form.Group controlId='username'>
						<Form.Control
							type='text'
							placeholder='Email'
							name='email'
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group controlId='password'>
						<Form.Control
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group controlId='confirm-password'>
						<Form.Control
							type='password'
							placeholder='Confirm Password'
							name='email'
							// onChange={}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Sign up
					</Button>
					<p>or Sign up with</p>
					<Form.Group>
						<FacebookButton variant='primary' type='submit'>
							Facebook
						</FacebookButton>
					</Form.Group>
					<GoogleButton variant='primary' type='submit'>
						Google
					</GoogleButton>
				</Form>
			</div>
		);
	};

	const useFormInput = (initialValue) => {
		const [value, setValue] = useState(initialValue);

		const handleChange = (e) => {
			setValue(e.target.value);
		};
		return {
			value,
			onChange: handleChange,
		};
	};
};

export default Login;
