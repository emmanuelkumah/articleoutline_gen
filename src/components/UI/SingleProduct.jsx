import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <article className="bg-cyan-900 rounded-lg  p-10">
        <div className="flex gap-4 mb-4">
          <img src={product.icon} className="w-[10%]" />

          <h2 className="text-2xl font-thin">{product.heading}</h2>
        </div>

        <p>{product.desc}</p>
      </article>
    </div>
  );
};

export default SingleProduct;
