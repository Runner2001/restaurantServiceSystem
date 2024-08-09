import React, { useContext } from "react";
import OrderItems from "../components/OrderItems";
import OrderFooter from "../components/OrderFooter";
import Navigation from "../components/Navigation";
import CartContext from "../context/CartContext";

const OrderDetail = () => {
  const { cart } = useContext(CartContext);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parsePrice(item.price) * item.quantity,
      0
    );
  };
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
      <Navigation
        leftIcon={false}
        routeName={"Order Number: 20"}
        routeBody={"Wed 22 Nov 12:19PM"}
      />
      <div className="w-full">
        <OrderItems />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <OrderFooter buttonText={"Check Out"} getTotalPrice={getTotalPrice} />
      </div>
    </div>
  );
};

export default OrderDetail;
