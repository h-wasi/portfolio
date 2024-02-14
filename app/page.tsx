"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <div className="grid-about bg-black gap-10 text-white justify-between px-10 pt-36 pb-24 flex flex-wrap border-1 border-white rounded-t-xl relative z-10">
        <h1 className="text-8xl sticky font-bold">About</h1>
        <p className="px-4 text-xl max-w-[60vw] font-bold tracking-widest leading-10">
          Wasi <span className="text-sm font-normal">(HE/HIM)</span> is a
          seasoned Frontend Engineer with a knack for crafting captivating user
          interfaces that elevate user experiences. Specializing in React and
          Next.js, he excels in turning complex ideas into engaging, interactive
          web solutions. With a background in Docker, AWS, and Kubernetes, Wasi
          is adept at deploying robust and scalable frontend architectures.
          Operating globally, he`s always on the move, bringing his unique blend
          of technical acumen and creativity to every project he touches.
        </p>
      </div>
      <section className="bg-slate-50 grid-footer fixed bottom-0 z-0 h-dvh">
        <div className="">
          
        </div>
      </section>
    </main>
  );
}
