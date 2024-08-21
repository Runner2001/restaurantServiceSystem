import React from "react";
import StandardButton from "./StandardButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TableContext from "../context/TableContext";

const CartEmptyState = () => {
  const { table } = useContext(TableContext);
  return (
    <div className="flex flex-col justify-center items-center w-full text-center h-[100vh]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28db9e64751878f52cd8787bfe903e564569ce9b537c52abfc6502701e2cb639?apiKey=f0e68d8797cf41d7b36c17f698ec0091&&apiKey=f0e68d8797cf41d7b36c17f698ec0091"
        alt=""
        className="object-contain w-52 max-w-full aspect-[1.04]"
      />
      <section className="flex flex-col items-center mt-6 max-w-full w-[231px]">
        <h1 className="text-xl font-medium leading-7 text-black mb-6">
          Your bag is empty. Let's start an order!
        </h1>
        <Link to={`/table/${table.tableNo}/`}>
          <StandardButton buttonText={"Start Order"} />
        </Link>
      </section>
    </div>
  );
};

export default CartEmptyState;
