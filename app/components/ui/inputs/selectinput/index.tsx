"use client";
import Select from "react-select";
import React, { useState } from "react";

const Selecfield = ({ value, options, onChange, className }: any) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "45px",
    }),
  };
  return (
    <div>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        className={className}
        styles={customStyles}
      />
    </div>
  );
};

export default Selecfield;
