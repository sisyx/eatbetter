import { useState } from "react";
import { bmiStore } from "../../../../../stores/bmi";

export default function SelectWeight() {
  const { weight, setWeight } = bmiStore((state) => state);
  return (
    <div className="flex h-[130px] w-[150px] flex-col items-center justify-center gap-4 rounded-lg bg-white shadow-xl max-sm:w-[100%]">
      <p className="bg-white">وزن (kg)</p>
      <div className="flex items-center space-x-4 bg-white px-3">
        {/* <button
                    onClick={() => setWeight(weight > 1 ? weight - 1 : weight)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    -
                </button>
                <span className="font-bold text-xl bg-white">{weight}</span>
                <button
                    onClick={() => setWeight(weight + 1)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    +
                </button> */}
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border-b border-black py-2 outline-none"
          placeholder="50"
          value={weight}
        />
      </div>
    </div>
  );
}
