import { useState } from "react";
import { Form, Card, Modal } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
init("user_ruuSWVGbOAd5C8l0N2GFP");

const service_id = "service_3tnvm3l";
const template_id = "template_mo96d33";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function ContributorEmail(props) {
  const [toSend, setToSend] = useState({
    to_email: "",
    from_name: "",
    recipient_name: "",
    contributor_link: "",
  });

  // const CenteredModal(props) => {
  //     return (
  //       <Modal
  //         {...props}
  //         size="lg"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="contained-modal-title-vcenter">
  //             Modal heading
  //           </Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <h4>Centered Modal</h4>
  //           <p>
  //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  //             consectetur ac, vestibulum at eros.
  //           </p>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button onClick={props.onHide}>Close</Button>
  //         </Modal.Footer>
  //       </Modal>
  //     );
  //   }

  // const [modalShow, setModalShow] = React.useState(false);

  const onSubmit = (e) => {
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

  return (
    <div className="App">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            <h4>Invite Card Contributors</h4>
          </Card.Title>
          <Card.Text>
            Invite your associates to contribute to the greeting card.
          </Card.Text>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your name:</Form.Label>
              <Form.Control
                type="text"
                name="recipient_name"
                placeholder="Recipient name"
                value={toSend.recipient_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contributor email addresses:</Form.Label>
              <Form.Control
                type="email"
                name="to_email"
                placeholder="Contributor email"
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
            {/* code for greeting card link here... */}
            {/* value={toSend.contributor_link} */}
            <SmallGreenButton type="submit">Submit</SmallGreenButton>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContributorEmail;
