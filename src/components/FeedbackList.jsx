import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedBackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedBackData } = useContext(FeedBackContext);

  if (!feedBackData || feedBackData.length === 0) {
    return (
      <div className="no-feedback-text">
        <h1>No Feedbacks Show</h1>
      </div>
    );
  }

  const averageRatings =
    feedBackData.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedBackData.length;

  return (
    <>
      <div className="stats">
        <div>
          <h3>
            {feedBackData.length === 1 ? "Review" : "Reviews"}:{" "}
            {feedBackData.length}
          </h3>
        </div>

        <div>
          <h3>Average: {averageRatings.toFixed(1).replace("." + 0, "")}</h3>
        </div>
      </div>

      <div className="feedback-list-container">
        <FeedbackItem />
      </div>
    </>
  );
};

export default FeedbackList;
