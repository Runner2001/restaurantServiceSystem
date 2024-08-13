import React, { useContext } from "react";
import Navigation from "../components/Navigation";
import CartBody from "../components/CartBody";
import CartContext from "../context/CartContext";
import TableContext from "../context/TableContext";
import OrderFooter from "../components/OrderFooter";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const { addOrderToTable, table } = useContext(TableContext);

  const handlePlaceOrder = () => {
    if (table.tableNo) {
      addOrderToTable(cart);
      dispatch({ type: "CLEAR_CART" });
      alert(`Order placed for table ${table.tableNo}`);
    } else {
      alert("Table number is not set");
    }
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

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
    <div>
      <Navigation leftIcon={true} routeName={"Cart"} routeBody={"Table-T12"} />
      <CartBody
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full">
          <OrderFooter
            buttonText={"Order"}
            getTotalPrice={getTotalPrice}
            handleAction={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
