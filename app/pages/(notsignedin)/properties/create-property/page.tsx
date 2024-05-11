import React from "react";
import PropertyDetails from "./PropertyDetails";
import PropertyMediaFiles from "./PropertyMediaFiles";

const CreateProperty = () => {
  return (
    <main className="pt-40">
      <header className="flex flex-col gap-y-6 pb-24 text-center ">
        <h1 className="text-3xl font-extrabold ">UPLOAD PROPERTY</h1>
        <p className="font-medium text-[#948D8D]">
          All data are automatically saved
        </p>
        <div className=" flex justify-center  items-center">
          <span
            className={`h-[30px] w-[30px] rounded-[50%] bg-[#E8E3E3]`}
          ></span>
          <span className="w-[30%] border-4 border-[bg-[#E8E3E3]]"></span>
          <span
            className={`h-[70px] w-[70px] rounded-[50%] bg-[#F6901B]`}
          ></span>
        </div>
      </header>

      <section>
        <PropertyMediaFiles />
      </section>
    </main>
  );
};

export default CreateProperty;
