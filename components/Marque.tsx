import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Marque() {
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

export default Marque;
