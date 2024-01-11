import React from "react";
import classNames from "classnames";

type ButtonProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  const buttonClasses = classNames(
    "px-5 py-3 shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold",
    {
      "bg-blue-500 hover:bg-blue-700 text-white": type === "primary",
      "bg-gray-500 hover:bg-gray-700 text-white": type === "secondary",
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
