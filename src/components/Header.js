import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-screen h-16 bg-blue-200 flex justify-between items-center px-7 fixed">
      <div className="text-3xl text-bold ">
        <Link to="/">
          <h1 className=""> Teerex Store</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/">
          <h3 className="mr-6 text-2xl">Products</h3>
        </Link>
        <Link to="/cart">
          <div className="mr-6 relative">
            🛒
            <div className="absolute font-bold -top-2 -right-2">
              {cartItems.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
