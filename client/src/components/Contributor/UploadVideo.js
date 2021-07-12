import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import axios from "axios";


// Draft JS Imports
import { EditorState, Editor, convertToRaw } from "draft-js";
import "@draft-js-plugins/emoji/lib/plugin.css";
import Toolbar from "../DraftJS/StyleToolbar/toolbar";
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { stateToHTML } from "draft-js-export-html";

// Style Imports
import MediumGreenButton from "../StyledComponents/Buttons/MediumGreenButton";
import "bootstrap/dist/css/bootstrap.min.css";

function UploadVideo(props) {
  const [show, setState] = useState(true); // handles state for modal
  const [CardSuccessShow, setCardSuccessShow] = useState(false); // handles state for modal


  // DraftJS Functions
  const [name] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const history = useHistory();

  const convertDescriptionFromJSONToHTML = () => {
    try {
      return { __html: stateToHTML(content.getCurrentContent()) };
    } catch (exp) {
      console.log(exp);
      return { __html: "Error" };
    }
  };

  const uploadCallback = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return new Promise((resolve, reject) => {
      fetch("http://localhost:3001/uploadImage", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          resolve({ data: { link: resData } });
        })
        .catch((error) => {
          console.log(error);
          reject(error.toString());
        });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      name: name,
      content: convertToRaw(content.getCurrentContent()),
    };
    console.log("POST: ", newPost);
    fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContent(EditorState.createEmpty());
        history.goBack();
      })
      .catch((err) => console.log("ERROR:", err));
  };
  
// End DraftJS Functions


// Modal Functions
  const [modalState, setModalState] = useState("close");

  const handleShowModalOne = () => {
    setState(false);
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleClose = () => {
    setModalState("close");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };

  const handleShowModalFour = () => {
    setModalState("modal-four");
  };

  const handleSubmit = () => {
    setModalState("submit");
  };

  return (
    <div>
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
        centered
      >
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
        centered
      >
        <Form closeButton>
          <Modal.Header className="text-center">
            <Modal.Title className="mt-3">Add Rich Text and Emojis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="editorContainer">
              <form noValidate onSubmit={onSubmit}>
                <div className="editors">

                  <Editor
                    editorState={content}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    wrapperStyle={{ border: "2px solid green", marginBottom: "20px" }}
                    editorStyle={{ height: "300px", padding: "10px" }}
                    toolbar={{ image: { uploadCallback } }}
                    onEditorStateChange={(editorState) => setContent(editorState)}
                  />
                  <Toolbar />
                </div>
                <div dangerouslySetInnerHTML={convertDescriptionFromJSONToHTML()}></div>
              </form>
            </div>
          </Modal.Body>
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
        centered
      >
        <Modal.Body aria-labelledby="contained-modal-title-vcenter" centered>
          Insert Video Box Here
        </Modal.Body>
        <Modal.Body>Thank you ~First Name~</Modal.Body>
        <Modal.Body>Message From ~Organizer~</Modal.Body>
        <Modal.Body>Media and Text Card Preview inserted here</Modal.Body>
        <Modal.Footer className="justify-content-md-center">
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button onClick={handleSubmit}>Create a Card</Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
}

export default UploadVideo;
