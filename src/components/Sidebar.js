import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/productSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const [allProducts, setAllProducts] = useState(null);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (!allProducts) setAllProducts(products);
  }, [products]);
  useEffect(() => {
    arr.length === 0
      ? dispatch(getProducts(allProducts))
      : dispatch(getProducts(arr));
  }, [arr]);
  const handleChange = (e, prop, desc) => {
    if (e.target.checked) {
      setArr((prev) => [
        ...prev,
        ...allProducts.filter((product) => product?.[prop] === desc),
      ]);
    } else {
      setArr((prev) => prev.filter((product) => product?.[prop] !== desc));
    }
  };

  return (
    <div className="flex justify-center px-6 mr-10 border-[1px] -mt-20  fixed bg-white">
      <div>
        <h1 className="text-2xl">Colour</h1>
        <div className="flex-col mb-4">
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "color", "Red")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Red
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "color", "Blue")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Blue
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "color", "Green")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg" htmlFor="red">
              Green
            </label>
          </div>
        </div>

        <h1 className="text-2xl">Gender</h1>
        <div className="flex-col mb-4">
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "gender", "Men")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Men
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "gender", "Women")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Women
            </label>
          </div>
        </div>
        <h1 className="text-2xl"> Price</h1>
        <div className="flex-col mb-4">
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "price", 250)}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              0 - Rs 249
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "price", 350)}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Rs 250- Rs 499
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "price", 500)}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Rs 500 and above
            </label>
          </div>
        </div>
        <h1 className="text-2xl">Type</h1>
        <div className="flex-col">
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "type", "Polo")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Polo
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "type", "Hoodie")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Hoodie
            </label>
          </div>
          <div>
            <input
              className="w-4 h-4 align-middle"
              onChange={(e) => handleChange(e, "type", "Basic")}
              type="checkbox"
              id="red"
            />
            <label className="ml-1 align-middle text-lg " htmlFor="red">
              Basic
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
