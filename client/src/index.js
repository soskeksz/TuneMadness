import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";

import TuneList from "./Pages/TuneList";
import TuneCreator from "./Pages/TuneCreator"
import TuneUpdater from "./Pages/TuneUpdater";

import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TuneList />,
      },
      {
        path: "/create",
        element: <TuneCreator />
      },
      {
        path: "/update/:id",
        element: <TuneUpdater/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
