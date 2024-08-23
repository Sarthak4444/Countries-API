import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Main from "./Components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Details from "./Components/CountryDetails/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Main /> }],
  },

  {
    path: "/country",
    element: <App />,
    children: [{ path: "/country", element: <Details /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
