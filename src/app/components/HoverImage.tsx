"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { IconRestore } from "@tabler/icons-react";
import Image from "next/image";

const HoverImage = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [textBlock1Position, setTextBlock1Position] = useState({
    x: 110,
    y: -50,
  });
  const [textBlock2Position, setTextBlock2Position] = useState({
    x: -100,
    y: -50,
  });
  const [textBlock3Position, setTextBlock3Position] = useState({
    x: -80,
    y: 60,
  });
  const [textBlock4Position, setTextBlock4Position] = useState({
    x: 120,
    y: 60,
  });

  const parentRef = useRef(null);

  const handleAnimationEnd = () => {
    setIsAnimationComplete(true);
  };
  const handleReset = () => {
    setImagePosition({ x: 0, y: 0 });
    setTextBlock1Position({ x: 110, y: -50 });
    setTextBlock2Position({ x: -100, y: -50 });
    setTextBlock3Position({ x: -80, y: 60 });
    setTextBlock4Position({ x: 120, y: 60 });
  };

  return (
    <div
      className="relative w-[400px] h-[250px] mt-5 bg-gradient-to-b from-white to-custom-gray 
    ring-1 ring-darkGray/10 ring-offset-8 ring-offset-background rounded-lg shadow-custom overflow-hidden sm:mt-0 sm:w-[400px] sm:h-[300px]"
      dir="ltr"
      ref={parentRef}
    >
      {/* url bar */}
      <div className="absolute bg-normalGray w-full h-10 rounded-tl-lg rounded-tr-lg flex justify-between items-center gap-1 p-3">
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

      {/* content */}
      <div className="w-[390px] h-[290px] flex flex-col items-center justify-center gap-2">
        {/* shimmer animation */}

        <Draggable
          bounds="parent"
          position={imagePosition}
          onStop={(event, data) => setImagePosition({ x: data.x, y: data.y })}
        >
          <motion.div
            drag={true}
            dragConstraints={parentRef}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ stiffness: 300, damping: 20, duration: 3 }}
          >
            <Image
              className="select-none touch-none pointer-events-none relative w-[150px] h-[150px] object-cover rounded-full"
              src={"/images/profile.jpg"}
              width={200}
              height={200}
              alt={"nabin dahal's profile image"}
            />
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlock1Position}
          onStop={(event, data) =>
            setTextBlock1Position({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="absolute bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlock1Position.x,
              y: textBlock1Position.y,
              transition: { duration: 2 },
            }}
          >
            he loves momos!
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlock2Position}
          onStop={(event, data) =>
            setTextBlock2Position({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="absolute bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlock2Position.x,
              y: textBlock2Position.y,
              transition: { duration: 2 },
            }}
          >
            he loves tech!
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlock3Position}
          onStop={(event, data) =>
            setTextBlock3Position({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="absolute bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlock3Position.x,
              y: textBlock3Position.y,
              transition: { duration: 2 },
            }}
          >
            is a sci-fi nerd!
          </motion.div>
        </Draggable>
        <Draggable
          bounds="parent"
          position={textBlock4Position}
          onStop={(event, data) =>
            setTextBlock4Position({ x: data.x, y: data.y })
          }
        >
          <motion.div
            className="absolute bg-white/10 rounded-full p-2 backdrop-blur-xl shadow-glass w-max"
            drag={true}
            dragConstraints={parentRef}
            animate={{
              x: textBlock4Position.x,
              y: textBlock4Position.y,
              transition: { duration: 2 },
            }}
          >
            Another text block!
          </motion.div>
        </Draggable>
        <motion.div
          className="absolute w-[100px] h-[100px] bg-transparent rounded-full ring-1 ring-white ring-offset-1 ring-offset-transparent blur-sm"
          animate={{ scale: 10 }}
          transition={{ duration: 2 }}
          onAnimationComplete={handleAnimationEnd}
          style={{ display: isAnimationComplete ? "none" : "block" }}
        />
      </div>
    </div>
  );
};

export default HoverImage;
