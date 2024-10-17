
import { useState } from "react";
import { ReactTyped } from "react-typed";
import ElectionMay from "./ElectionMay";
import SelectWeight from "./SelectWeight";
import ChooseAge from "./ChooseAge";

const GenderSelector: React.FC = () => {
  const [gender, setGender] = useState<"Masculine" | "Feminine">("Masculine");
  return (
    <div className="flex max-lg:flex-col-reverse items-center justify-end gap-40 w-[100%] mt-28">
      <div className="absolute -left-[25%] max-sm:-left-[20%]">
        <img
          src="Pngtree-food.png"
          alt="pngtree"
          className="w-[630px] max-lg:w-[350px] max-sm:hidden"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="text-[30px] font-bold w-[450px] max-sm:w-[250px] max-sm:text-[15px]">
          <ReactTyped
            strings={["محاسبه شما در اینجا ظاهر می شود"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </div>
        <div>
          <button className="bg-main w-[300px] p-3 rounded-lg text-white hover:bg-mainHover transition-all">
            محاسبه کنید
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-end items-center gap-1 font-bold text-[20px]">
          <h5>جنسیت خود را انتخاب کنید</h5>
          <div className="w-2 h-2 bg-main rounded-xl">
            <div className="animate-ping w-2 h-2 bg-mainHover rounded-xl"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-wrap gap-5 max-sm:w-[100%] mb-4">
              <button
                onClick={() => setGender("Feminine")}
                className={`p-4 w-[150px] h-[150px] max-sm:w-[100%] rounded-lg text-center shadow-xl hover:bg-mainHover transition-all ${gender === "Feminine" ? "bg-main text-white" : "bg-gray-200 text-black"
                  }`}
              >
                زن 
              </button>
              <button
                onClick={() => setGender("Masculine")}
                className={`p-4 w-[150px] h-[150px] max-sm:w-[100%] rounded-lg text-center shadow-xl hover:bg-mainHover transition-all ${gender === "Masculine" ? "bg-main text-white" : "bg-gray-200 text-black"
                  }`}
              >
                مرد
              </button>
            </div>
            <ChooseAge />
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <ElectionMay />
            <SelectWeight />
          </div>
        </div>
      </div>
    </div>
  )
};

export default GenderSelector