import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/shadcn/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "../../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";
import useGetData from "../../../hooks/useGetData";
import { authStore } from "../../../stores/auth";
import { getCustomDiet } from "../../../utils/fetchs";
import usePostData from "../../../hooks/usePostData";
import { useQueryClient } from "@tanstack/react-query";

const Modal = () => {
  const { i18n } = useTranslation();
  const [week, setWeek] = useState("");
  const { userData } = authStore((state) => state);
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useGetData<any>(
    userData ? ["customDiet", userData.id] : [],
    () =>
      getCustomDiet(
        String(userData?.id),
        week === "first" ? 1 : week === "second" ? 2 : 3,
      ),
    {
      enabled: Boolean(userData?.id) && Boolean(week),
    },
  );

  console.log(data);

  const { mutate: mutation, isPending } = usePostData<any>(
    week === "first"
      ? `/api/ChatGPT/generateFirstWeek/${userData?.id}`
      : week === "second"
        ? `/api/ChatGPT/generateSecondWeek/${userData?.id}`
        : `/api/ChatGPT/generateThirdWeek/${userData?.id}`,
    null,
    false,
    (data) => {
      if (data.statusCode === 200) {
        refetch();
      }
    },
  );

  useEffect(() => {
    if (data && data.statusCode === 404) {
      mutation({});
    }
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"main"}
          className="relative z-50 mb-10 mt-4 w-full cursor-pointer"
        >
          {" "}
          {i18n.language === "fa" ? "نمایش" : "Show"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[600px]">
        {week ? (
          <p
            onClick={() => {
              queryClient.setQueryData(["customDiet", userData?.id], null);
              setWeek("");
            }}
            className={`absolute right-4 top-3 cursor-pointer text-sm text-main`}
          >
            {i18n.language === "fa" ? "< برگشت " : "back >"}
          </p>
        ) : null}
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            {week
              ? i18n.language === "fa"
                ? week === "first"
                  ? "رژیم هفته اول"
                  : week === "second"
                    ? "رژیم هفته دوم"
                    : "رژیم هفته سوم"
                : week === "first"
                  ? "First week diet"
                  : week === "second"
                    ? "Second week diet"
                    : "Third week diet"
              : i18n.language === "fa"
                ? "رژیم اختصاصی شما"
                : "Your personalized diet"}
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[500px] overflow-y-scroll">
          {week ? (
            <div>
              {isLoading && "..."}
              <p className="text-center">
                {isPending &&
                  (i18n.language === "fa" ? "لطفا صبور باشید" : "Please wait")}
              </p>{" "}
              <p
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                className="text-center"
              >
                {data &&
                  (data.statusCode === 400) &&
                  data.message}

                {data && data.statusCode === 200 && (
                  <>
                    <p>{data.message}</p>
                    <p className="mt-3">{data.data}</p>
                  </>
                )}
              </p>
            </div>
          ) : (
            <div
              dir="rtl"
              className={`${i18n.language === "fa" ? "" : "flex-row-reverse"} flex items-center justify-center gap-3`}
            >
              <Button
                onClick={() => setWeek("first")}
                className="border-main"
                variant={"outline"}
              >
                {i18n.language === "fa" ? "رژیم هفته اول" : "First week diet"}
              </Button>
              <Button
                onClick={() => setWeek("second")}
                className="border-main"
                variant={"outline"}
              >
                {i18n.language === "fa" ? "رژیم هفته دوم" : "Second week diet"}
              </Button>
              <Button
                onClick={() => setWeek("third")}
                className="border-main"
                variant={"outline"}
              >
                {i18n.language === "fa" ? "رژیم هفته سوم" : "Third week diet"}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
