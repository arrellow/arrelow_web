'use client'
import React, { useState } from "react";
import { MdAdd, MdAddAPhoto } from "react-icons/md";

const greyBg: string =
  "bg-[#f6f4f4] text-[#948d8d] p-6 border-[0.5px] border-[#948D8D] rounded-[10px] w-full my-6";

const CreatePost = () => {
  const [propertyImages, setPropertyImages] = useState<any>([])
  const [showDetails, setShowDetails] = useState<boolean>(false)
  return (
    <div>
      <header className="text-center ">
        <h1 className="pb-4 text-[28px] font-bold leading-[24px]">
          UPLOAD PROPERTY
        </h1>
        <p className="py-5 pb-8 ">All data are automatically saved</p>
        {/* <div className="m-auto flex h-[4px] w-[400px] items-center justify-between bg-[#E8E3E3]">
          <div className="h-[80px] w-[80px] rounded-full bg-[#F6901B]"></div>
          <div className="h-[80px] w-[80px] rounded-full bg-[#F6901B]"></div>
        </div> */}
      </header>

      <section className="max-w-[1000px] p-20 pb-28 text-[20px]">
        <form action="">
          <div className={`${!showDetails && "h-0 overflow-hidden"}`}>
            <label htmlFor="category">Category</label> <br />
            <select name="category" id="" className={`${greyBg} `}>
              <option value="bungalow">bungalow</option>
              <option value="duplex">duplex</option>
              <option value="terrace">terrace</option>
              <option value="detached">detached</option>
            </select>
            <label htmlFor="title">Title </label> <br />
            <input
              type="text"
              value={""}
              placeholder="title"
              className={`${greyBg}`}
            />
            <label htmlFor="description">Description </label> <br />
            <textarea
              name="description"
              placeholder="Short Description with house features"
              value={""}
              className={`${greyBg} min-h-[200px]`}
            />
            <label htmlFor="location">Property Location </label> <br />
            <input
              name="location"
              type="text"
              value={""}
              placeholder="Address"
              className={`${greyBg}`}
            />
            <label htmlFor="bedroom-number">Number of Bedrooms </label> <br />
            <input
              name="bedroom-number"
              type="text"
              value={""}
              placeholder="Number of Bedrooms"
              className={`${greyBg}`}
            />
            <label htmlFor="bathroom">Number of Bathrooms </label> <br />
            <input
              name="bathroom"
              type="text"
              value={""}
              placeholder="Number of Bathrooms"
              className={`${greyBg}`}
            />
            <label htmlFor="floors"> Number of Floors</label> <br />
            <input
              name="floors"
              type="text"
              value={""}
              placeholder="Number of Floors"
              className={`${greyBg}`}
            />
            <label htmlFor="size">Square (m2) </label> <br />
            <input
              name="size"
              type="text"
              value={""}
              placeholder="Square (m2)"
              className={`${greyBg}`}
            />
            <label htmlFor="price">Price </label> <br />
            <input
              name="price"
              type="text"
              value={""}
              placeholder="Price in Naira"
              className={`${greyBg}`}
            />
          </div>
          <div className={`${showDetails && "h-0 overflow-hidden"} `}>
            <div className={`${greyBg} text-center`}>
              <MdAddAPhoto className="text-[5rem] text-[#948D8D]" />
            </div>
          </div>
          <p
            className={`mb-8 cursor-pointer rounded-[5px] border-[0.5px] border-[#948D8D] bg-[#948D8D] px-8 py-3 text-center text-white transition-all duration-200 ease-linear hover:scale-95 ${showDetails ? "float-right " : "float-left"}`}
            onClick={() => setShowDetails((prev) => !prev)}
          >
            {showDetails ? "NEXT" : "previous"}
          </p>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
