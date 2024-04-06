import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../utils/productSlice";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const getProductDetails = async () => {
    try {
      const data = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const json = await data.json();
      dispatch(getProducts(json));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductDetails();
  }, []);
};

export default useGetProducts;
