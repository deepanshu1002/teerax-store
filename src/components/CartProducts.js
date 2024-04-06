import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../utils/cartSlice";

const CartProducts = ({ product, total }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { imageURL, price, name, quantity, id } = product;
  useEffect(() => {
    total(price);
  }, []);
  const handleSubstract = () => {
    if (qty > 1) {
      setQty(qty - 1);
      total(-price);
    }
  };
  const handleAdd = () => {
    if (qty < quantity) {
      setQty(qty + 1);
      total(price);
    } else alert("Item quantity limit has exceeded");
  };
  const handleDelete = () => {
    dispatch(deleteFromCart(id));
    total(-qty * price);
  };
  return (
    <div className="flex gap-12 mb-2">
      <div>
        <img className="w-36 p-2 border-[1px]" alt="product" src={imageURL} />
      </div>
      <div className="mt-8 w-24">
        <h1 className="font-bold">{name}</h1>
        <h3> Rs. {price}</h3>
      </div>
      <div className="mt-8">
        <button
          className="w-5 border-[1px] mr-1 rounded-md m"
          onClick={handleSubstract}
        >
          -
        </button>
        {qty}
        <button
          onClick={handleAdd}
          className="w-5 ml-1 border-[1px] rounded-md"
        >
          +
        </button>
      </div>
      <div className="mt-8">
        <button
          className="px-2  py-1 bg-gray-500  rounded-md hover:bg-gray-400"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
