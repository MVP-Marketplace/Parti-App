import React from "react";
import { useHistory } from "react-router-dom";

// Components
import TopNavBar from "../components/TopNavBar";
import { Card, Col, Row, CardGroup, Image } from "react-bootstrap";
import UploadContent from "../components/Contributor/UploadVideo";


// Media
import Photo1 from "../images/rafiki.svg";
import Photo2 from "../images/rafikiChill.svg";
import Photo3 from "../images/amico.svg";
import Photo4 from "../stockPhotos/c-landingpage-photo.png";

function LandingPage() {
  const history = useHistory();

  // const [firstName, setFirstName] = useState('');
  // const [occasion, setOccasion] = useState('');
  // const [organizer, setOrganizer] = useState('');

  //   const userId = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <TopNavBar />
      <Row
        className="justify-content-md-center m-5 p-5"
        style={{ paddingTop: "150px" }}
      >
        <Card className="text-center" border="0">
          <Card.Body>
            <Card.Title style={{ fontSize: 36 }}>
              Welcome to Parti userID
            </Card.Title>
            <Card.Subtitle style={{ fontSize: 18 }}>
              We are celebrating ~occasion~ and ~organizer~ invited you to
              submit your own video.
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
      <Row className="justify-content-md-center m-5">
        <CardGroup>
          <Card className="text-center m-3" border="0">
            <Card.Title>1. Create</Card.Title>
            <Card.Img
              variant="top"
              src={Photo1}
              style={{ width: "18rem", minHeight: "18rem" }}
            />
            <Card.Body>
              <Card.Subtitle>
                Use any smart device or camera to record up to a 3 minute video.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="text-center m-3" border="0">
            <Card.Title>2. Edit</Card.Title>
            <Card.Img
              variant="top"
              src={Photo2}
              style={{ width: "18rem", minHeight: "18rem" }}
            />
            <Card.Body>
              <Card.Subtitle>
                Edit your videos to make it personal for a family member, friend
                or colleague.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="text-center m-3" border="0">
            <Card.Title>3. Send</Card.Title>
            <Card.Img
              variant="top"
              src={Photo3}
              style={{ width: "18rem", minHeight: "18rem" }}
            />
            <Card.Body>
              <Card.Subtitle>
                The recipient enjoys the string of videos from all the
                conributors
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row className="justify-content-md-center m-5 p-5">
        <UploadContent />
      </Row>
      <Row className="justify-content-md-center m-5">
        <Col className="justify-content-md-center m-3">
          <Card className="text-center" border="0" style={{ width: "24rem" }}>
            <Image src={Photo4} />
          </Card>
        </Col>
        <Col className="justify-content-md m-3">
          <Card border="0" style={{ width: "24rem" }}>
            <Card.Title>What is Parti Greetings?</Card.Title>
            <Card.Body>
              <Card.Subtitle>
                Parti provides a new way to digitally celebrate events. Remove
                the need for video editing and time lost to long video montages,
                and take back the enjoyment of the celebration by viewing
                message and videos from friends, family, and colleagues. You can
                also revisit your events anytime you want and easily find the
                messages you'd like to see.
              </Card.Subtitle>
              <Card.Subtitle className="justify-content-md-center m-3">
                <UploadContent />
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  // function LandingPage(props) {
  // 	 	return (
  // 	 		<div>
  // 	 			<Upload />
  // 				<VideoPlayer />
  // 			</div>
  // 	 	);
  // 	 }
}
export default LandingPage;
