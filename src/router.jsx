import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";

import Default from "./Layout/Default";

import Home from "./pages/Home/Home";

import About from "./pages/About/About";

import Projects from "./pages/Projects/Projects";

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "*",
        element: <Navigate to="/Home" />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Projects",
        element: <Projects />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: ""
});
