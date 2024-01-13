import React from "react";
import classNames from "classnames";
import Link from "next/link";
import ActiveBg from "./ActiveBg";
import { motion } from "framer-motion";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";

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
      "text-black font-semibold z-20": active,
    }
  );
  const AnimatedActiveBg = () => {
    return (
      <motion.div
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-[50px] overflow-hidden drop-shadow-lg"
      >
        <ActiveBg />
      </motion.div>
    );
  };
  const AnimatedIcon = () => {
    return (
      <motion.div
        initial={{ y: -3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 200, damping: 20, duration: 0.5 }}
      >
        <IconCircleFilled
          className={`h-2 w-2 mr-1 text-primary ${
            active ? "visible" : "invisible"
          } `}
        />
      </motion.div>
    );
  };
  return (
    <motion.button whileTap={{ scale: 0.995 }} transition={{ duration: 0.3 }}>
      <div className={linkClasses}>
        {active && <AnimatedActiveBg />}
        <Link
          href={href}
          className={`absolute inset-0 flex items-center justify-center ${
            active && "text-black"
          } }`}
          onClick={onClick}
        >
          <AnimatedIcon />
          {children}
        </Link>
      </div>
    </motion.button>
  );
};

export default NavLink;
