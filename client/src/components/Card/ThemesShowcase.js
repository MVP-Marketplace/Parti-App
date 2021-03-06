//Why is this separate from SelectTheme when both components seem to show image choices for greeting card theme.

import React, { useState, useContext } from "react";
import {
  Card,
  CardGroup,
  Container,
  Image,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css";
import MediumGreenButton from "../StyledComponents/Buttons/MediumGreenButton";
import { AppContext } from "../../contexts/AppContext";

function ThemesShowcase(props) {
  const [key, setKey] = useState("home");
  const [selectedTheme, setTheme] = useState("");
  const cardId = JSON.parse(localStorage.getItem("cardId"));
  const userId = JSON.parse(localStorage.getItem("user")); // get user id for the dashboard
  const { setCardsList } = useContext(AppContext);

  console.log(cardId);
  const handleClick = async (e) => {
    // await setTheme(e.target.src); // not needed.  set directly in axios put() request
    // const cardId = props.state; // shows undefined

    console.log("cardId2", cardId);
    console.log("theme2 url clicked on", e.target.src);
    console.log("userid2", userId);

    axios
      .put(`/card/${cardId}`, {
        theme: e.target.src,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const updateCardList = () => {
    axios
      .get(`/users/${userId}`)
      .then((response) => {
        setCardsList(response.data.cardsList);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="theme-showcase">
      <h3 bg="secondary"> Other Themes </h3>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-5"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "0rem!important",
        }}
      >
        <Tab eventKey="home" title="Anniversary">
          <CardGroup>
            <Image
              src={`./stockPhotos/anniversary/anniversary1.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/anniversary/anniversary2.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/anniversary/anniversary3.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/anniversary/anniversary4.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/anniversary/anniversary5.png`}
              className="show-case-image"
              onClick={handleClick}
            />
          </CardGroup>
        </Tab>
        <Tab eventKey="birthday" title="Birthday">
          <CardGroup>
            <Image
              src={`./stockPhotos/birthday/birthday1.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/birthday/birthday2.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/birthday/birthday3.png`}
              className="show-case-image"
              onClick={handleClick}
            />

            <Image
              src={`./stockPhotos/birthday/birthday4.png`}
              className="show-case-image"
              onClick={handleClick}
            />

            <Image
              src={`./stockPhotos/birthday/birthday5.png`}
              className="show-case-image"
              onClick={handleClick}
            />
          </CardGroup>
        </Tab>
        <Tab eventKey="graduation" title="Graduation">
          <CardGroup>
            <Image
              src={`./stockPhotos/graduation/graduation1.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/graduation/graduation2.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/graduation/graduation3.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/graduation/graduation4.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/graduation/graduation5.png`}
              className="show-case-image"
              onClick={handleClick}
            />
          </CardGroup>
        </Tab>
        <Tab eventKey="promotion" title="Promotion">
          <CardGroup>
            <Image
              src={`./stockPhotos/promotion/promotion1.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/promotion/promotion2.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/promotion/promotion3.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/promotion/promotion4.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/promotion/promotion5.png`}
              className="show-case-image"
              onClick={handleClick}
            />
          </CardGroup>
        </Tab>
        <Tab eventKey="wedding" title="Wedding">
          <CardGroup>
            <Image
              src={`./stockPhotos/wedding/wedding1.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/wedding/wedding2.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/wedding/wedding3.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/wedding/wedding4.png`}
              className="show-case-image"
              onClick={handleClick}
            />
            <Image
              src={`./stockPhotos/wedding/wedding5.png`}
              className="show-case-image"
              onClick={handleClick}
            />
          </CardGroup>
        </Tab>
      </Tabs>

      <div>
        {/* Added to continue to specific user dashboard */}
        <Link to={`/dashboard/${userId}`}>
          <MediumGreenButton
            className="continue-button"
            style={{
              margin: "1rem",
              float: "right",
            }}
            onClick={updateCardList}
          >
            Continue
          </MediumGreenButton>
        </Link>
      </div>
    </div>
  );
}

export default ThemesShowcase;
