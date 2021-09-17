import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./RSide.css";

const CardTemplate = () => {
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
          <img src="../../stockPhotos/birthday/Birthday4.png" alt="Birthday4" />
        </div>
      </section>
    </section>
  );
};

export default CardTemplate;