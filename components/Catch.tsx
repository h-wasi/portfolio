import React from "react";

function Catch() {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-b shadow-xl shadow-indigo-700/50 border-slate-500/80 rounded-b-2xl grid-catch flex items-center justify-center max-3xl:hidden"
      id="catchme"
    >
      <div className="h-screen rounded-xl border border-transparent bg-white bg-grid invert w-[96vw] flex items-center justify-center relative right-0">
        {/* <div className="absolute w-80 h-44 bg-black text-white border rounded-xl">
          Catch Me
        </div> */}
      </div>
    </div>
  );
}

export default Catch;
