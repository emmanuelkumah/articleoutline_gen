import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <section>
        <h2>Oops!</h2>
        <p>Sorry an unexpected error has occured</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
