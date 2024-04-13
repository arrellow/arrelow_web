import { cva } from "class-variance-authority";
import { cn } from "@/app/utils/helper";
import { ButtonProps } from "@/app/types/interface";

const buttonVariants = cva(`px-3 py-2 rounded-xl  transition-all `, {
  variants: {
    variant: {
      primary:
        "bg-transparent rounded-[17px] border-2 border-[#023C63] text-[#023C63] hover:text-white hover:bg-[#023C63]",
      outline:
        "bg-transparent border-[#CBB26A] text-white border-2 hover:bg-primary  hover:text-black",
      add: "bg-[#023C63] text-white",
      orange: "bg-[#F6901B] text-white",
    },
    size: {
      sm: " py-1 px-9",
      md: "px-4 py-2",
      lg: "py-3 px-6 shadow-xl",
    },
    disabled: {
      true: "bg-gray-300 cursor-not-allowed",
    },
    loading: {
      true: "bg-lemon-100",
    },
  },
  // compoundVariants: [
  //   {
  //     variant: "primary",
  //     size: "sm",
  //     className: "uppercase rounded-md",
  //   },
  // ],
  // defaultVariants: {
  //   size: "sm",
  //   variant: "primary",
  //   fullWidth: true,
  //   disabled: false,
  // },
});

const Button = ({
  size,
  variant,
  className,
  text,
  type,
  isicon,
  icon,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        buttonVariants({
          className,
          variant,
          size,
          disabled,
        }),
      )}
      {...props}
    >
      {isicon ? (
        <div className="flex items-center gap-1">
          <p>{icon}</p>
          <p className="max-sm:hidden">{text}</p>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};

export default Button;
