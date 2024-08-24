import React, { useContext, useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import CartBody from "../components/CartBody";
import OrderFooter from "../components/OrderFooter";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import { API_URL } from "../services/API_URL";

const Cart = () => {
  const { tableNo } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  //table_id and item_id
  const apiCallBody = {
    table_id: tableNo,
  };
  const { data: cartData, loading, error } = useFetch(`all_carts`, apiCallBody);

  useEffect(() => {
    if (cartData) {
      setCart(cartData);
    }
  }, [cartData]);

  const handlePlaceOrder = () => {
    axios
      .post(`${API_URL}/orders`, {
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

  const updateCart = async (id, newQuantity) => {
    const data = new URLSearchParams();
    data.append("id", id);
    data.append("quantity", newQuantity);

    try {
      const response = await axios.put(`${API_URL}/carts`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(response.data);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQuantity = (id, newQuantity) => {
    updateCart(id, newQuantity);
  };

  const decreaseQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateCart(id, newQuantity);
    }
  };

  const deleteItem = (id) => {
    const deleteCard = async (id) => {
      const data = new URLSearchParams();
      data.append("cart_id", id);

      try {
        const response = await axios.delete(`${API_URL}/carts`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: data,
        });
        console.log(response.data);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };
    deleteCard(id);
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
        deleteItem={deleteItem}
      />
      {cartData.carts.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full">
          <OrderFooter
            buttonText={"Place Order"}
            getTotalPrice={parseInt(cartData.total_price)}
            handleAction={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
