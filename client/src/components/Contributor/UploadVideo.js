import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Draft JS Imports
import { EditorState, Editor, convertToRaw } from "draft-js";
import "@draft-js-plugins/emoji/lib/plugin.css";
import Toolbar from "../DraftJS/StyleToolbar/toolbar";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";
import { stateToHTML } from "draft-js-export-html";

// Style Imports

import MediumGreenButton from "../StyledComponents/Buttons/MediumGreenButton";
import SmallGreenButton from "../StyledComponents/Buttons/SmallGreenButton";

import "bootstrap/dist/css/bootstrap.min.css";

function UploadVideo(props) {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [fileId, setFileId] = useState("");
  const [message, SetMessage] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (data) => {
    await axios
      .post(
        "http://localhost:3001/image-upload",
        { file: data },
        { headers: { accept: "application/json" } }
      )
      .then(function (response) {
        //handle success
        setFileInputState("");
        setPreviewSource("");
        setFileId(response.data.msg.secure_url);
        console.log("LIne 71 ", response.data.msg.secure_url);
        setSuccessMsg("File uploaded successfully");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  // posts content to greeting card, returns updated greeting card to console
  // TODO: update greetingCardId
  //       check is DraftJS is connecting to db
  //should give a preview of card - should also be sent to db
  const createContent = async () => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const greetingCardId = JSON.parse(localStorage.getItem("cardId"));
    const drft = JSON.stringify(content);
    await axios
      .post(
        "http://localhost:3001/content",
        {
          name: "content",
          content: fileId,
          greetingCardId: greetingCardId,
          createdBy: userId,
        },
        { headers: { accept: "application/json" } }
      )
      .then(function (response) {
        console.log("Line 71 ", response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  const [show, setState] = useState(true); // handles state for modal
  const [CardSuccessShow, setCardSuccessShow] = useState(false); // handles state for modal

  // DraftJS Functions
  const [name, setName] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const history = useHistory();

  const convertDescriptionFromJSONToHTML = () => {
    try {
      console.log("Line 90 ::::: ", content.getCurrentContent());
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
    createContent();
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
        className="text-center"
      >
        <Modal.Title className="text-center m-3">Ready To Upload</Modal.Title>

        {/* Upload content  */}

        <form className="form" onSubmit={handleSubmitFile}>
          <input
            id="fileInput"
            type="file"
            name="file"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <MediumGreenButton className="m-3" onSubmit={handleSubmitFile}>
            {" "}
            Upload{" "}
          </MediumGreenButton>
        </form>

        <Modal.Body>
          After you upload your video, you can use our text editor to add more
          personal touches!
        </Modal.Body>
        <Modal.Footer className="justify-content-md-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <SmallGreenButton onClick={handleShowModalTwo}>Next</SmallGreenButton>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalState === "modal-two"}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-center m-3"
      >
        {/* <Modal.Header closeButton> */}
        <Modal.Title className="text-center m-3">Video Uploaded</Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>
          Would you like to add a personal touch to your picture or video?
        </Modal.Body>
        <Modal.Footer className="justify-content-md-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <SmallGreenButton onClick={handleShowModalThree}>
            Customize
          </SmallGreenButton>
          <SmallGreenButton onClick={handleShowModalFour}>
            Preview
          </SmallGreenButton>
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
              <form onSubmit={onSubmit}>
                <div className="editors">
                  <Editor
                    editorState={content}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    wrapperStyle={{
                      border: "2px solid green",
                      marginBottom: "20px",
                    }}
                    editorStyle={{ height: "300px", padding: "10px" }}
                    // toolbar={{ image: { uploadCallback } }}
                    onEditorStateChange={(editorState) =>
                      setContent(editorState)
                    }
                  />
                  <Toolbar />
                </div>
                <div
                  dangerouslySetInnerHTML={convertDescriptionFromJSONToHTML()}
                ></div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-md-center">
            <Button variant="secondary" onClick={handleShowModalTwo}>
              Back
            </Button>
            <SmallGreenButton onClick={handleShowModalFour}>
              Preview
            </SmallGreenButton>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        show={modalState === "modal-four"}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* This Modal is designed to show a preview of the media upload, and message from draftjs, also a thank you to the users name, from the Ogranizer */}

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
          <SmallGreenButton onClick={handleSubmit}>
            Create a Card
          </SmallGreenButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UploadVideo;
