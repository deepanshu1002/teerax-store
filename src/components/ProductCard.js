import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ProductCard = ({ data }) => {
  {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const { name, price, imageURL } = data;
    const handleClick = () => {
      if (!cartItems.includes(data.id)) {
        dispatch(addToCart(data.id));
      } else {
        alert("Already Added");
      }
    };
    return (
      <div className="border-[1px] border-gray-400 w-52 h-[265px] rounded-md">
        <h1 className="font-extrabold text-xl ml-1">{name}</h1>
        <img className="w-48" src={imageURL} />
        <h3 className="inline-block ml-1 font-bold mt-2">Rs. {price}</h3>
        <button
          onClick={handleClick}
          className="bg-gray-500 rounded py-1 px-2 ml-9 hover:bg-gray-400"
        >
          Add to Cart
        </button>
      </div>
    );
  }
};

export default ProductCard;
