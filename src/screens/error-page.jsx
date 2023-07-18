import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex flex-col pt-8">
          <section>
            <h1 className="text-3xl text-red-600">Something went wrong</h1>
          </section>
          <section className="pt-8">
            <h2>Sorry, we couldn't link you to the the requested page</h2>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
