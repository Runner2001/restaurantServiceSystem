import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductData from "../components/ProductData";
import DishFooter from "../components/DishFooter";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import Loading from "../components/Loading/Loading";
import axios from "axios";

const ProductDetail = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { dishId, tableNo } = useParams();
  const navigate = useNavigate();
  const { data: dish, loading, error } = useFetch(`items/${dishId}`);
  const dishDetail = dish.data || {};
  const [qty, setQty] = useState(1);

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
    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: {
    //     id: dish.id,
    //     title: dish.title,
    //     price: dish.price,
    //     imageSrc: dish.imageSrc,
    //     quantity: qty,
    //   },
    // });
    axios
      .post("http://192.168.45.41:8000/api/carts", {
        table_id: tableNo,
        item_id: dishId,
        quantity: qty,
        special_request: "The customer is allergic to nuts.",
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        alert("Error sending data:", error);
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
          <img
            src={dishDetail.photo}
            layoutid={`dish-image-${dishDetail.id}`}
          />
          <ProductData dish={dishDetail} />
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
