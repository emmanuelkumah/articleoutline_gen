import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./screens/error-page.jsx";
import HomePage from "./screens/HomePage.jsx";
import SignIn from "./screens/SignIn.jsx";
import DashboardRootLayout from "./screens/DashboardRootLayout.jsx";
import SignUp from "./screens/SignUp.jsx";
import About from "./screens/About.jsx";
import Products from "./screens/Products.jsx";
import AppsMain from "./screens/AppsMain.jsx";
import Outliner from "./screens/Outliner.jsx";

const router = createBrowserRouter([
  {
    path: "/articleoutline_gen/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "/articleoutline_gen/dashboard",
    element: <DashboardRootLayout />,
    children: [
      { path: "", element: <AppsMain /> },
      {
        path: "outline",
        element: <Outliner />,
      },
      {
        path: "grammar",
        element: <h1>Grammar goes here</h1>,
      },
      {
        path: "phrase",
        element: <h1>Phrase rewrite goes here</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
