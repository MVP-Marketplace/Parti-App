import { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import { SelectionState } from "draft-js";
init("user_ruuSWVGbOAd5C8l0N2GFP");

const service_id = "service_3tnvm3l";
const template_id = "template_mo96d33";
const user_id = "user_ruuSWVGbOAd5C8l0N2GFP";

function ContributorEmail(props) {
  const [toSend, setToSend] = useState({
    send_to: "",
    from_name: "",
    contributor_link: "",
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
  const clearState = () => {
    SelectionState({ ...toSend });
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default ContributorEmail;
