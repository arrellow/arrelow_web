export interface ButtonProps {
  size: any;
  type?: any;
  variant: any;
  className: string;
  text: string;
  disabled?: any;
  isicon?: any;
  icon?: any;
  onClick?: () => void;
}
export interface TextFieldProps {
  asterik?: boolean;
  type?: string;
  control: any;
  name: string;
  rules?: object;
  className?: string;
  placeholder?: string; // Added placeholder prop
}

export interface Inputs {
  email: string;
  password: string;
}
