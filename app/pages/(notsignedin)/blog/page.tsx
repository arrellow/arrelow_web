import React from "react";
import ItemCard from "./itemcard";
import Subscribe from "./subscribe";
import Pagination from "../../../components/ui/pagination";

const Blog = () => {
  return (
    <div className="pt-28">
      <header className="text-center ">
        <h1 className="pb-4 text-[28px] font-bold leading-[24px]">Blog Page</h1>
        <p className="py-5 pb-8">
          We bring you helpful news and articles about real estate.
        </p>
      </header>
      <main>
        <ItemCard />
       
        <Subscribe />
      </main>
    </div>
  );
};

export default Blog;
