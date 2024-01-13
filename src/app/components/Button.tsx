"use client";
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

type ButtonProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  const buttonClasses = classNames(
    "px-5 py-3 shadow-sm select:none  transition-all ease-in-out duration-300 rounded flex gap-2 items-center justify-center text-base font-semibold rounded-2xl [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.06),_0px_0px_2px_0.463px_rgba(0,_0,_0,_0.25)_inset,_0px_-4px_0px_0px_rgba(0,_0,_0,_0.25)_inset]",
    {
      "bg-gradient-to-b from-custom-teal to-custom-green text-white ":
        type === "primary",
      "bg-gradient-to-b from-white to-custom-gray text-text":
        type === "secondary",
    }
  );

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileTap={{
        userSelect: "none",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0.463px rgba(0, 0, 0, 0.25) inset",
        scale: 0.99,
        transform: "translateY(2px)",
      }}
      whileHover={{
        transform: "translateY(-2px)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
