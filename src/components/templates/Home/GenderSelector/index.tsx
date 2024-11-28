import { useState } from "react";
import { ReactTyped } from "react-typed";
import ElectionMay from "./ElectionMay";
import SelectWeight from "./SelectWeight";
import ChooseAge from "./ChooseAge";
import { bmiStore } from "../../../../stores/bmi";
import { toast } from "../../../../hooks/use-toast";
import usePostData from "../../../../hooks/usePostData";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { useTranslation } from "react-i18next";
import BmiModal from "./Modal";

const GenderSelector = () => {
  const [gender, setGender] = useState<"Masculine" | "Feminine">("Masculine");
  const { height, age, weight } = bmiStore((state) => state);
  const [showBmiModal, setShowBmiModal] = useState(false);
  const { i18n } = useTranslation();

  const [bmiData, setBmiData] = useState<
    | {
        statusCode: number;
        messages: {
          english: string;
          persian: string;
        };
        bmi: number;
        healthStatus: {
          english: string;
          persian: string;
        };
      }
    | {}
  >({});

  const successFunc = (data: {
    statusCode: number;
    status?: number;
    title?: string;
    messages: {
      english: string;
      persian: string;
    };
    bmi: number;
    healthStatus: {
      english: string;
      persian: string;
    };
  }) => {
    if (data.statusCode === 200) {
      setBmiData(data);
      setShowBmiModal(true);
    } else if (data.status === 400) {
      toast({
        variant: "danger",
        title: data.title,
      });
    } else {
      toast({
        variant: "danger",
        title: "Sorry, please go through the steps again.",
      });
      // location.reload();
      // localStorage.clear();
    }
  };

  const { mutate: mutation, isPending } = usePostData<{
    age: string;
    weight: string;
    height: string;
  }>("/api/BMI/calculate", null, false, successFunc);

  const bmiCheckHandler = () => {
    if (height && age && weight) {
      const data = {
        weight,
        age,
        height,
      };
      mutation(data);
    } else {
      toast({
        variant: "danger",
        title: "Please fill in all fields first",
      });
    }
  };

  return (
    <div className="mt-28 flex w-[100%] items-center justify-end gap-40 max-lg:flex-col-reverse">
      <div className="absolute -left-[25%] max-sm:-left-[20%]">
        <img
          src="Pngtree-food.png"
          alt="pngtree"
          className="w-[630px] max-lg:w-[350px] max-sm:hidden"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="w-[450px] text-[30px] font-bold max-sm:w-[250px] max-sm:text-[15px]">
          <ReactTyped
            strings={["محاسبه شما در اینجا ظاهر می شود"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </div>
        <div>
          <button
            onClick={bmiCheckHandler}
            className="w-[300px] rounded-lg bg-main p-3 text-white transition-all hover:bg-mainHover"
          >
            {isPending ? <ButtonLoader /> : "محاسبه کنید"}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-end gap-1 text-[20px] font-bold">
          <h5>جنسیت خود را انتخاب کنید</h5>
          <div className="h-2 w-2 rounded-xl bg-main">
            <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-wrap gap-5">
            <div className="mb-4 flex flex-wrap gap-5 max-sm:w-[100%]">
              <button
                onClick={() => setGender("Feminine")}
                className={`h-[150px] w-[150px] rounded-lg p-4 text-center shadow-xl transition-all hover:bg-mainHover max-sm:w-[100%] ${
                  gender === "Feminine"
                    ? "bg-main text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                زن
              </button>
              <button
                onClick={() => setGender("Masculine")}
                className={`h-[150px] w-[150px] rounded-lg p-4 text-center shadow-xl transition-all hover:bg-mainHover max-sm:w-[100%] ${
                  gender === "Masculine"
                    ? "bg-main text-white"
                    : "bg-gray-200 text-black"
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
      <BmiModal
        showBmiModal={showBmiModal}
        setShowBmiModal={setShowBmiModal}
        data={bmiData}
      />
    </div>
  );
};

export default GenderSelector;
