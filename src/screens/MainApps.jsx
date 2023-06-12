import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { assets } from "../utils/images";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { BsClipboardCheck, BsPen } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

const MainApp = () => {
  return (
    <>
      <div>
        <Layout>
          <section>
            <div class="py-8 px-5 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="flex">
                <div className="w-[30%]">
                  <img src={assets[6]} />
                </div>
                <h2 className="text-2xl font-thin">
                  <span className="text-3xl font-semibold">Heya !!</span>, so
                  what exactly do you want to create
                </h2>
              </div>
              <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="sub_heading_gradient">
                  Explore our most commonly used tools
                </h2>
                <p>Let's turn your ideas into content</p>
              </div>
              <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <Link to="/app/outline">
                  <div className="border-4 border-sky-500 rounded-xl p-4 my-8 hover:border-emerald-500">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <FaRegNewspaper />
                    </div>
                    <h3 class="mb-2 text-xl font-bold">Artilce Outline</h3>
                    <p>
                      Generate outline of article in seconds, using our powerful
                      AI outline generator
                    </p>
                  </div>
                </Link>
                <Link to="/app/ideas">
                  <div className="border-4 border-sky-500 rounded-lg p-4 my-8 hover:border-emerald-500">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <FaRegNewspaper />
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">
                      Article Ideas
                    </h3>
                    <p>
                      Need an idea for you next article? We help you generate
                      multiple article ideas swiftly
                    </p>
                  </div>
                </Link>
                <Link to="/app/summary">
                  <div className="border-4 border-sky-500 rounded-lg p-4 my-8 hover:border-emerald-500">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <BsPen />
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">
                      Paragraph Rewrite
                    </h3>
                    <p>
                      Rephrase the meaning of a text or passage whiles
                      maintaining the context
                    </p>
                  </div>
                </Link>

                <Link to="/app/grammer">
                  <div className="border-4 border-sky-500 rounded-lg p-4 my-8 hover:border-emerald-500">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <BsClipboardCheck />
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">
                      Grammer check
                    </h3>
                    <p>
                      Instantly check and correct the grammar in your article
                    </p>
                    <button className="bg-sky-500 px-3 py-2 rounded-lg mt-5 hover:bg-emerald-300 hover:text-slate-800">
                      Get Started
                    </button>
                  </div>
                </Link>
                <Link to="/app/copy">
                  <div className="border-4 border-sky-500 rounded-lg p-4 my-8 hover:border-emerald-500">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <AiOutlineCopy />
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">
                      Copy writer
                    </h3>
                    <p>Generate promotional copy for your product </p>
                    <button className="bg-sky-500 px-3 py-2 rounded-lg mt-5 hover:bg-emerald-300 hover:text-slate-800">
                      Get Started
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default MainApp;
