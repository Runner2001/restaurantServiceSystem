import React from "react";
import OrderItem from "./OrderItem";

const OrderItems = ({ orderList }) => {
  const flattenedOrderList = Array.isArray(orderList) ? orderList.flat() : [];

  return (
    <section className="flex flex-col gap-3 pt-3 mt-[124px]">
      <div className="flex flex-col gap-3 px-4 w-full">
        {flattenedOrderList.map((item, index) => (
          <OrderItem key={item.id || index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OrderItems;
