import React from "react";
import OrderItem from "./OrderItem";

const OrderItems = () => {
  const orderItems = [
    {
      quantity: 1,

      name: "Ankimo Ponzu",

      details: "Less Spicy, No MSG, No Vege, Medium Rare,",

      price: "15,000 Ks",

      addons: [
        { quantity: 1, name: "Kani Kama (5pcs)", price: "4,500 Ks" },

        { quantity: 1, name: "Cherry Tomato (5pcs)", price: "4,500 Ks" },
      ],
    },

    {
      quantity: 2,

      name: "Spicy Hotate",

      details: "Less Spicy, No MSG, No Vege, Medium Rare,",

      price: "7,700 Ks",
    },

    {
      quantity: 1,

      name: "Strawberry Ice-cream (200ml)",

      price: "1,500 Ks",
    },
  ];
  return (
    <section className="flex flex-col gap-3 px-4 py-3 w-full mt-[124px]">
      {orderItems.map((item, index) => (
        <OrderItem key={index} {...item} />
      ))}
    </section>
  );
};

export default OrderItems;
