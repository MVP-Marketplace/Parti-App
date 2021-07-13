import React from "react";
import { Link } from "react-router-dom";
import { SmallGreenButton } from "../StyledComponents/Buttons/SmallGreenButton";
import { Container, Card, Row, Col } from "react-bootstrap";
// import ViewCardPage from '../../pages/ViewCardPage';
import "./dashboard.css";
import VideoThumbnail from "./VideoThumbnail";
import axios from "axios";

function Organizer(props) {
  const userId = JSON.parse(localStorage.getItem("user"));
  // TODO
  // incorporate useEffect to have the list of card objects
  // get the list of cards LINE 25 and make a get request with every CARDID to database

  // React.useEffect(() => checkIfUserHasCards(handleSubmit), [])

  // create the get request to get the list of cards for current user
  const handleSubmit = async (e) => {
    console.log("line 17 ", userId);
    axios
      .get(`/users/${userId}`, {
        userId: userId,
      })
      .then((response) => {
        const CardsList = response.data.cardsList;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // handle call to greetingCard database
  //   const getGreetingCards = async (e) => {
  //     // map through CardsList to get the individual cardID
  //     axios
  //       .get(`/card/${cardID}`, {
  //         userId: userId,
  //       })
  //       .then((response) => {
  //         console.log("LINE 20 OrgDashboard", response.data.cardsList);
  //       })
  //       .catch((error) => {
  //         console.error("There was an error!", error);
  //       });
  //   };

  return (
    <Container className="dashboard">
      <Row className="dashboardHeading">
        <h3>
          {/* {userName} */}
          Username's Dashboard
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
              <Row xs={1} md={3}>
                <Col className="card-thumbnail">
                  <VideoThumbnail />
                </Col>
                <Col className="card-col" xl={6}>
                  <Card.Body>
                    {/* This should render cards connected to the user/role and pull the title, date sent/due and status (open/closed) */}
                    <Card.Text>{/* { cardTitle } */}</Card.Text>
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
                      <SmallGreenButton onClick={handleSubmit}>
                        View Card
                      </SmallGreenButton>
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
  );
}

export default Organizer;
