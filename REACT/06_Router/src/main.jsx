import { createBrowserRouter, Link, RouterProvider } from "react-router";
import Card from "./components/card";
import Workers from "./components/loadworkers";
import List from "./components/list";
import Array from "./components/loadlist";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>Hello World</div>
        <div className="flex gap-5">
          <Link to="/card">Card</Link>
          <Link to="/list">List</Link>
        </div>
      </>
    ),
  },
  {
    path: "/card",
    element: <Card workers={Workers} />,
  },
  {
    path: "/list",
    element: <List array={Array} />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
