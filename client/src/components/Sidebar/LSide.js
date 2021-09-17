//May need two separate components LSideContributor vs LSide Recipient or conditional code in this component alone. Set up to show either videos contributed for the organizer to place into card and edit or recipient video playlist to view videos in their greeting card.

import { useState } from "react";
import { Nav, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Card, CardGroup, Tab, Tabs, Image } from "react-bootstrap";
import UploadVideo from "../Contributor/UploadVideo";
import VideoThumbnail from "../Dashboard/VideoThumbnail";

function LSide() {
    const [highlight, setHighlight] = useState("1");

    const options = [
        { name: "Invitees", value: "1" },
        // list of names and emails of invitees - should populate list on the right where Card Previews renders
        { name: "Themes", value: "2" },
        //connects to theme background choices component
        { name: "Music", value: "3" },
        //toggle choices of music connected to card where Card Previews renders
    ];

    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Received">
                    <CardGroup
                        style={{
                            width: "100%"
                        }}
                    >
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                    </CardGroup>
                </Tab>
                <Tab eventKey="profile" title="Waiting">
                    <p>Bye</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default LSide;

// <CardGroup
//     className="card-group"
//     style={{
//         width: "100%",
//         height: "calc(1.0em + .75rem + 2px)",
//         marginBottom: "0rem!important",
//     }}
// >
//     <Image
//         src={`./stockPhotos/${occasion}/${occasion}1.png`}
//         onClick={handleClick}
//         className="show-case-image"
//     />
//     <Image
//         src={`./stockPhotos/${occasion}/${occasion}2.png`}
//         className="show-case-image"
//         onClick={handleClick}
//     />
//     <Image
//         src={`./stockPhotos/${occasion}/${occasion}3.png`}
//         className="show-case-image"
//         width="100%"
//         height="auto"
//         onClick={handleClick}
//     />
//     <Image
//         src={`./stockPhotos/${occasion}/${occasion}4.png`}
//         className="show-case-image"
//         onClick={handleClick}
//     />
//     <Image
//         src={`./stockPhotos/${occasion}/${occasion}5.png`}
//         className="show-case-image"
//         onClick={handleClick}
//     />
//     <Link to="/dashboard">
//         <MediumGreenButton style={{ margin: "2rem", float: "right" }}>
//             Continue
//         </MediumGreenButton>
//     </Link>
// </CardGroup>;
