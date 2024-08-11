import React from "react";
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductData from "../components/ProductData";
import DishFooter from "../components/DishFooter";
import useFetch from "../hooks/useFetch";
import CartContext from "../context/CartContext";
import { motion } from "framer-motion";
import Loading from "../components/Loading/Loading";

const ProductDetail = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { dishId } = useParams();
  const { data: dish, loading, error } = useFetch(`/dishDetail-${dishId}.json`);
  const [qty, setQty] = useState(1);
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const itemId = parseInt(dishId, 10);
    const cartItem = cart.find((item) => item.id === itemId);

    if (cartItem) {
      setQty(cartItem.quantity);
    } else {
      setQty(1);
    }
  }, [dishId, cart]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const increaseQuantity = () => {
    setQty((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQty((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: dish.id,
        title: dish.title,
        price: dish.price,
        imageSrc: dish.imageSrc,
        quantity: qty,
      },
    });
    navigate(-1);
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <React.Fragment>
      <motion.main className="bg-slate-100">
        <div
          className={`fixed w-full left-0 top-0 z-20 ${
            hasScrolled
              ? "shadow-custom-shadow bg-white"
              : "shadow-none bg-none"
          }`}
        >
          <Header leftIcon={false} />
        </div>
        <section className="flex relative flex-col pb-[88px] w-full aspect-[1.777]">
          <img src={dish.imageSrc} layoutId={`dish-image-${dish.id}`} />
          <ProductData dish={dish} />
        </section>
        <section className="fixed bottom-0 left-0 w-full">
          <DishFooter
            addToCart={addToCart}
            quantity={qty}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </section>
      </motion.main>
    </React.Fragment>
  );
};

export default ProductDetail;
