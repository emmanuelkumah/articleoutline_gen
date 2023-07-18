import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <section>
        <h2>Sorry, we couldn't link you to the the requested page</h2>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
