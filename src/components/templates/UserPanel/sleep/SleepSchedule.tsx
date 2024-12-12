import { useState } from "react";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../../stores/auth";
import usePostData from "../../../../hooks/usePostData";
import Loader from "../../../modules/loader/Loader";

const SleepSchedule = () => {
  const [wakeUpHour, setWakeUpHour] = useState("");
  const [sleepHour, setSleepHour] = useState("");
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

  return (
    <div className="pb-10 sm:pb-0">
      <div className="mt-5 flex flex-col justify-center sm:flex-row sm:justify-evenly">
        <div className="flex justify-center">
          <label className="w-[113px] text-center">
            {" "}
            {t("sleep.sleepStartHour")}
          </label>
          <input
            type="time"
            className="outline-none"
            value={sleepHour}
            onChange={(e) => {
              setSleepHour(e.target.value);
            }}
          />
        </div>

        <div className="flex justify-center">
          <label className="w-[113px] text-center">
            {t("sleep.sleepEndHour")}
          </label>
          <input
            type="time"
            className="outline-none"
            value={wakeUpHour}
            onChange={(e) => {
              setWakeUpHour(e.target.value);
            }}
          />
        </div>
      </div>
      <Button
        className="mx-auto mt-4 block w-full px-9 sm:w-auto"
        variant={"main"}
        disabled={!wakeUpHour || !sleepHour}
        onClick={() => {
          mutation({
            sleepHour: sleepHour + ':00',
            wakeUpHour: wakeUpHour + ':00',
          }); 
        }}
      >
        {t("sleep.submit")}
      </Button>
      {isPending && <Loader />}
    </div>
  );
};

export default SleepSchedule;
