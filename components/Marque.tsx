import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Marque() {
  return (
    <motion.div
      initial={{ translateX: 1000, scale: 2.2 }}
      animate={{ translateX: -10000 }}
      transition={{
        duration: 17,
        repeat: Infinity,
        repeatDelay: -7,
        repeatType: "loop",
        type: "linear",
      }}
      className="flex gap-24 w-full select-none"
    >
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
    </motion.div>
  );
}

export function SkillsMarque() {
  return (
    <div className="skill col-span-8 row-span-1 border">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
      maxime quos eaque iure tenetur ad vel nulla sapiente quidem unde, possimus
      libero iste, nemo molestias dolor qui. Laudantium, eum ad?
    </div>
    // <motion.div
    //   initial={{ translateX: 100 }}
    //   animate={{ translateX: 0 }}
    //   transition={{
    //     duration: 4,
    //     repeat: Infinity,
    //     repeatType: "loop",
    //     type: "linear",
    //   }}
    //   className="h-[20vh] flex gap-8 w-[95vw] select-none items-center justify-between"
    // ></motion.div>
  );
}
