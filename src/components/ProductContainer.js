import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const products = useSelector((store) => store.products.products);
  if (!products) return;
  console.log(products[0]);

  return (
    <div className="flex flex-wrap gap-2 ml-10 pl-48">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
