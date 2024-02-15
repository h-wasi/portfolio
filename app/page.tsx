"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { url: "", name: "LinkedIn" },
  { url: "https://twitter.com/h-wasi", name: "Twitter" },
  { url: "https://github.com/h-wasi", name: "Github" },
  { url: "https://discord.com/users/1157004264837754890", name: "Discord" },
];

export default function Home() {
  const [time, setTime] = useState("");

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
      <section className="bg-grid bg-cover bg-gray-300 grid-hero sticky top-0 z-0">
        <div className="flex justify-between px-8 relative top-5 left-[2.5%] bg-white py-3 w-[95%] shadow-xl rounded-xl border-1">
          <div className="flex gap-3 items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                width={60}
                height={60}
                alt="logo"
              ></Image>
            </Link>
            <p className="text-[14px]">
              MERN DEVELOPER, DESIGNING DIGITAL PRODUCTS & BRANDS.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={"/tree.svg"} width={20} height={20} alt="logo"></Image>
            <p className="text-sm">Link Tree</p>
          </div>
        </div>
        <div className="flex justify-center">
          {/* <Banner /> */}
          <Image
            className="absolute bottom-0"
            src={"/6392099811d7727f54b99e1d_Group 89-min-p-1080.png"}
            width={800}
            height={900}
            alt="hero"
          ></Image>
        </div>
      </section>

      <div className="section-grid relative">
        <div className="grid-about bg-black gap-10 text-white justify-between px-10 pt-36 pb-24 flex flex-wrap border-1 border-white rounded-t-xl relative z-10">
          <h1 className="text-8xl sticky font-bold">About</h1>
          <p className="px-4 text-xl max-w-[60vw] font-bold tracking-widest leading-10">
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
        <section className="bg-slate-50 grid-footer sticky bottom-0 flex justify-center items-center">
          <div className="flex flex-col gap-16">
            <span className="inline-block py-8 border-2 border-black rounded-xl">
              <Image
                src={"/banner.svg"}
                width={1300}
                height={400}
                alt="name"
              ></Image>
            </span>
            <div className="flex text-2xl justify-between items-baseline">
              <div className="flex flex-col gap-8 font-semibold">
                <div className="flex items-center">
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
              <div className="grid grid-cols-2 gap-4 w-[36vw] max-md:w-full">
                {links.map((link) => (
                  <Link href={link.url} target="_blank" key={link.name}>
                    <div className="flex justify-between border border-black gap-3 px-3 py-4 rounded-xl">
                      <span>{link.name}</span>
                      <p>↗</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
