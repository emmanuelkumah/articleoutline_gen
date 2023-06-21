import React from "react";
import { assets } from "../utils/images";
import { homeProducts } from "../utils/productsData";
import SingleProduct from "./UI/SingleProduct";
import { Button } from "flowbite-react";

const Main = () => {
  return (
    <>
      <main className="px-10">
        <div>
          <section className="mx-auto">
            <h2 className="main_heading_gradient">The Writers toolkit</h2>
            <p className="mt-3 text-xl leading-lose font-thin md:px-[20%] md:text-lg  md:text-center">
              Seamlessly create seo optimized and high quality content. Let our
              AI assist with most time consuming to write blog articles, product
              descriptions,summarize article and more.
            </p>
          </section>
          <section>
            <article className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-[5%]">
              {homeProducts.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </article>
          </section>
        </div>

        <div className="mt-[10%]">
          <section>
            <h2 className="main_heading_gradient text-center pb-5">
              Work smarter, not harder
            </h2>
            <p className="text-2xl text-center font-thin pb-7">
              Avoid thinking so hard to write quality content
            </p>
          </section>

          <video controls>
            <source src={assets[0]} type="video/mp4" />
          </video>
          <div className="flex justify-center mt-6 cursor-pointer">
            <Button className="app_button">Try it out for free</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
