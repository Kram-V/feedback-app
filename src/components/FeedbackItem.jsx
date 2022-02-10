import React, { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import "../index.css";

const FeedbackItem = () => {
  const { feedBackData, deleteFeedBack, editFeedBack } =
    useContext(FeedBackContext);

  const feedBacks = feedBackData.map((feedBack) => {
    return (
      <div className="feedback-list-card" key={feedBack.id}>
        <div className="header-feedback-card">
          <div>
            <h3 className="rating">{feedBack.rating}</h3>
          </div>

          <div className="edit-delete-icons">
            <i
              class="fa fa-pencil-square-o edit-icon"
              onClick={() => editFeedBack(feedBack)}
            ></i>

            <i
              class="fa fa-times delete-icon"
              onClick={() => deleteFeedBack(feedBack.id)}
            ></i>
          </div>
        </div>

        <p className="feedback">{feedBack.description}</p>
      </div>
    );
  });

  return <>{feedBacks}</>;
};

export default FeedbackItem;
