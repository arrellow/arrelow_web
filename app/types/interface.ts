import { Interface } from "readline";
import { Status } from "./enum";

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

// POST INTERFACE

export interface IPost {
  id?: string;
  category?: string;
  title?: string;
  description?: string;
  features?: string[];
  amenities?: string[];
  property_location?: string;
  number_of_bedrooms?: number;
  number_of_bathrooms?: number;
  number_of_floors?: number;
  square?: number;
  price?: number;
  banner?: string | any;
  images?: string[];
  videos?: string[];
  virtual_tour?: string;
  views?: number;
  status?: "selling" | "sold";
  userId?: string;
  user?: {};
  createdAt?: typeof Date;

  chats?: [];
}

export interface MessageProps {
  messageHeader: string;
  messageParagraph: string;
  messageTime: string;
  messageRead: string;
}
export interface MessagePropsWithStats {
  messageHeader: string;
  messageParagraph: string;
  messageTime: string;
  messageRead: string;
  status: Status;
}
