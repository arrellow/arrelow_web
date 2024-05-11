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
  username: string;
  email: string;
  password: string;
  phone_number: string;
  role: string;
}

export interface loginInput {
  password: string;
  email: string;
}
export interface forgotPasswordProps {
  email: string;
}

export interface changePassword {
  password: string;
  confirmPassword: string;
}
export interface propertyDetailsProps {
  category: string;
  title: string;
  description: string;
  bathroom: string;
  bedroom: string;
  feature: string;
  location: string;
  floor: string;
  square: string;
  price: string;
}
