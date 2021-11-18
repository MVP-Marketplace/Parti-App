import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import axios from "axios";
import "./RSide.css";

const CardTemplate = () => {
  const { id: cardId } = useParams();
  const [card, setCard] = useState({});
  console.log("card/cardid", cardId); // example: http://localhost:3000/card/617b78c739d3b42b435f719d

  useEffect(() => {
    async function getGreetingCard() {
      const response = await axios.get(`/card/${cardId}`);
      const { data } = response;
      setCard(data);
    }
    getGreetingCard();
  }, [cardId]);

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
        <h5 className="cardtemplate-section-header">Happy Birthday Kim!!!</h5>

        <div className="cardtemplate-section-placeholders">
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
        </div>

        <div className="cardtemplate-section-background-image">
          {/* <img src="../../stockPhotos/birthday/Birthday4.png" alt="Birthday4" /> */}

          <img src={card.theme} alt="theme" />
        </div>
      </section>
    </section>
  );
};

export default CardTemplate;
