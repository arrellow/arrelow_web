"use client";
import FileUploader from "@/app/components/file-uploader";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";

const PropertyMediaFiles = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm();
  return (
    <div className="mx-auto flex w-[90%] flex-col gap-y-4 md:w-[50%]">
      <form action="" className="flex flex-col gap-y-12">
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Image <span className="text-[#F6901B]">*</span>
          </label>
          <FileUploader

            uploadText={
              "Using button Select Image to add more images. Min of 5, Max of 10."
            }
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Banner <span className="text-[#F6901B]">*</span>
          </label>
          <FileUploader

            uploadText={"Using button Select Image to add more images."}
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Youtube Video Thumbnail <span className="text-[#F6901B]">*</span>
          </label>
          <FileUploader
          
            uploadText={
              "Using button Choose Image for your  choice of cover clip."
            }
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Add Video <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="title"
            placeholder="Enter Youtube URL..... *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2  border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div className="text-center">
          <p className="">
            By clicking on Post Property, you accept the Terms of Use, confirm
            that you will abide by the Safety Tips, and declare that this
            posting does not include any Prohibited items.
          </p>
          <Button
            variant="add"
            type="submit"
            size="md"
            disabled={false}
            text={"Post Property"}
            className="mt-6 w-[200px] rounded-none"
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default PropertyMediaFiles;
