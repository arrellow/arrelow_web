import React from "react";

interface TextAreaProps {
  placeholder: string;
  name?: string; // optional name attribute
  id?: string; // optional id attribute
  cols?: number; // optional number of columns
  rows?: number; // optional number of rows
  onBlur: () => void;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextArea: React.FC<TextAreaProps> = ({
  placeholder,
  cols,
  rows,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className="border-[#D1D1D5] border-[1px] pl-2 pt-2 w-full"
    ></textarea>
  );
};

export default MyTextArea;
