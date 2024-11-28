import { useState } from "react";
import { bmiStore } from "../../../../../stores/bmi";

export default function ChooseAge() {
  const { age, setAge } = bmiStore((state) => state);

  return (
    <div className="flex h-[130px] w-[150px] flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-xl max-sm:w-[100%]">
      <p className="bg-white">سن</p>
      <div className="flex items-center space-x-4 bg-white px-3">
        {/* <button
                    onClick={() => setAge(age > 1 ? age - 1 : age)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover  transition-all"
                >
                    -
                </button>
                <span className="font-bold text-xl bg-white  ">{age}</span>
                <button
                    onClick={() => setAge(age + 1)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    +
                </button> */}
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          className="w-full border-b border-black py-2 outline-none"
          placeholder="33"
          value={age}
        />
      </div>
    </div>
  );
}
