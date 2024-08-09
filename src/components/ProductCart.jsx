import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCart = ({ id, imageSrc, title, price, iconSrc }) => {
  return (
    <Link className="relative rounded-lg overflow-hidden" to={`/dish/${id}`}>
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full object-cover"
        layoutId={`dish-image-${id}`} // Add this line
      />
      <motion.div className="flex z-0 flex-col pt-2 pb-2 w-full">
        <h3 className="text-base font-semibold text-black">{title}</h3>
        <p className="mt-1 text-sm leading-none text-zinc-900">{price}</p>
      </motion.div>
      {iconSrc && (
        <div
          className="flex absolute right-2 z-0 gap-2 items-start p-1.5 w-8 h-8 bottom-[67px] rounded-[50px]"
          style={{ backgroundColor: "#1C8A43" }}
        >
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain w-5 aspect-square"
          />
        </div>
      )}
    </Link>
  );
};

export default ProductCart;
