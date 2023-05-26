import React from "react";
import profilePng from "../../Images/Profile.png";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({ review }) => {
  const options = {
    size: "large",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <span>{review.comment}</span>
      <Rating {...options} />
    </div>
  );
};

export default ReviewCard;
