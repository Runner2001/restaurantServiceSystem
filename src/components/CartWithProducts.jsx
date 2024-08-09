import React from "react";
import { ReactComponent as PlusIcon } from "../svgs/plus.svg";
import { ReactComponent as MinusIcon } from "../svgs/minus.svg";

function CartWithProducts({
  id,
  imageSrc,
  name,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="flex overflow-hidden flex-col justify-center py-3.5 w-full">
      <div className="flex gap-2 justify-center items-center w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${name} dish`}
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.33] w-[72px]"
        />

        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-2 justify-center items-center w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <h3 className="text-base font-semibold text-black">{name}</h3>

              <div className="flex items-start mt-1 w-full text-sm leading-none whitespace-nowrap text-zinc-900">
                <span>{price}</span>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center self-stretch my-auto">
              <button
                className="flex flex-col justify-center items-center self-stretch px-1.5 my-auto w-9 h-9 bg-white min-h-[36px] rounded-[91px]"
                aria-label="Decrease quantity"
                onClick={() => decreaseQuantity(id)}
              >
                <MinusIcon />
              </button>

              <div className="self-stretch my-auto w-6 text-base font-medium leading-7 text-center min-w-[24px] text-zinc-900">
                {quantity}
              </div>

              <button
                className="flex flex-col justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-white min-h-[36px] rounded-[91px]"
                aria-label="Increase quantity"
                onClick={() => increaseQuantity(id)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWithProducts;
