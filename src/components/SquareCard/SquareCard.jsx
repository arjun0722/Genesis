import React, { useEffect, useState } from "react";
import "./SquareCard.css";
import dataArray from "./squareData";

const SquareCard = () => {
  const [iscardChecked, SetIsCardChecked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleOnClick = (index) => {

    SetIsCardChecked({
      ...iscardChecked,
      [index] : iscardChecked[index]=== true ? false : true
    });
  };



  return (
    <div className="cards-box">
      {dataArray.map((data, index) => {
        return (
          <div  className={`card-container${
            iscardChecked[index] === true ? "active" : ""
          }`} onClick={() => handleOnClick(index)}>
            <div
              key={index}
              className={`individual-card${
                iscardChecked[index] === true ? "active" : ""
              }`}
            >
              <span className="logo-text">{data.logoText}</span>
              <div
                className="image-container"
                onClick={() => console.log(`Clicked on Image ${index + 1}`)}
              >
                <img
                  src={
                    data.imageSrc2 
                  }
                  alt="Image"
                  className="image"
                />
              </div>
              <p 
              className={`text-below-image${
                iscardChecked[index] === true ? "active" : ""
              }`}>{data.textBelowImage}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SquareCard;
