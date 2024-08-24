import React, { useContext } from "react";
import OrderItems from "../components/OrderItems";
import OrderFooter from "../components/OrderFooter";
import Navigation from "../components/Navigation";
import TableContext from "../context/TableContext";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading/Loading";

const OrderDetail = () => {
  const { tableNo } = useParams();
  const navigate = useNavigate();

  const apiCallBody = {
    table_id: tableNo,
  };
  const {
    data: orderData,
    loading,
    error,
  } = useFetch(`all_orders`, apiCallBody);

  const handleAction = () => {
    navigate(`/table/${tableNo}/`);
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white">
      <Navigation
        leftIcon={false}
        routeName={`Table Number: ${tableNo}`}
        routeBody={"Order Details"}
      />
      <div className="w-full">
        <OrderItems orderList={orderData?.orders || []} />
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <OrderFooter getTotalPrice={orderData.orders[0].total_price} />
      </div>
    </div>
  );
};
export default OrderDetail;
