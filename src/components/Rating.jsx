import React, { useState, useContext, useEffect } from "react";
import "../index.css";
import FeedBackContext from "../context/FeedbackContext";

const Rating = ({ rating }) => {
  const { feedBackEdit } = useContext(FeedBackContext);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setSelect(feedBackEdit.item.rating);
  }, [feedBackEdit]);

  const handleSelect = (e) => {
    setSelect(Number(e.target.value));

    rating(Number(e.target.value));
  };

  return (
    <div className="ratingContainer">
      <div className="ratingList">
        <span>1</span>
        <input
          type="radio"
          name="rating"
          value="1"
          onChange={handleSelect}
          checked={select === 1}
        />
      </div>

      <div className="ratingList">
        <span>2</span>
        <input
          type="radio"
          name="rating"
          value="2"
          onChange={handleSelect}
          checked={select === 2}
        />
      </div>

      <div className="ratingList">
        <span>3</span>
        <input
          type="radio"
          name="rating"
          value="3"
          onChange={handleSelect}
          checked={select === 3}
        />
      </div>

      <div className="ratingList">
        <span>4</span>
        <input
          type="radio"
          name="rating"
          value="4"
          onChange={handleSelect}
          checked={select === 4}
        />
      </div>

      <div className="ratingList">
        <span>5</span>
        <input
          type="radio"
          name="rating"
          value="5"
          onChange={handleSelect}
          checked={select === 5}
        />
      </div>

      <div className="ratingList">
        <span>6</span>
        <input
          type="radio"
          name="rating"
          value="6"
          onChange={handleSelect}
          checked={select === 6}
        />
      </div>

      <div className="ratingList">
        <span>7</span>
        <input
          type="radio"
          name="rating"
          value="7"
          onChange={handleSelect}
          checked={select === 7}
        />
      </div>

      <div className="ratingList">
        <span>8</span>
        <input
          type="radio"
          name="rating"
          value="8"
          onChange={handleSelect}
          checked={select === 8}
        />
      </div>

      <div className="ratingList">
        <span>9</span>
        <input
          type="radio"
          name="rating"
          value="9"
          onChange={handleSelect}
          checked={select === 9}
        />
      </div>

      <div className="ratingList">
        <span>10</span>
        <input
          type="radio"
          name="rating"
          value="10"
          onChange={handleSelect}
          checked={select === 10}
        />
      </div>
    </div>
  );
};

export default Rating;
