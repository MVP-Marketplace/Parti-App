import React, { useState } from "react";
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import DraftJS from '../DraftJS/DraftJS-UploadVideo';
import Upload from '../Upload'
import MediumGreenButton from "../StyledComponents/Buttons/MediumGreenButton";

function UploadVideo() {


    const [modalState, setModalState] = useState("close")

    const handleShowModalOne = () => {
        setModalState("modal-one")
    }

    const handleShowModalTwo = () => {
        setModalState("modal-two")
    }

    const handleShowModalThree = () => {
        setModalState("modal-three")
    }

    const handleShowModalFour = () => {
        setModalState("modal-four")
    }

    // const handleShowModalFive = () => {
    //     setModalState("modal-five")
    // }

    // const handleShowModalSix = () => {
    //     setModalState("modal-six")
    // }

    const handleClose = () => {
        setModalState("close")
    }

    const handleSubmit = () => {
        setModalState("submit")
    }


    return (
        <>
            <MediumGreenButton onClick={handleShowModalOne}>Upload</MediumGreenButton>

          
            <Modal
                show={modalState === "modal-one"}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="justify-content-md-center"
            >

                <Modal.Header>
                    <Modal.Title>Ready To Upload</Modal.Title>
                </Modal.Header>
                <Upload />
                <Modal.Body className="justify-content-md-center">
                    After you upload your video, you can use our text editor to add more personal touches!
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center">
                    <Button variant="secondary" onClick={handleClose} >
                        Cancel
                    </Button>
                    <Button onClick={handleShowModalTwo}>Next</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={modalState === "modal-two"}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title>Video Uploaded</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Would you like to add a personal touch to your picture or video?
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center">
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleShowModalThree}>Customize</Button>
                    <Button onClick={handleShowModalFour}>Preview</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={modalState === "modal-three"}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Form closeButton>
                <Modal.Header className="text-center">
                    <Modal.Title className="mt-3">Add Rich Text and Emojis</Modal.Title>
                </Modal.Header>
                    <DraftJS />

                    <Modal.Footer className="justify-content-md-center">
                        <Button variant="secondary" onClick={handleShowModalTwo}>
                            Back
                        </Button>
                        <Button onClick={handleShowModalFour}>Preview</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal
                show={modalState === "modal-four"}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    Insert Video Box Here
                </Modal.Body>
                <Modal.Body>
                    Thank you ~First Name~
                </Modal.Body>
                <Modal.Body>
                    Message From ~Organizer~
                </Modal.Body>
                <Modal.Body>
                   Media and Text Card Preview inserted here
                </Modal.Body>
                <Modal.Footer className="justify-content-md-center">
                    <Button variant="secondary" onClick={handleClose}>
                        Exit
                    </Button>
                    <Button onClick={handleSubmit}>Create a Card</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UploadVideo;