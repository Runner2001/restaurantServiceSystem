import React from "react";
import OrderItem from "./OrderItem";

const OrderItems = ({ orderList }) => {
  return (
    <section className="flex flex-col gap-3 pt-3 mt-[124px]">
      {orderList.map((order, orderIndex) => (
        <div key={orderIndex} className="flex flex-col gap-3 px-4 w-full">
          {order.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default OrderItems;
