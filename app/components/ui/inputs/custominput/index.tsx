"use client";
import { useController, Control } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

import clsx from "clsx";
import { useState } from "react";

interface TextFieldProps {
  asterik?: boolean;
  type?: string;
  control?: Control<any>;
  name: string;
  rules?: object;
  className?: string;
  isPassword?: boolean;
  placeholder?: string; // Added placeholder prop
}

export default function TextField({
  type = "text",
  control,
  name,
  rules,
  isPassword,
  className,
  placeholder,
  ...props
}: TextFieldProps) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { isTouched },
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisisbility = () => {
    setShowPassword(!showPassword);
  };

  const validateField = clsx({
    "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500 ":
      isTouched && !!errors[name]?.message,
    "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
      !!errors[name]?.message,
  });

  const baseClass = clsx(
    "input-control border-4 border-gray rounded-lg bg-gray mb-0 px-3 py-3 w-full lg:text-xs md:text-xl text-xs",
    className,
  );

  return (
    <div className="relative flex w-full flex-col">
      {isPassword ? (
        <div>
          <input
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            name={name}
            autoComplete="off"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={clsx(baseClass, validateField)}
            {...props}
          />
          <p
            className="absolute right-3 top-3 cursor-pointer"
            onClick={toggleVisisbility}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </p>
        </div>
      ) : (
        <div>
          <input
            placeholder={placeholder}
            type={type}
            name={name}
            autoComplete="off"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={clsx(baseClass, validateField)}
            {...props}
          />
        </div>
      )}

      {/* {errors[name] && (
        <span className="text-xs text-red-500">
          {errors[name] && errors[name]?.message}
        </span>
      )} */}
      {errors[name] && (
        <span className="text-xs text-red-500">
          {errors[name] && String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
}

TextField.defaultProps = {
  type: "text", // Changed default prop name to "type"
};
