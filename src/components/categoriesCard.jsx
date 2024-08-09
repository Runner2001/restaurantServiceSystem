import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ id, imageUrl, name }) => {
  return (
    <Link className="flex flex-col w-32" to={`/category/${id}`}>
      <div className="flex flex-col justify-center items-center px-4 w-32 h-32 bg-gray-50 rounded-lg min-h-[128px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={name}
          className="object-contain flex-1 w-full aspect-square"
        />
      </div>

      <h2 className="p-2 w-full text-sm font-medium text-center whitespace-nowrap text-zinc-900">
        {name}
      </h2>
    </Link>
  );
};

export default CategoriesCard;
