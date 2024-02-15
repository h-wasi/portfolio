"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { url: "", name: "LinkedIn" },
  { url: "https://twitter.com/h-wasi", name: "Twitter" },
  { url: "https://github.com/h-wasi", name: "Github" },
  { url: "https://discord.com/users/1157004264837754890", name: "Discord" },
];

const info = "MERN DEVELOPER, DESIGNING DIGITAL PRODUCTS & BRANDS.";
export default function Home() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState("false");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "numeric",
        hour12: true,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="main-grid relative">
      <section className="bg-grid bg-cover grid-hero sticky top-0 z-0">
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
            <SubLink
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
        <div className="flex justify-between px-8 relative top-5 left-[2.5%] md:bg-white py-3 w-[95%] md:shadow-xl rounded-xl border-1">
          <div className="flex gap-3 items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                width={50}
                height={60}
                alt="logo"
              ></Image>
            </Link>
            <p className="text-[14px] max-md:text-center">{info}</p>
          </div>
          <div className="flex gap-2 items-center border rounded-xl px-2 shadow-md hover:shadow-sm max-md:hidden">
            <Image src={"/tree.svg"} width={20} height={20} alt="logo"></Image>
            <Button className="text-sm" onClick={() => setIsOpen("true")}>
              Link Tree
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* add banner here */}
          <Image
            className="absolute bottom-0"
            src={"/6392099811d7727f54b99e1d_Group 89-min-p-1080.png"}
            width={800}
            height={900}
            alt="hero"
          ></Image>
          <div className="justify-between gap-3 items-center absolute bottom-36 left-5 flex max-md:hidden">
            <div className="border px-3 py-2 border-black rounded-xl flex justify-center">
              <motion.p
                initial={{ scale: 1.5 }}
                animate={{
                  translateY: [-10, 0, 0, 0, 10],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 1.4,
                  type: "tween",
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  repeatType: "loop",
                }}
              >
                &darr;
              </motion.p>
            </div>

            <span className="text-md">Scroll down</span>
          </div>
        </div>
      </section>

      <div className="section-grid relative">
        <div className="grid-about bg-black gap-10 text-white justify-between items-center px-10 max-md:text-center py-6 flex flex-wrap rounded-t-xl relative z-10 -mt-[.20rem]">
          <motion.div
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "tween",
              ease: "backOut",
            }}
            className="fixed blur-[.6px] z-20 bottom-3 left-0 w-full flex justify-center items-center max-md:hidden"
          >
            <div className="flex items-center justify-center gap-8 border border-gray-500 rounded-xl bg-black/85 px-4 py-5 w-[45%] lg:w-[35%]">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/logo.svg"}
                    width={50}
                    height={60}
                    alt="logo"
                  ></Image>
                </Link>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <p>div</p>
                <p>div</p>
                <p>div</p>
              </div>
            </div>
          </motion.div>
          <h1 className="max-md:text-3xl max-lg:text-5xl lg:text-7xl sticky font-bold">
            About
          </h1>
          <p className="px-4 text-xl md:max-w-[60vw] md:font-bold md:tracking-widest md:leading-10">
            Wasi <span className="text-sm font-normal">(HE/HIM)</span> is a
            seasoned Frontend Engineer with a knack for crafting captivating
            user interfaces that elevate user experiences. Specializing in React
            and Next.js, he excels in turning complex ideas into engaging,
            interactive web solutions. With a background in Docker, AWS, and
            Kubernetes, Wasi is adept at deploying robust and scalable frontend
            architectures. Operating globally, he`s always on the move, bringing
            his unique blend of technical acumen and creativity to every project
            he touches.
          </p>
        </div>
        <section className="bg-slate-50 grid-footer sticky bottom-0 flex justify-center items-center px-6">
          <div className="flex flex-col gap-16">
            <span className="inline-block py-8 px-4 border-2 border-black rounded-xl">
              <Image
                src={"/banner.svg"}
                width={1300}
                height={400}
                alt="name"
              ></Image>
            </span>
            <div className="flex flex-wrap text-2xl justify-between items-baseline gap-4">
              <div className="flex flex-col gap-8 font-semibold flex-wrap">
                <div className="flex items-center flex-wrap">
                  Made with love and{" "}
                  <div className="mx-4 flex gap-6">
                    <Image
                      src={"/next.svg"}
                      width={100}
                      height={40}
                      alt="next"
                    ></Image>
                    <Image
                      src={"/framer.svg"}
                      width={30}
                      height={40}
                      alt="framer"
                    ></Image>
                  </div>{" "}
                  in Lahore, Pakistan.
                </div>
                <div className="font-bold flex gap-3 text-5xl">
                  <span className="text-slate-500">Local time</span>
                  <span className="text-slate-500">-</span>
                  <p>{time}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-[36vw] max-lg:w-full relative">
                {links.map((link) => (
                  <SubLink
                    link={link}
                    key={link.name}
                    containerStyles=""
                    childStyles="4.2rem"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
function SubLink({
  link,
  containerStyles,
  childStyles,
}: {
  link: { url: string; name: string };
  containerStyles: string;
  childStyles: string;
}) {
  const [isHover, setIsHover] = useState("false");

  return (
    <Link
      href={link.url}
      target="_blank"
      onMouseEnter={() => setIsHover("true")}
      onMouseLeave={() => setIsHover("false")}
      className={`hover:text-white ${containerStyles}`}
    >
      <div className="relative z-10 overflow-hidden">
        <motion.span
          initial={false}
          animate={isHover}
          variants={{ true: { height: childStyles } }}
          // transition={}
          className={`absolute top-0 bg-black w-full ${childStyles} -z-10 rounded-xl`}
        ></motion.span>
        <div className="flex relative justify-between border border-black gap-3 px-3 py-4 rounded-xl hover:px-8 transition-all duration-700">
          <span>{link.name}</span>
          <p>↗</p>
        </div>
      </div>
    </Link>
  );
}
