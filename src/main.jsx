import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./screens/error-page.jsx";
import Dashboard from "./screens/Dashboard.jsx";

import AppsMains from "./screens/AppsMain.jsx";
import ArticleOutline from "./screens/ArticleOutline.jsx";

const router = createBrowserRouter([
  {
    path: "/articleoutline_gen",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articleoutline_gen/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/articleoutline_gen/dashboard",
        element: <AppsMains />,
      },
      {
        path: "/articleoutline_gen/dashboard/outline",
        element: <ArticleOutline/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
