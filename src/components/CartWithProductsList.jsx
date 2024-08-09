import CartWithProduct from "./CartWithProducts";

const CartWithProductsList = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <section className="flex flex-col px-4 py-3 w-full bg-gray-50 mt-[124px]">
      {cart.length !== 0
        ? cart.map((item) => (
            <CartWithProduct
              key={item.id}
              imageSrc={item.imageSrc}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))
        : ""}
    </section>
  );
};

export default CartWithProductsList;
