import { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
init("user_ruuSWVGbOAd5C8l0N2GFP");

const service_id = "service_9qb6rls";
const template_id = "template_9684pg8";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function RecipientThankYou(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_email: "",
    message: "",
  });

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
    </div>
  );
}

export default RecipientThankYou;
