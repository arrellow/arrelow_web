"use client";
import { CheckboxProps } from "@/app/types/interface";

export const Checkbox = ({
  id,
  checked,
  onChange,
  className,
  text,
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        id={id}
        type="checkbox"
        className={`h-4 w-4 ${className} accent-green focus:ring-0 `}
        checked={checked}
        onChange={onChange ? onChange : () => {}}
      />
      <label>{text}</label>
    </div>
  );
};
