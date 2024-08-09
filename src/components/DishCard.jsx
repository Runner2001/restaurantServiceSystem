import React from "react";

function DishCard({ imageSrc, title, price, iconSrc }) {
  return (
    <article className="flex relative flex-col pb-2 w-60">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain z-0 self-center w-60 max-w-full rounded aspect-[1.33]"
      />

      <div className="flex z-0 flex-col mt-2 w-full">
        <h3 className="text-base font-semibold text-black">{title}</h3>

        <p className="mt-1 text-sm leading-none text-zinc-900">{price}</p>
      </div>

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
    </article>
  );
}

export default DishCard;
