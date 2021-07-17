import React from "react";
import { Link } from "react-router-dom";
import RecipientThankYou from "../RecipientThankYou/RecipientThankYou";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./dashboard.css";
import VideoThumbnail from "./VideoThumbnail";
import RecipientNavBar from "../RecipientNavBar";

function Recipient(props) {
  // const userID = this.props.userID;
  return (
    <div>
      <RecipientNavBar />
      <Container className="dashboard">
        <Row className="dashboardHeading">
          <h3>
            {/* userName */}
            Recipient Dashboard
          </h3>
        </Row>
        <div>
          <Row justify-content-center>
            <Col></Col>
            {/* Here the Sent Link should only list those cards connected to this user that have been sent by this user. Invisible if no cards sent */}
            <Col>
              <div className="link">
                <Link to="/dashboard#sent" activeClassName="selected">
                  Sent
                </Link>
              </div>
            </Col>
            {/* The Received Link should only list those cards connected to this user that have been received. Invisible if no cards received */}
            <Col>
              <div className="link">
                <Link to="dashboard#received" activeClassName="selected">
                  Received
                </Link>
              </div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>

        <Row>
          <ul className="cards-list">
            {/* {userID.map(function (userID, index) { */}
            {/* <li key={index}> */}
            {/* {userID} */}
            <Card className="text-center" inline>
              <Container fluid>
                <Row xs={1} md={6}>
                  <Col className="card-thumbnail">
                    <VideoThumbnail />
                  </Col>
                  <Col className="card-col" xl={3}>
                    <Card.Body>
                      {/* This should render cards connected to the user/role and pull the title, date sent/due and status (open/closed) */}
                      <Card.Text>
                        John's Birthday{/* { cardTitle } */}
                      </Card.Text>
                      <Card.Text>
                        Event Date:
                        {/* { dateDue }  */}
                      </Card.Text>
                      <Card.Text>
                        Status:
                        {/* { status } */}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <div className="card-col">
                    <Col>
                      <Link to="/card">
                        {/* this should populate the specific card name  */}
                        <SmallGreenButton>View Card</SmallGreenButton>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="/card">
                        {/* this should populate the specific card name  */}
                        <SmallGreenButton>Play Video</SmallGreenButton>
                      </Link>
                    </Col>
                    <Col>
                      <Link>
                        <RecipientThankYou />
                      </Link>
                    </Col>
                  </div>
                </Row>
              </Container>
            </Card>
            {/* </li> */}
            {/* ); */}
            {/* })} */}
          </ul>
        </Row>
      </Container>
    </div>
  );
}
export default Recipient;
