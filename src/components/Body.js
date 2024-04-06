import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Body = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Body;
