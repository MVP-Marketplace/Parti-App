import React, { useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import ContributorEmail from "../Contributor/ContributorEmail";
import SmallGreenButton from "../StyledComponents/Buttons/SmallGreenButton";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <ContributorEmail />
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
