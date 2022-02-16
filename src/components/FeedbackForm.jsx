import React, { useState, useContext, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Rating from "./Rating";
import FeedBackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedBack, feedBackEdit, updateFeedBack } =
    useContext(FeedBackContext);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  console.log(feedBackEdit);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setRating(feedBackEdit.item.rating);
      setReview(feedBackEdit.item.description);
    }
  }, [feedBackEdit]);

  const handleReview = (e) => {
    e.preventDefault();

    setReview(e.target.value);
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setReview("");

    const newInput = {
      // WITHOUT SERVER
      // id: uuidv4(),

      description: review,
      rating,
    };

    if (feedBackEdit.edit === true) {
      return updateFeedBack(feedBackEdit.item.id, newInput);
    }

    addFeedBack(newInput);
  };

  const disablerBtn = review.length < 5 ? true : false;
  const charactersText = review.length < 5 ? "( Minimum of 5 characters )" : "";

  return (
    <div className="feedback-form-container">
      <Card>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div>
            <h2>Please Rate Our Service</h2>
          </div>

          <Rating rating={handleRating} />

          <div className="input-container">
            <div className="btn-input-container">
              <div>
                <input
                  value={review}
                  onChange={handleReview}
                  placeholder="Write your review"
                  style={{ width: "200px" }}
                />
              </div>

              <div>
                <button
                  className="btn-submit"
                  type="submit"
                  disabled={disablerBtn}
                >
                  Submit
                </button>
              </div>
            </div>

            <div>
              <p> {charactersText} </p>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FeedbackForm;
