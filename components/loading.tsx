import React, { useEffect, useState, useRef } from "react";
import { Marque } from "./Marque";

function Loading() {
  return (
    <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-slate-100 text-6xl gap-4">
      <div className="overflow-hidden absolute -z-10 scale-150 blur-md h-[50%] top-[30%] flex items-center w-[99%] invert">
        <Marque />
      </div>
      <span className={`rounded-full bg-violet-500 p-2`}></span>
      <p>Loading</p>
    </div>
  );
}

export default Loading;
