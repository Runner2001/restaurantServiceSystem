import React from "react";
import CategoriesCard from "./categoriesCard";
import useFetch from "../hooks/useFetch";

const CategoriesList = () => {
  const { data: categories, loading, error } = useFetch("/categories.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="flex gap-2 items-start px-0">
      <div className="flex overflow-x-auto hide-scrollbar flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]">
        <div className="flex gap-2 px-4 items-start">
          {categories.slice(0, 7).map((category, index) => (
            <CategoriesCard key={index} {...category} />
          ))}
        </div>

        <div className="flex gap-2 px-4 items-start mt-2">
          {categories.slice(7).map((category, index) => (
            <CategoriesCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
