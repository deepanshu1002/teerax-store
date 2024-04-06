import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/productSlice";

const Searchbar = () => {
  const products = useSelector((store) => store.products.products);
  const [allProducts, setAllProducts] = useState(null);
  const dispatch = useDispatch();
  const search = useRef();
  useEffect(() => {
    if (!allProducts) setAllProducts(products);
  }, [products]);
  const handleClick = () => {
    dispatch(
      getProducts(
        allProducts.filter(
          (product) =>
            product.name
              ?.toLowerCase()
              .includes(search.current.value.toLowerCase()) ||
            product.colour
              ?.toLowerCase()
              .includes(search.current.value.toLowerCase()) ||
            product.type
              ?.toLowerCase()
              .includes(search.current.value.toLowerCase())
        )
      )
    );
  };

  return (
    <div className="ml-[42%] mt-4">
      <input
        ref={search}
        className="border-[1px] rounded p-2 "
        type="text"
        placeholder="Search for products.."
      />
      <button onClick={handleClick} className="py-2 ml-3 border-[1px] px-3">
        search
      </button>
    </div>
  );
};

export default Searchbar;
