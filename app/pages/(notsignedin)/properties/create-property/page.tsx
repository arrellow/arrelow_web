import React from "react";
import PropertyDetails from "./PropertyDetails";

const CreateProperty = () => {
  return (
    <main className="pt-40">
      <header className="flex flex-col gap-y-6 text-center ">
        <h1 className="text-3xl font-extrabold ">UPLOAD PROPERTY</h1>
        <p className="font-medium text-[#948D8D]">
          All data are automatically saved
        </p>
      </header>
      <section>
        <PropertyDetails />
      </section>
    </main>
  );
};

export default CreateProperty;
