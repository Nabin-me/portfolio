import React from "react";
import classNames from "classnames";
import Link from "next/link";
import ActiveBg from "./ActiveBg";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  active = false,
  onClick,
}) => {
  const linkClasses = classNames(
    "text-gray-500 hover:text-gray-900 relative whitespace-nowrap p-5",
    {
      "font-medium z-10": active,
    }
  );
  const AnimatedActiveBg = () => {
    return (
      <motion.div
        animate={{ scale: active ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <ActiveBg />
      </motion.div>
    );
  };
  return (
    <div className={linkClasses}>
      {active && <AnimatedActiveBg />}
      <Link
        href={href}
        className="absolute inset-0 flex items-center justify-center"
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
