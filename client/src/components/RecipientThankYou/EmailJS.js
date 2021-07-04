import { useState } from "react";
import { Form } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_ruuSWVGbOAd5C8l0N2GFP");

// require("dotenv").config();
const service_id = "service_9qb6rls";
const template_id = "template_9684pg8";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function EmailJS(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    to_email: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
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
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>To:</Form.Label>
          <Form.Control
            type="text"
            name="to_name"
            placeholder="Send-to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="to_email"
            placeholder="Send-to email"
            value={toSend.send_to}
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
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your email:</Form.Label>
          <Form.Control
            type="email"
            name="reply_to"
            placeholder="Reply to email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default EmailJS;
