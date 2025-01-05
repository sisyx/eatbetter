import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { imageBase } from "../../config/constants";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";

export const SuccessFullPayment = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col-reverse items-center justify-center gap-4 rounded-xl p-5 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 text-center md:gap-8 md:ps-10">
          <img
            className="w-16 md:w-32"
            src={`${imageBase}/success-payment-tick.png`}
            alt=""
          />
          <span className="text-2xl font-extrabold text-main md:text-5xl">
            {t("payment.sucessTitle")}
          </span>
          <span className="text-xl font-bold text-mainHover md:text-2xl">
            {t("payment.successfullDesc")}
          </span>
          <Link
            onClick={() =>
              queryClient.invalidateQueries({ queryKey: ["auth"] })
            }
            to="/"
          >
            <Button className="bg-main hover:bg-mainHover">
              {t("payment.goHome")}
            </Button>
          </Link>
        </div>
        <div className="flex-1">
          <video
            className="w-full"
            src={`${imageBase}/6o05ma251R8l6n914a.mp4`}
            muted
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  );
};
