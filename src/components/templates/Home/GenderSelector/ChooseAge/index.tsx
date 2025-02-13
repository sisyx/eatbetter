import { useTranslation } from "react-i18next";
import { bmiStore } from "../../../../../stores/bmi";

export default function ChooseAge({className}:{className?:string}) {
  const { age, setAge } = bmiStore((state) => state);
  const { i18n } = useTranslation();

  return (
    <div className={`${className ? className : ""} h-[130px] w-[150px] flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-xl max-sm:w-[100%]`}>
      <p className="bg-white"> {i18n.language === "fa" ? "سن" : "Age"}</p>
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
          dir={i18n.language === "fa" ? 'rtl' : 'ltr'}
        />
      </div>
    </div>
  );
}
