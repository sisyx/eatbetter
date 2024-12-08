import { useState } from "react";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";

const SleepSchedule = () => {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const { t } = useTranslation();

  return (
    <div className="pb-10 sm:pb-0">
      <div className="mt-5 flex flex-col justify-center sm:flex-row sm:justify-evenly">
        <div className="flex justify-center">
          <label className="w-[113px] text-center"> {t("sleep.sleepStartHour")}</label>
          <input
            type="time"
            className="outline-none"
            value={sleepTime}
            onChange={(e) => {
              setSleepTime(e.target.value);
            }}
          />
        </div>
 
        <div className="flex justify-center">
          <label  className="w-[113px] text-center">{t("sleep.sleepEndHour")}</label>
          <input
            type="time"
            className="outline-none"
            value={wakeUpTime}
            onChange={(e) => {
              setWakeUpTime(e.target.value);
            }}
          />
        </div>
      </div>
      <Button
        className="mx-auto mt-4 block w-full px-9 sm:w-auto"
        variant={"main"}
        disabled={!wakeUpTime && !sleepTime}
      >
        {t("sleep.submit")}
      </Button>
    </div>
  );
};

export default SleepSchedule;
