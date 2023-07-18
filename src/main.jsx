import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./screens/error-page.jsx";
import HomePage from "./screens/HomePage.jsx";
import SignIn from "./screens/SignIn.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import SignUp from "./screens/SignUp.jsx";
import About from "./screens/About.jsx";
import Products from "./screens/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/articleoutline_gen/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/articleoutline_gen/", element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
