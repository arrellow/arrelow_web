import React from "react";
import ItemCard from "./itemcard";
import Subscribe from "./subscribe";
import Pagination from "./pagination";

const Blog = () => {
  return (
    <div className="pt-28">
      <header className="text-center ">
        <h1 className="font-bold text-[28px] leading-[24px] pb-4">Blog Page</h1>
        <p className="py-5 pb-8">
          We bring you helpful news and articles about real estate.
        </p>
      </header>
      <main>
        <ItemCard />
        <Pagination />
        <Subscribe />
      </main>
    </div>
  );
};

export default Blog;
