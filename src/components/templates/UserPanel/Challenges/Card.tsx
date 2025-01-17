import { useTranslation } from "react-i18next";
import Modal from "./Modal";

type Props = {
  isActive?: boolean;
  exercise: string;
  exercise2: string;
  exercise3: string;
  exercise4: string;
  exercise5: string;
  day: string;
  challengeType: string;
  id: number;
  method:string
  durationOrReps:string
  benefits:string
};

const Card = (props: Props) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div
      dir={`${i18n.language == "fa" ? "rtl" : "ltr"}`}
      data-aos="fade-up"
      className={`relative rounded-sm bg-white px-3 pb-6 pt-4 text-center transition-transform sm:mt-5 sm:pt-6 sm:!shadow-md hover:sm:!-translate-y-2`}
    >
      <div className="flex gap-3 items-center">
        <div
          className={`${i18n.language == "fa" ? "text-right" : "text-left"} flex-1`}
        >
          <p className="mb-2">
            {language === "en"
              ? `Challenge Number ${props.id}`
              : `چالش شماره ${props.id}`}
            {props.isActive && (
              <span className="mr-2 rounded-sm bg-main px-2 py-[2px] text-[11px] text-white">
                فعال
                {language === "en" ? "Active" : "فعال"}
              </span>
            )}
          </p>
          {/* <p className="text-sm">{props.exercise}</p> */}
        </div>
        <img
          className="block h-16 w-[84px]"
          src={"/images/12145582_Wavy_Edu-02_Single-11.svg"}
          alt="cover"
        />
      </div>
      <Modal {...props} />
    </div>
  );
};

export default Card;
