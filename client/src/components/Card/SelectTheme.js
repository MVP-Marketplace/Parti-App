import React, { useState } from "react";
import { CardGroup, Image, Row } from "react-bootstrap";
import axios from "axios";
import MediumGreenButton from "../StyledComponents/Buttons/MediumGreenButton";
import ThemesShowcase from "./ThemesShowcase";
import { Link } from "react-router-dom";
import "./card.css";

//styling on this needs to be fixed so the images show up not stretched and blurry (svg files?) (.show-case-image in css file)
function SelectTheme(props) {
  // const cardId = props.location.state.cardId; // showing unknown value.  replaced with line below.
  const cardId = JSON.parse(localStorage.getItem("cardId"));
  const userId = JSON.parse(localStorage.getItem("user")); // get user id for the dashboard
  const occasion = props.location.state.occasion.toLowerCase();
  const [selectedTheme, setTheme] = useState("");

  const handleClick = async (e) => {
    setTheme(e.target.src);
    // const cardId = props.location.state.cardId; // showing unknown value being passed to put() below as the cardId.  replaced with line above.
    console.log("cardId", cardId);
    console.log("theme url clicked on", e.target.src);
    console.log("userid", userId);
    axios
      .put(`/card/${cardId}`, {
        // theme: selectedTheme, // set directly
        theme: e.target.src,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="theme">
      <h2>Select Your Background Theme </h2>
      <div className="theme-showcase">
        <h3 bg="secondary">
          Based on your card theme: <br />
          <span style={{ color: "#93E9BE" }}>
            {props.location.state.occasion}
          </span>
        </h3>
        <CardGroup
          className="card-group"
          style={{
            marginBottom: "1rem",
          }}
        >
          <Image
            src={`./stockPhotos/${occasion}/${occasion}1.png`}
            onClick={handleClick}
            className="show-case-image"
          />
          <Image
            src={`./stockPhotos/${occasion}/${occasion}2.png`}
            className="show-case-image"
            onClick={handleClick}
          />
          <Image
            src={`./stockPhotos/${occasion}/${occasion}3.png`}
            className="show-case-image"
            onClick={handleClick}
          />
          <Image
            src={`./stockPhotos/${occasion}/${occasion}4.png`}
            className="show-case-image"
            onClick={handleClick}
          />
          <Image
            src={`./stockPhotos/${occasion}/${occasion}5.png`}
            className="show-case-image"
            onClick={handleClick}
          />
          {/* <Link to="/dashboard"> changed to below for specific user dashboard */}
          <Link to={`/dashboard/${userId}`}>
            <MediumGreenButton
              className="continue-button"
              style={{ margin: "1rem", float: "right" }}
            >
              Continue
            </MediumGreenButton>
          </Link>
        </CardGroup>
      </div>

      <div>
        <ThemesShowcase />
      </div>
    </div>
  );
}

export default SelectTheme;
