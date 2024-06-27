import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../pages/index";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
