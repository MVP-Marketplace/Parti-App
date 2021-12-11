import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import "./RSide.css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

const CardTemplate = () => {
  // const { greetingCard, setGreetingCard } = useContext(AppContext);
  const { cards } = useContext(AppContext);
  const { id: cardId } = useParams();
  const [card, setCard] = useState({});
  // console.log('card/cardid', cardId); // example: http://localhost:3000/card/617b78c739d3b42b435f719d
  let contents = "";

  // useEffect(() => {
  //   async function getGreetingCard() {
  //     const response = await axios.get(`/card/${cardId}`);
  //     const { data } = response;
  //     console.log("data?", data);
  //     // setGreetingCard(data);
  //     setCard(data);
  //     console.log("herehehehe", data);
  //   }
  //   getGreetingCard();
  // }, [cardId]);

  useEffect(() => {
    const card = cards.find((card) => card._id === cardId);
    setCard(card);
    console.log("currentCard selected", card);
  }, [cards, cardId]);

  if (card.contentList && card.contentList.length > 0) {
    console.log("greater", card.contentList);

    contents = card.contentList.map((item) => {
      return (
        <div className="cardtemplate-placeholder" key={item._id}>
          {validURL(item.content) ? (
            <Card.Img src={item.content} className="img-fluid" alt="theme" />
          ) : (
            item.content
          )}
        </div>
      );
    });
  } else {
    contents = (
      <>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
        <div className="cardtemplate-placeholder">
          <p className="cardtemplate-placeholder-paragraph">Place Video Here</p>
        </div>
      </>
    );
  }

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  return (
    <section className="cardtemplate-container">
      <div className="cardtemplete-nav">
        <button className="prev">
          <FiArrowLeft className="prev-icon-btn" />
        </button>

        <button className="next">
          <FiArrowRight className="next-icon-btn" />
        </button>
      </div>

      <section className="cardtemplate-section">
        <h5 className="cardtemplate-section-header">
          {/* Happy Birthday, {greetingCard.recipientFirstName}!!! */}
          Happy Birthday, {card.recipientFirstName}!!!
        </h5>

        {/* <p>{card._id}</p> */}

        <div className="cardtemplate-section-placeholders">{contents}</div>

        {/* <div className="cardtemplate-section-placeholders">
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
          <div className="cardtemplate-placeholder">
            <p className="cardtemplate-placeholder-paragraph">
              Place Video Here
            </p>
          </div>
        </div> */}

        <div className="cardtemplate-section-background-image">
          {/* <img src="../../stockPhotos/birthday/Birthday4.png" alt="Birthday4" /> */}

          {/* <img src={greetingCard.theme} alt='theme' /> */}
          <img src={card.theme} alt="theme" />
        </div>
      </section>
    </section>
  );
};

export default CardTemplate;
