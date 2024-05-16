import React from "react";
import { MdPhotoLibrary } from "react-icons/md";

const Card = ({ text }: { text: string }) => {
  return (
    <div className="h-[274px] w-[260px] rounded-md bg-[#E0E0E0]">
      <div className="flex h-4/5 w-full items-center justify-center text-[80px]">
        <MdPhotoLibrary />
      </div>
      <span className="bg-#D9D9D9 flex h-[20%] items-center justify-center border-[1px] border-black">
        {text}
      </span>
    </div>
  );
};

export default Card;
