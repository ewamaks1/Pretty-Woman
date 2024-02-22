import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offer from "./components/Offer/Offer.tsx";
import MainPage from "./components/Main Page/MainPage.tsx";
import Gallery from "./components/Gallery/Gallery.tsx";
import PriceList from "./components/Price-list/PriceList.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/price-list",
        element: <PriceList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
