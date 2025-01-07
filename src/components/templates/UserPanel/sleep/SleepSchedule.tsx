import { useState } from "react";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../../stores/auth";
import usePostData from "../../../../hooks/usePostData";
import Loader from "../../../modules/loader/Loader";

const SleepSchedule = () => {
  const [sleepTime, setSleepTime] = useState("");
  const [wakeUpTime, setWakeUpTime] = useState("");
  const { t, i18n } = useTranslation();

  const { userData } = authStore((state) => state);
  const { mutate: mutation, isPending } = usePostData(
    `/api/sleepTime/${userData?.id}/setSleepTime`,
    // `/api/sleepTime/${userData.id}/setSleepTime`,
    i18n.language === "fa"
      ? "ساعت های وارد شده با موفقیت ثبت شد"
      : "The entered hours were successfully recorded",
    false,
    null,
  );

  const handleSubmit = () => {
    const currentDate = new Date();
  
    const [sleepHours, sleepMinutes] = sleepTime.split(":");
    const sleepDate = new Date(Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      parseInt(sleepHours, 10) - 3, // تنظیم اختلاف ساعت برای منطقه ایران
      parseInt(sleepMinutes, 10) - 30,
      0
    ));
  
    const [wakeUpHours, wakeUpMinutes] = wakeUpTime.split(":");
    const wakeUpDate = new Date(Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      parseInt(wakeUpHours, 10) - 3, // تنظیم اختلاف ساعت برای منطقه ایران
      parseInt(wakeUpMinutes, 10) - 30,
      0
    ));
  
    const payload = {
      sleepTime: sleepDate.toISOString(),
      wakeUpTime: wakeUpDate.toISOString(),
    };
  
    console.log("Payload:", payload);
    mutation(payload);
  };
  
  

  return (
    <div className="pb-10 sm:pb-0">
      <div className="mt-5 flex flex-col justify-center sm:flex-row sm:justify-evenly">
       <div className="flex justify-center">
          <label className="w-[113px] text-center">
            {t("sleep.sleepEndHour")}
          </label>
          <input
            type="time"
            className="outline-none"
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
          />
        </div>
         <div className="flex justify-center">
          <label className="w-[113px] text-center">
            {" "}
            {t("sleep.sleepStartHour")}
          </label>
          <input
            className="outline-none"
            type="time"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
          />
        </div>

        
      </div>
      <Button
        className="mx-auto mt-4 block w-full px-9 sm:w-auto"
        variant={"main"}
        disabled={!sleepTime || !wakeUpTime}
        onClick={handleSubmit}
      >
        {t("sleep.submit")}
      </Button>
      {isPending && <Loader />}
    </div>
  );
};

export default SleepSchedule;
