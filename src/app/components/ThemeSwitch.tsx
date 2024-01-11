import React, { useState } from 'react';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
import { motion } from 'framer-motion';

const ThemeSwitch: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.button onClick={toggleTheme} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, y: -3 }}
      transition={{ duration: 0.3 }}>
      <motion.div
      >
        {theme === "light" ? <LightIcon /> : <DarkIcon />}
      </motion.div>
    </motion.button>
    );
};

export default ThemeSwitch;
