import React from "react";
import "./stylesIngredient.scss";

const Ingredient = (props) => {
  switch (props.id) {
    case "bread-top":
      return (
        <div className="bread-top ingredient">
          {/* <div className="seeds1"></div>
                    <div className="seeds2"></div>
                    <div className="seeds1"></div> */}
        </div>
      );
    default:
      return (
        <div
          onClick={() => props.onClick()}
          className={`ingredient ${props.id}`}
        ></div>
      );
  }
};

export default Ingredient;
