import { useState } from "react";
import { Button } from "../../../shadcn/ui/button";

const SleepSchedule = () => {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");

  return (
    <div className="pb-10 sm:pb-0">
      <div className="mt-5 flex flex-col justify-center sm:flex-row sm:justify-evenly">
        <div className="flex justify-center">
          <label className="w-[113px] text-center">ساعت خواب:</label>
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
          <label>ساعت بیدار شدن:</label>
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
      >
        ثبت
      </Button>
    </div>
  );
};

export default SleepSchedule;
