 import { useTranslation } from "react-i18next";
import { bmiStore } from "../../../../../stores/bmi";


export default function ElectionMay() { 
  const { height, setHeight } = bmiStore((state) => state);
  const { t, i18n } = useTranslation();


    return (
        <div className="mb-0 w-[315px] ">
            <p className="mb-2">{t("genderSelector.height")}</p>
            <input
                type="range"
                min="100"
                max="220"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full"
            />
            <span className="block text-center text-lg mt-2">{height} {i18n.language === "fa" ? "قد" : "Height"}</span>
        </div>
    )
}
 