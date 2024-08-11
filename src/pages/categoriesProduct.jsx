import React, { useContext } from "react";
import Header from "../components/Header";
import CategoriesImage from "../images/Categorie.png";
import ProductCart from "../components/ProductCart";
import ViewCart from "../components/ViewCart";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CartContext from "../context/CartContext";
import { motion } from "framer-motion";
import Loading from "../components/Loading/Loading";

const CategoriesProduct = () => {
  const { cart } = useContext(CartContext);
  const { categoryId } = useParams();
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch("/categories.json");
  const {
    data: dishes,
    loading: dishesLoading,
    error: dishesError,
  } = useFetch(`/dishes.json`);

  const category = categories.find(
    (category) => category.id === parseInt(categoryId)
  );

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parsePrice(item.price) * item.quantity,
      0
    );
  };

  if (categoriesLoading || dishesLoading) return <Loading />;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;
  if (dishesError) return <div>Error: {dishesError.message}</div>;

  return (
    <React.Fragment>
      <div className="flex flex-col w-full bg-white fixed top-0 left-0 z-10 overflow-hidden h-[112px]">
        <Header />
        <section className="flex gap-1 items-start px-4 pt-1 pb-3 w-full bg-white">
          <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px]">
            <h1 className="text-2xl font-semibold leading-none text-black">
              {category ? category.name : "Category"}
            </h1>
          </div>
        </section>
        <img
          src={CategoriesImage}
          className="absolute bottom-[-24px] right-[-24px] w-[124px]"
        />
      </div>
      <div className="mx-auto p-4 mt-[112px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes[categoryId].map((dish, index) => (
            <ProductCart key={index} {...dish} />
          ))}
        </div>
      </div>
      {cart.length > 0 && (
        <ViewCart cart={cart} getTotalPrice={getTotalPrice} />
      )}
    </React.Fragment>
  );
};

export default CategoriesProduct;
