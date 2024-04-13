import React from "react";

interface CardProps {
  className?: string; // Making className optional
  children: React.ReactNode;
  isBackground: boolean;
  backgroundImage?: string; // Declaring backgroundImage prop
}

export const Card = ({
  className,
  children,
  isBackground,
  backgroundImage,
}: CardProps) => {
  return (
    <div
      className={`bg-rounded h-[420px] rounded-[20px] ${className}`}
      style={
        isBackground
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {children}
    </div>
  );
};
