import React from "react";
import { Card, Row, Image } from "react-bootstrap";
import UploadContent from "./UploadVideo";
import Photo from "../../stockPhotos/c-landingpage-photo.png";

function About() {

    return (
        <div style={{ backgroundColor: '#E5E5E5' }}>
            <Row className="justify-content-lg-center m-5">
                <Card className="text-center m-5" border="0" style={{ width: "25rem" }}>
                    <Image src={Photo} />
                </Card>
                <Card className="m-5" border="0" style={{ width: "24rem", backgroundColor: '#E5E5E5'}}>
                    <Card.Body>
                        <Card.Title className="mb-3">What is Parti Greetings?</Card.Title>
                        <Card.Subtitle>
                            Parti provides a new way to digitally celebrate events. Remove
                            the need for video editing and time lost to long video montages,
                            and take back the enjoyment of the celebration by viewing
                            message and videos from friends, family, and colleagues. You can
                            also revisit your events anytime you want and easily find the
                            messages you'd like to see.
                        </Card.Subtitle>
                        <Card.Subtitle className="mt-3">
                            <UploadContent />
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}
export default About