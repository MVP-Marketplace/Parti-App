// set up to invite contributors in mass email
// needs code to automate instead of only entering addresses in manually

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, Form, Card } from 'react-bootstrap';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
import SmallGreenButton from '../StyledComponents/Buttons/SmallGreenButton';
import axios from "axios";
init('user_ruuSWVGbOAd5C8l0N2GFP');

const service_id = 'service_3tnvm3l';
const template_id = 'template_mo96d33';
const user_id = 'user_ruuSWVGbOAd5C8l0N2GFP';

function ContributorInvite(props) {
	const [show, setShow] = useState(false); // handles state for modal
	const [modalState, setModalState] = useState('close');
	const [contactList, setContactList] = useState([]);

	useEffect(() => {
		async function fetchData() {
		  const id = JSON.parse(localStorage.getItem("user"));
	
		  // GET request using axios inside useEffect React hook
		  const result = await axios
		  .get(`/users/${id}`, { id: id });
		  setContactList(result.data.contactList); // sets  each content object to state
		}
		fetchData();
	  }, []);

	const handleClose = () => {
		setModalState('close');
	};
	const handleShowModalOne = () => {
		setShow(false);
		setModalState('modal-one');
	};
	const [toSend, setToSend] = useState({
		send_to: '',
		from_name: '',
		contributor_link: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send(service_id, template_id, toSend, user_id)
			.then((response) => {
				alert('Your message has been sent!');
				console.log('SUCCESS!', response.status, response.text);
				setContactList(toSend);
			})
			.catch((err) => {
				alert('Something went wrong, please check your emails and try again.');
				console.log('FAILED...', err);
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<>
			<SmallGreenButton onClick={handleShowModalOne}>Invite</SmallGreenButton>
			<Modal
				show={modalState === 'modal-one'}
				size='md'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				className='justify-content-md-center'
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header
					closeButton
					className='mt-3'
					onClick={handleClose}></Modal.Header>
				<ModalBody>
					<h6>Invite contributors by email</h6> <br />
					<h6>*add multiples by seperating with a comma</h6>
					<Card className='text-center'>
						<Card.Body>
							<Form onSubmit={onSubmit}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Control
										type='email'
										name='send_to'
										placeholder='someone@aol.com, someoneelse@pinemail.com, anothersomeone@comcast.net'
										value={toSend.send_to}
										onChange={handleChange}
										as='textarea'
										rows={3}
									/>
								</Form.Group>
								{/* code for greeting card link here... */}
								{/* value={toSend.contributor_link} */}
								<SmallGreenButton type='submit'>Submit</SmallGreenButton>
							</Form>
						</Card.Body>
					</Card>
				</ModalBody>
				<ModalBody>
					{/* Need to research a way to do this function, only found ways for React Native for mobile.  */}
					<Button variant='secondary' onClick={handleClose}>
						+ Import Contact List
					</Button>
				</ModalBody>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ContributorInvite;
