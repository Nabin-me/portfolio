import React from "react";
import Button from "./Button";
import { IconFileDownload, IconMessage2 } from "@tabler/icons-react";
import HoverImage from "./HoverImage";

const Hero = () => {
  return (
    <div className="flex justify-between dark:text-white mt-20">
      <section className=" flex flex-col justify-center">
        <p className="text-2xl self">Hey there 👋, I am Nabin</p>
        <h1 className="text-5xl font-bold max-w-[460px] my-10">
          A visual designer based in Toronto.
        </h1>
        <div className="flex gap-10">
          <Button type="primary">
            <span>Download Resume</span>
            <IconFileDownload className="scale-[0.9]" />
          </Button>
          <Button type="secondary">
            Contact Me
            <IconMessage2 className="scale-[0.9]" />
          </Button>
        </div>
      </section>
      <HoverImage />
    </div>
  );
};

export default Hero;
