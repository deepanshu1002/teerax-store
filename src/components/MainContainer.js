import React, { useEffect } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import ProductContainer from "./ProductContainer";
import useGetProducts from "../hooks/useGetProducts";

const MainContainer = () => {
  useGetProducts();
  return (
    <div className="pt-16">
      <Searchbar />
      <div className="flex mt-10">
        <Sidebar />
        <ProductContainer />
      </div>
    </div>
  );
};

export default MainContainer;
