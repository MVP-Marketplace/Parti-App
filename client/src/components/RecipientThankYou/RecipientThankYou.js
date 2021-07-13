import React, { useState } from "react";
import { Button, Modal, ModalBody, Form, Card } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
init("user_ruuSWVGbOAd5C8l0N2GFP");

const service_id = "service_9qb6rls";
const template_id = "template_9684pg8";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function RecipientThankYou(props) {
  const [show, setShow] = useState(false); // handles state for modal
  const [modalState, setModalState] = useState("close");

  const handleClose = () => {
    setModalState("close");
  };
  const handleShowModalOne = () => {
    setShow(false);
    setModalState("modal-one");
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    to_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(service_id, template_id, toSend, user_id)
      .then((response) => {
        alert("Your message has been sent!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        alert("Something went wrong, please check your emails and try again.");
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SmallGreenButton onClick={handleShowModalOne}>Invite</SmallGreenButton>
      <Modal
        show={modalState === "modal-one"}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="justify-content-md-center"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="mt-3" onClick={handleClose}>
          <h4>Thank Your Contributors</h4>
        </Modal.Header>
        <Modal.Title></Modal.Title>
        <ModalBody>
          <h6>
            Let your contributors know how much you appreciate their
            contributions.
          </h6>
          <Card className="text-center">
            <Card.Body>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter your message:</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="send_to"
                    placeholder="someone@aol.com, someoneelse@pinemail.com, anothersomeone@comcast.net"
                    value={toSend.send_to}
                    onChange={handleChange}
                    as="textarea"
                    rows={1}
                  />
                </Form.Group>
                {/* code for greeting card link here... */}
                {/* value={toSend.contributor_link} */}
                <SmallGreenButton type="submit">Submit</SmallGreenButton>
              </Form>
            </Card.Body>
          </Card>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="App">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            <h4>Thank Your Contributors</h4>
          </Card.Title>
          <Card.Text>
            Let your contributors know how much you appreciate their
            contributions.
          </Card.Text>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>From:</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                placeholder="Your name"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="to_email"
                placeholder="Send-to email"
                value={toSend.to_email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter your message:</Form.Label>
              <Form.Control
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                as="textarea"
                rows={4}
              />
            </Form.Group>
            <SmallGreenButton type="submit">Submit</SmallGreenButton>
          </Form>
        </Card.Body>
      </Card>
    </div> */}
    </>
  );
}

export default RecipientThankYou;
