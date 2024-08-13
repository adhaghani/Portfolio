import React from "react";
import ReactDOM from "react-dom/client";

import "./style/Index/Index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ContextProvider } from "./component/ContextProvider/ContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
