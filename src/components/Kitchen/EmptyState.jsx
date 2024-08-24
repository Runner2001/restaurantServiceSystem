import React from "react";
import { ReactComponent as Kitchen_empty } from "../../svgs/Kitchen_Empty.svg";

const EmptyState = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white h-[100vh] justify-center align-middle items-center">
      <Kitchen_empty />
      <div className="flex flex-col align-middle items-center justify-center gap-2">
        <h3 className="text-3xl font-semibold">Yay! No orders to cook</h3>
        <p className="text-sm font-normal text-gray-500">
          There is no order right now in kitchen.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
