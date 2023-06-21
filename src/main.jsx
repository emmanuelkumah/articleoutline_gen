import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./screens/error-page.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import ArticleOutline from "./screens/ArticleOutline.jsx";
import AppsMains from "./screens/AppsMain.jsx";
import Grammar from "./screens/Grammar.jsx";
import Copy from "./screens/Copy.jsx";
import Socials from "./screens/Socials.jsx";
import Rewrite from "./screens/Rewrite.jsx";
import Ideas from "./screens/Ideas.jsx";

const router = createBrowserRouter([
  {
    path: "/articleoutline_gen",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articleoutline_gen/dashboard",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "/dashboard",
    //     element: <AppsMains />,
    //   },
    //   {
    //     path: "/dashboard/app/outline",
    //     element: <ArticleOutline />,
    //   },
    //   {
    //     path: "/dashboard/app/grammar",
    //     element: <Grammar />,
    //   },
    //   {
    //     path: "/dashboard/app/copy",
    //     element: <Copy />,
    //   },
    //   {
    //     path: "/dashboard/app/socials",
    //     element: <Socials />,
    //   },
    //   {
    //     path: "/dashboard/app/rewrite",
    //     element: <Rewrite />,
    //   },
    //   {
    //     path: "/dashboard/app/ideas",
    //     element: <Ideas />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
