"use client"
import React, { useState } from "react";
import Button from "@/app/components/ui/buttons";
import arrow from "@/app/assets/arrowup.svg";
import Image from "next/image";
import BlogEditor from "./BlogEditor";
import { CheckCard } from "@/app/components/checker-card";
import styles from "./createblog.module.css"

const Blog = () => {
  const greyBg: string = "bg-[#f6f4f4] text-[#948d8d] p-3 border-[0.5px] border-[#948D8D] rounded-[10px]"

  interface CheckedCard {
    title: string;
    options: any;

  }
  const tags: CheckedCard = {
    title: "Tags",
    options: ["Real Estate", "Real Estate", "Real Estate", "Real Estate", "Real Estate"]
  }
  const categories: CheckedCard = {
    title: "Categories",
    options: ["Real Estate", "Real Estate", "Real Estate", "Real Estate", "Real Estate"]
  }


  const [blogBody, setBlogBody] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  return (
    <div className="pt-28 px-[5rem]">
      <header className="text-center ">
        <h1 className="font-bold text-[28px] leading-[24px] pb-4">
          BLOG / POST / CREATE POST
        </h1>
        <p className="py-5 pb-8 ">All data are automatically saved</p>
        <div className="flex justify-between">
          <div></div>
          <p className="bg-[#948D8D] text-white py-3 px-8 border-[0.5px] border-[#948D8D] rounded-[5px] text-center float-right mb-8">EDIT</p>
          </div>
      </header>
      <main>
        <div className="flex justify-between gap-8 flex-col md:flex-row">
          <div className="md:w-[60%] flex flex-col gap-8">
          <h2 className="font-bold text-[28px] leading-[24px] pb-4">ADD NEW POST</h2>
            <input type="text" name="" id="title" placeholder="Enter Title here" className={`${greyBg} w-full px-8 flex justify-between`} value={title} onChange={(e) => setTitle(e.target.value)}/>
            <BlogEditor blogBody={blogBody} setBlogBody={setBlogBody} />
            
            <div className={`${greyBg} w-full px-8 flex justify-between`}>
              <p>Word count: {blogBody.length}</p>
              <p>Drasft saved at 7:34:26pm</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:w-[40%]">
            <div className="border-[1.5px] p-3 border-[#948D8D] rounded-[10px]">
              <div className="flex justify-between border-b border-[#D1D1D5] p-3 mb-8">
                <p className="text-black font-semibold text-[22px]">Publish</p>
                <Image src={arrow} alt="" />
              </div>
              <div className="flex justify-between text-[24px]">
                <button className={`${greyBg}`}>
                  Save Draft
                </button>
                <button className={`${greyBg}`}>
                  Preview
                </button>
              </div>
            </div>

            <div className={`${greyBg} h-[87px] flex justify-between items-center`}>
              <button className="text-[#F63C3C] w-[50%] font-semibold text-left">Move to Trash</button>

              <button className="text-white bg-[#023C63] h-[50px] w-[50%] px-8 rounded-[10px]">Publish</button>
            </div>

            <CheckCard head={tags} />
            <div className="border-[1.5px] p-3 border-[#948D8D] rounded-[10px]">
               <div className="flex justify-between border-b border-[#D1D1D5] py-3 px-8">
              <p className="text-black font-semibold text-[22px]">Featured Image</p>
              <Image src={arrow} alt="" />
              </div>
              <div className="flex justify-between p-3">
                <p className="text-[#345ECB]">Set featured Image</p>
              </div>
            </div>

            <CheckCard head={ categories} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
