import React from "react";

const OrderItem = ({ item }) => {
  const { quantity, title, details, price, addons } = item;
  console.log("This is order Item", item);

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 items-start py-1 w-full">
        <div className="text-sm font-semibold leading-none text-zinc-900">
          {quantity}x
        </div>

        <div className="flex flex-col gap-1 flex-1 shrink justify-center basis-0">
          <div className="text-md font-normal leading-none text-black">
            {title}
          </div>

          {details && (
            <div className="mt-1 text-xs text-gray-500">{details}</div>
          )}
        </div>

        <div className="text-md font-medium leading-none text-right text-black">
          {price}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {addons &&
          addons.map((addon, index) => (
            <div
              key={index}
              className="flex flex-col py-1 pl-6 w-full text-sm leading-none"
            >
              <div className="flex gap-2 justify-center items-start w-full">
                <div className="flex flex-1 shrink gap-2 justify-center items-start basis-0 min-w-[240px] text-zinc-900">
                  <div className="font-semibold">{addon.quantity}x</div>

                  <div className="flex-1 shrink basis-0">{addon.name}</div>
                </div>

                <div className="w-24 font-semibold text-right text-black">
                  {addon.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderItem;
