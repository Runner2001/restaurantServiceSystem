import React, { useContext } from "react";
import OrderItems from "../components/OrderItems";
import OrderFooter from "../components/OrderFooter";
import Navigation from "../components/Navigation";
import TableContext from "../context/TableContext";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const { table } = useContext(TableContext);
  const navigate = useNavigate();

  // Destructure the currentTableData from the table context
  const { currentTableData } = table;

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalPrice = () => {
    return (
      currentTableData?.orders?.reduce((total, item) => {
        return total + parsePrice(item.price) * item.quantity;
      }, 0) || 0
    );
  };

  const handleAction = () => {
    navigate(`/table/${table.tableNo}/`);
  };

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
      <Navigation
        leftIcon={false}
        routeName={`Table Number: ${table.tableNo}`}
        routeBody={"Order Details"}
      />
      <div className="w-full">
        <OrderItems orderList={currentTableData?.orders || []} />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <OrderFooter
          buttonText={"Check Out"}
          getTotalPrice={getTotalPrice}
          handleAction={handleAction}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
