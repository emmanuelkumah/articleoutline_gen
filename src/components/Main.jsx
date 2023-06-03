import React from "react";
import { BsBook, BsPen } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { assets } from "../utils/images";

const Main = () => {
  return (
    <>
      <main className="px-10 mt-10">
        <div className="flex flex-col md:grid grid-cols-2">
          <section>
            <h2 className="main_heading_gradient">The Writers toolkit</h2>
            <p className="mt-6 text-3xl leading-lose font-thin md:text-7xl">
              Seamlessly create seo optimized and high quality content for your
              article, magazines, and website
            </p>
          </section>
          <section>
            <h2 className="main_heading_gradient">Products</h2>

            <div>
              <h3 className="product_title">
                <p className="product_icon">
                  <BsBook />
                </p>
                Article Outline Generator
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem cumque molestiae, distinctio quaerat iusto laborum
                eos voluptas facilis reiciendis id repellat ipsum dolores cum
                sapiente, molestias ea sit fugit!
              </p>
            </div>

            <div>
              <div className="product_title">
                <p className="product_icon">
                  <BsPen />
                </p>
                <h3>Article Idea Generator</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                odio adipisci recusandae officia, rerum illo deserunt nemo ad
                reiciendis molestiae. Aut fugiat sapiente ex facilis omnis? Est
                quidem repudiandae sint!
              </p>
            </div>
            <div>
              <div className="product_title">
                <p className="product_icon">
                  <FaRegNewspaper />
                </p>
                <h3>Paragraph Summarizer</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quia sed fuga consectetur corrupti aliquam molestias
                consequuntur recusandae minus facilis, ducimus distinctio
                laborum sit sapiente. Modi a blanditiis quia odio.
              </p>
            </div>
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
            <source src={assets[4]} type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
};

export default Main;
