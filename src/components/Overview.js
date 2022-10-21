
import React from "react";

const Overview = (props) => {
  const { currentScore,bestScore } = props;

  return (
    <div className="scores">
      <p id="para">Your current Score: {currentScore}</p>
      <p>Your Best Score: {bestScore}</p>
    </div>
  );
};

export default Overview;