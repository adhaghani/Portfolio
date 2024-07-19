import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
const Default = () => {
  return (
    <div className="Container ">
      <Navigation />
      <div className="Container P-Top">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Default;
