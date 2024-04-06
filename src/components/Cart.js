import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";
import { useState } from "react";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartIdArray = useSelector((store) => store.cart.items);
  const products = useSelector((store) => store.products.products);
  const cartProducts = products?.filter((product) =>
    cartIdArray.includes(product.id)
  );
  const totalPrice = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  };
  if (!cartProducts) return;

  return (
    <div className="flex justify-center">
      <div className="pt-24 flex">
        <div>
          {cartProducts.map((cartProduct) => (
            <CartProducts
              key={cartProduct.id}
              product={cartProduct}
              total={totalPrice}
            />
          ))}
        </div>
        <div className="text-2xl ml-20 border-[1px] h-10 py-1 px-2 ">
          <h1>Total : {total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
