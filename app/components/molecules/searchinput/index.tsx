import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@/app/components/ui/inputs/custominput";
import search from "@/app/assets/blueSearchButton.svg";
import Image from "next/image";

interface searchProps {
  text: string;
}
const SearchInput = ({ className }: any) => {
  const { register, handleSubmit, control } = useForm<searchProps>();
  return (
    <div>
      <div
        className={`flex  min-h-[60px] items-center gap-3 rounded-[5px] bg-white px-6 ${className}`}
      >
        <TextField
          control={control}
          name="text"
          placeholder="enter your search term"
          type="text"
          rules={{
            required: {
              value: true,
              message: "Matric Number is reuired",
            },
          }}
          className="my-0 h-[36px] w-[95%] rounded-lg border-none bg-[#ECEFF0]"
        />
        <Image src={search} alt="search" height={36} width={40} />
      </div>
    </div>
  );
};

export default SearchInput;
