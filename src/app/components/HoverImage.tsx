"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { IconRestore } from "@tabler/icons-react";

const HoverImage = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [textBlockPosition, setTextBlockPosition] = useState({ x: 0, y: 0 });

  const parentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = Math.floor(Math.random() * 30);
      const newY = Math.floor(Math.random() * 30);
      setTextBlockPosition({ x: newX, y: newY });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    setImagePosition({ x: 0, y: 0 });
    setTextBlockPosition({ x: 0, y: 0 });
  };
  return (
    <div
      className="w-[400px] h-[300px] bg-gradient-to-b from-white to-custom-gray 
    ring-1 ring-darkGray/10 ring-offset-8 ring-offset-background rounded-lg shadow-custom overflow-hidden"
      dir="ltr"
      ref={parentRef}
    >
      <div className="bg-normalGray w-full h-10 rounded-tl-lg rounded-tr-lg flex justify-between items-center gap-1 p-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full  "></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full "></div>
          <div className="w-2 h-2 bg-green-500 rounded-full "></div>
        </div>
        <button
          onClick={handleReset}
          className="p-1 hover:bg-slate-300 rounded-full transition-all ease-in-out duration-300"
        >
          <IconRestore className="w-5 h-5" />
        </button>
      </div>

      <div className="w-[390px] h-[290px] flex flex-col items-center justify-center gap-2">
        <Draggable
          bounds="parent"
          position={imagePosition}
          onStop={(event, data) => setImagePosition({ x: data.x, y: data.y })}
        >
          <motion.img
            src="/images/profile.jpg"
            alt="header image"
            className="relative w-[100px] h-[100px] object-cover rounded-full"
            drag={true}
            dragConstraints={parentRef}
          />
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlockPosition}
          onStop={(event, data) =>
            setTextBlockPosition({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="relative bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlockPosition.x,
              y: textBlockPosition.y,
              transition: { duration: 2 },
            }}
          >
            he loves momos!
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlockPosition}
          onStop={(event, data) =>
            setTextBlockPosition({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="relative bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlockPosition.x,
              y: textBlockPosition.y,
              transition: { duration: 2 },
            }}
          >
            he loves tech!
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlockPosition}
          onStop={(event, data) =>
            setTextBlockPosition({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="relative bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlockPosition.x,
              y: textBlockPosition.y,
              transition: { duration: 2 },
            }}
          >
            is a sci-fi nerd!
          </motion.div>
        </Draggable>
      </div>
    </div>
  );
};

export default HoverImage;
