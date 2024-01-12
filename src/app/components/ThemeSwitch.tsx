"use client";
import React, { useEffect, useState } from "react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div>{darkMode ? <DarkIcon /> : <LightIcon />}</motion.div>
    </motion.button>
  );
};

export default ThemeSwitch;
