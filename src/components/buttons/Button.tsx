// import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none transition";
  const variants = {
    solid: "bg-[#56bbe3] text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
