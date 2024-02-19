import { email } from "@/constant";
import Link from "next/link";
import React, { useState } from "react";

function Catch() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-slate-50 bg-cover border-b shadow-lg shadow-gray-700/20 border-slate-500/80 rounded-b-2xl grid-catch flex items-center justify-center max-md:hidden"
      id="catchme"
    >
      <div className="h-screen rounded-xl border border-transparent bg-white bg-grid invert w-[94vw] flex items-center justify-center absolute right-0">
        <div
          className="absolute w-80 h-44 bg-graffiti bg-cover border border-gray-600 rounded-xl flex items-center justify-center invert"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h1
            className="text-6xl text-white font-semibold data-[state=open]:hidden"
            data-state={isOpen ? "open" : "closed"}
          >
            Catch Me
          </h1>
          <Link
            href={`mailto:${email}`}
            target="_blank"
            className="text-white text-3xl font-bold w-60 text-center h-16 bg-black border hidden data-[state=open]:flex data-[state=open]:justify-center data-[state=open]:items-center border-gray-700 rounded-xl"
            data-state={isOpen ? "open" : "closed"}
          >
            Ping a message
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Catch;
