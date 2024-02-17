import { links } from "@/constant";
import { motion } from "framer-motion";
import { LinkComponent } from "./LinkComponent";
import { Button } from "./ui/button";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { info } from "@/constant";

export function LinkTree() {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: -200 }}
        animate={isOpen}
        variants={{
          true: { opacity: 1, translateY: 0 },
          false: { transition: { duration: 0.2, ease: "circInOut" } },
        }}
        transition={{ duration: 0.6, type: "tween", ease: "backOut" }}
        className={`bg-slate-100 max-md:hidden h-[8rem] absolute px-12 border border-gray-200 shadow-lg inset-0 z-10 flex justify-between items-center`}
      >
        {links.map((link) => (
          <LinkComponent
            link={link}
            key={link.name}
            containerStyles="lg:w-[13.4rem] max-lg:w-40 w-60"
            childStyles="3.7rem"
          />
        ))}
        <Button
          className={`bg-black hover:bg-slate-800 text-white border rounded-xl`}
          onClick={() => setIsOpen("false")}
        >
          X
        </Button>
      </motion.div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

function Nav({
  isOpen,
  setIsOpen,
}: {
  isOpen: string;
  setIsOpen: (value: string) => void;
}) {
  return (
    <div className="flex justify-between px-8 relative top-5 left-[2.5%] md:bg-white py-1.5 w-[95%] md:shadow-xl rounded-xl border-1">
      <div className="flex gap-3 items-center">
        <Link href={"/"}>
          <Image
            draggable="false"
            src={"/logo.svg"}
            width={50}
            height={60}
            alt="logo"
          ></Image>
        </Link>
        <p className="text-[12px] font-semibold max-md:text-center">{info}</p>
      </div>
      <div
        className="flex gap-2 items-center border rounded-xl px-2 shadow-md hover:shadow-sm max-md:hidden cursor-pointer"
        onClick={() => setIsOpen("true")}
      >
        <Image
          draggable="false"
          src={"/tree.svg"}
          width={20}
          height={20}
          alt="logo"
        ></Image>
        <Button className="text-sm">Link Tree</Button>
      </div>
    </div>
  );
}
