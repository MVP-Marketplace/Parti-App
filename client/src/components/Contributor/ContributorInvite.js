import React, { useState } from "react";
import { Button, Modal, ModalBody, Form, Card } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import ContributorEmail from "../Contributor/ContributorEmail";
import SmallGreenButton from "../StyledComponents/Buttons/SmallGreenButton";
import { SelectionState } from "draft-js";
init("user_ruuSWVGbOAd5C8l0N2GFP");

const service_id = "service_3tnvm3l";
const template_id = "template_mo96d33";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function ContributorInvite(props) {
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
    send_to: "",
    from_name: "",
    contributor_link: "",
  });

  const onSubmit = (e) => {
    alert("Your message has been sent!");
    e.preventDefault();
    send(service_id, template_id, toSend, user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const clearState = () => {
    SelectionState({ ...toSend });
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
        <Modal.Header
          closeButton
          className="mt-3"
          onClick={handleClose}
        ></Modal.Header>
        <ModalBody>
          <h6>Invite contributors by email</h6> <br />
          <h6>*add multiples by seperating with a comma</h6>
          <Card className="text-center">
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="send_to"
                    placeholder="someone@aol.com, someoneelse@pinemail.com, anothersomeone@comcast.net"
                    value={toSend.send_to}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                {/* code for greeting card link here... */}
                {/* value={toSend.contributor_link} */}
                <SmallGreenButton type="submit">Submit</SmallGreenButton>
              </Form>
            </Card.Body>
          </Card>
        </ModalBody>
        <ModalBody>
          {/* Need to research a way to do this function, only found ways for React Native for mobile.  */}
          <Button variant="secondary" onClick={handleClose}>
            + Import Contact List
          </Button>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContributorInvite;
