import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { imageBase } from "../../config/constants";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loader from "../../components/modules/loader/Loader";
import useGetData from "../../hooks/useGetData";
import { getPaymentStatus, getStripPaymentStatus } from "../../utils/fetchs";
import { useQueryClient } from "@tanstack/react-query";

const VerifyPayment = () => {
  const { t } = useTranslation();
  const [paymentStatus, setPaymentStatus] = useState("");
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();
  const Authority = searchParams.get("Authority");
  const Status = searchParams.get("Status");
  const transactionId = searchParams.get("transactionId");

  const { data, isLoading } = useGetData<any>(
    Authority ? ["withdrawalStatus", Authority] : [],
    () => getPaymentStatus(Authority as string, Status as string),
    {
      enabled: Boolean(Authority) && Boolean(Status),
    },
  );

  const { data: stripData, isLoading: stripLoading } = useGetData<any>(
    transactionId ? ["withdrawalStatusStrip", transactionId] : [],
    () => getStripPaymentStatus(transactionId as string),
    {
      enabled: Boolean(transactionId),
    },
  );

  useEffect(() => {
    if (transactionId) {
      if (stripData) { 

        if (stripData.status === "success") {
          setPaymentStatus("success");
          queryClient.invalidateQueries({ queryKey: ["auth"] });
        } else setPaymentStatus("nonsuccess");
      }
    } else {
      if (data) {
        if (data.message === "پرداخت با موفقیت انجام شد") {
          setPaymentStatus("success");
          queryClient.invalidateQueries({ queryKey: ["auth"] });
        } else setPaymentStatus("nonsuccess");
      }
    }
  }, [data, stripData]);

  const navigate = useNavigate();

  useEffect(() => {
    const wasReloaded = localStorage.getItem("wasReloaded");

    if (wasReloaded) {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      localStorage.removeItem("wasReloaded");
      navigate("/");
    }

    const handleBeforeUnload = () => {
      localStorage.setItem("wasReloaded", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <>
      {paymentStatus === "success" && (
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
              <Link to="/">
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
      )}
      {paymentStatus === "nonsuccess" && (
        <div className="h-screen w-full">
          <div className="flex flex-col-reverse items-center justify-center gap-4 rounded-xl p-5 md:flex-row">
            <div className="flex flex-1 flex-col items-center gap-4 text-center md:gap-8 md:ps-10">
              <img
                className="w-16 md:w-32"
                src={`${imageBase}/failure-payment-tick.png`}
                alt=""
              />
              <span className="text-2xl font-extrabold md:text-5xl">
                {t("payment.failureTitle")}
              </span>
              <span className="text-xl font-bold text-mainHover md:text-2xl">
                {t("payment.failureDesc")}
              </span>
              <Link to="/">
                <Button>{t("payment.goHome")}</Button>
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
      )}
      {isLoading || (stripLoading && <Loader />)}
    </>
  );
};

export default VerifyPayment;
