import React from "react";
import Image from "next/image";
import UploadImage from "@/app/assets/upload.svg";

const FileUploader = ({ uploadText }: any) => {
  return (
    <main className="h-fit w-full rounded-xl   border-[1px] border-[#948D8D] bg-[#F6F4F4] py-14 shadow-md">
      <section className="flex flex-col items-center justify-center gap-y-4">
        <div>
          <Image src={UploadImage} alt="" />
        </div>
        <p className="text-center font-semibold text-[#6e424280] md:w-[40%]">
          {uploadText}
        </p>
      </section>
      <h3 className="px-6 pt-5 font-bold">Add Image</h3>
    </main>
  );
};

export default FileUploader;
