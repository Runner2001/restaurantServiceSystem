import React, { useContext, useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CartBody from "../components/CartBody";
import TableContext from "../context/TableContext";
import OrderFooter from "../components/OrderFooter";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";

const Cart = () => {
  const { tableNo } = useParams();
  const [cart, setcart] = useState();
  const navigate = useNavigate();

  //table_id and item_id
  const apiCallBody = {
    table_id: tableNo,
  };
  const { data: cartData, loading, error } = useFetch(`all_carts`, apiCallBody);

  useEffect(() => {
    if (cartData) {
      setcart(cartData);
    }
  }, [cartData]);

  // console.log("This is useState Cart:", cart);
  console.log("This is API Cart:", cartData);

  const handlePlaceOrder = () => {
    axios
      .post("http://192.168.45.53:8000/api/orders", {
        table_id: tableNo,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        alert("Error sending data:", error);
      });

    navigate(`/table/${tableNo}`);
  };

  const increaseQuantity = (id) => {
    // dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    // dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Navigation leftIcon={true} routeName={"Cart"} routeBody={"Table-T12"} />
      <CartBody
        cart={cartData.carts}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      {cartData.carts.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full">
          <OrderFooter
            buttonText={"Order"}
            getTotalPrice={parseInt(cartData.total_price)}
            handleAction={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
