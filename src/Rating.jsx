import React, { useState } from "react";

const Rating = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleRating = (value) => {
    setActiveBox(value);
  };

  return (
    <>
      <div className="rating-div">
        <div
          className={activeBox > 0 && "bg-y"}
          onClick={() => handleRating(1)}
        ></div>
        <div
          className={activeBox > 1 && "bg-y"}
          onClick={() => handleRating(2)}
        ></div>
        <div
          className={activeBox > 2 && "bg-y"}
          onClick={() => handleRating(3)}
        ></div>
        <div
          className={activeBox > 3 && "bg-y"}
          onClick={() => handleRating(4)}
        ></div>
        <div
          className={activeBox > 4 && "bg-y"}
          onClick={() => handleRating(5)}
        ></div>
      </div>
    </>
  );
};

export default Rating;
