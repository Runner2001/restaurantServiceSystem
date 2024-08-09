import React from "react";
import DishDetail from "./DishDetail";
import DishInstruction from "../components/DishInstruction";
import DishAddons from "../components/DishAddons";
import DishSpecialInstruction from "./DishSpecialInstruction";

const ProductData = ({ dish }) => {
  return (
    <React.Fragment>
      <DishDetail dish={dish} />
      <DishInstruction />
      <DishAddons />
      <DishSpecialInstruction />
    </React.Fragment>
  );
};

export default ProductData;
