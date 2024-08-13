import React, { useContext } from "react";
import OrderItems from "../components/OrderItems";
import OrderFooter from "../components/OrderFooter";
import Navigation from "../components/Navigation";
import CartContext from "../context/CartContext";
import TableContext from "../context/TableContext";

const OrderDetail = () => {
  const { table } = useContext(TableContext);
  const { orderList } = table;
  console.log("Current Order List:", table.orderList);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalPrice = () => {
    return orderList.reduce((total, order) => {
      return (
        total +
        order.reduce((orderTotal, item) => {
          return orderTotal + parsePrice(item.price) * item.quantity;
        }, 0)
      );
    }, 0);
  };
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
      <Navigation
        leftIcon={false}
        routeName={"Order Number: 20"}
        routeBody={"Wed 22 Nov 12:19PM"}
      />
      <div className="w-full">
        <OrderItems orderList={table.orderList} />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <OrderFooter buttonText={"Check Out"} getTotalPrice={getTotalPrice} />
      </div>
    </div>
  );
};

export default OrderDetail;
