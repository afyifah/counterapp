"use client";
import { useState } from "react";

export default function Home() {
  const [numState, setNumState] = useState<any>(0);

  const addNumber = () => {
    setNumState(numState + 1);
  };
  const deleteNumber = () => {
    setNumState(numState - 1);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[70px] bg-slate-800">
      <p className="text-[80px] text-cyan-300 font-semibold">Count</p>
      <p className="font-bold text-[120px] text-white p-8">{numState}</p>
      <div className="flex flex-row gap-8 ">
        <button
          onClick={addNumber}
          className="bg-cyan-600 text-white border-4 py-0 px-2 items-center rounded-full hover: pointer shadow-xl shadow-slate-900"
        >
          +
        </button>
        <button
          onClick={deleteNumber}
          className="bg-cyan-600 stroke-slate-50 border-4 text-white py-0 px-3 items-center rounded-full hover: pointer shadow-xl shadow-slate-900"
        >
          -
        </button>
      </div>
    </div>
  );
}
