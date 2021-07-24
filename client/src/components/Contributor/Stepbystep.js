import React from "react";

// Components
import { Card, Row, CardGroup } from "react-bootstrap";
import UploadContent from "./UploadVideo";


// Media
import Photo1 from "../../images/rafiki.svg";
import Photo2 from "../../images/rafikiChill.svg";
import Photo3 from "../../images/amico.svg";

function Stepbystep() {

    return (
        <div>
            <Row className="justify-content-md-center p-5" >
                <Card className="text-center" border="0">
                    <Card.Body>
                        <Card.Title style={{ fontSize: 36 }}>
                            Welcome to Parti userID
                        </Card.Title>

                        {/* Contributers will first recieve an email that brings them to the LandingPage, through EmailJS
                        The Contributor will see the name of the Occasion, from OccasionID, and the name of the Organizer whom invited them. */}
                        <Card.Subtitle style={{ fontSize: 18 }}>
                            We are celebrating (occasion)   
                            and (organizer) 
                            invited you to submit your own video.
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
        </div>
    )
}
export default Stepbystep