import React, { useState } from "react";
import { Form, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import "./accountSetUp.css";

const Logout = (props) => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/users/logout", { username: username, password: password })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("email", JSON.stringify(response.data.username));
        localStorage.setItem("user", JSON.stringify(response.data._id));
        localStorage.setItem("cardId", JSON.stringify(response.data.cardsList));
        props.history.push("/dashboard");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <Card className="register-card text-center" centered>
      <h3> Welcome to Parti Greetings </h3>
      <h4> Login to account </h4>
      <Form className="register-form" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="username">
          <Form.Label column sm="3">
            Email
          </Form.Label>
          <Col sm="5">
            <Form.Control
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Email"
              name="username"
              style={{
                width: "334px",
                height: "calc(2.5em + .75rem + 2px)",
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column sm="3">
            Password
          </Form.Label>
          <Col sm="5">
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              style={{
                width: "334px",
                height: "calc(2.5em + .75rem + 2px)",
              }}
            />
          </Col>
        </Form.Group>
        <SmallGreenButton type="submit" onSubmit={handleSubmit}>
          Logout
        </SmallGreenButton>
      </Form>
    </Card>
  );
};

export default Logout;
