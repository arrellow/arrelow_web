"use client";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";
import PropertyMediaFiles from "./PropertyMediaFiles";
import DisplayPage from "./DisplayPage";

const CreateProperty = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { id: "step 1", name: "PROPERTY DETAILS" },
    { id: "step 2", name: "PROPERTY MEDIA FILES" },
    { id: "step 3", name: "REVIEW" },
  ];
  const handleStepClick = (stepIndex: any) => {
    setCurrentStep(stepIndex);
  };
  return (
    <main className="pt-40">
      <header className="flex flex-col gap-y-6 pb-24 text-center ">
        <h1 className="text-3xl font-extrabold ">UPLOAD PROPERTY</h1>
        <p className="font-medium text-[#948D8D]">
          All data are automatically saved
        </p>
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className=" flex items-center  justify-center">
              <span
                className={`h-[30px] w-[30px] cursor-pointer rounded-[50%]  ${
                  currentStep === index
                    ? "h-[70px] w-[70px] bg-[#F6901B]"
                    : "bg-[#E8E3E3]"
                }`}
                onClick={() => handleStepClick(index)}
              ></span>
              {index !== steps.length - 1 && (
                <span className="w-[200px]  border-4 border-gray-300"></span>
              )}
            </div>
          ))}
        </div>
      </header>

      <section>
        {currentStep === 0 && <PropertyDetails />}
        {currentStep === 1 && <PropertyMediaFiles />}
        {currentStep === 2 && <DisplayPage />}
      </section>
    </main>
  );
};

export default CreateProperty;
