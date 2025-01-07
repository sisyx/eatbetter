"use client";
import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { ButtonLoader } from "../../../modules/loader/Loader";
import usePostData from "../../../../hooks/usePostData";
import { authStore } from "../../../../stores/auth";
// import usePostData from "@/src/hooks/usePostData";
// import { useQueryClient } from "@tanstack/react-query";
// import { toast } from "../../../../hooks/use-toast";
// import { ButtonLoader } from "@/src/components/modules/loader/Loader";

interface BoxProps {
  type: string;
  title: string;
  regex?: any;
  value?: string;
  setValue?: (data: any) => void;
  errorText?: string;
  requestBody?: any;
}

const Box: FC<BoxProps> = ({
  title,
  type,
  regex,
  value,
  setValue,
  errorText,
  requestBody,
}) => {
  const [error, setError] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [data, setData] = useState<any>();
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value) {
      setData(value);
    }
  }, [value]);

  const inputChangeHandler = (value: string, setHandler: any) => {
    setdisabled(false);
    if (type !== "radio") {
      if (!regex.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
      setValue && setData(value);
    } else {
      setHandler(value);
    }
  };

  const { mutate: mutation, isPending } = usePostData<any>(
    `/api/user/api/users/profile/${userData?.id}`,
    i18n.language === "fa"
      ? "اطلاعات با موفقیت بروزرسانی شد"
      : "Information updated successfully",
    true,
    (data) => {
      if (data.statusCode === 200) {
        setOpen(false);
      }
    },
    false,
    "auth",
  );

  const submitHandler = () => {
    const newData = {
      [requestBody]: data,
    }; 
    mutation(newData as any);
  };

  return (
    <>
      <section>
        <div className="mt-4 flex items-center justify-between">
          <p>{title}</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <MdOutlineEdit className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle className="py-3 text-center">
                  {i18n.language === "fa" ? "ویرایش" : "Edit"} {title}
                </DialogTitle>
              </DialogHeader>

              <div
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                className="flex items-center justify-between gap-8"
              >
                <p className="whitespace-nowrap">{title}</p>
                <input
                  onChange={(event) =>
                    inputChangeHandler(event.target.value, null)
                  }
                  className="w-full rounded-md border border-gray-300 p-2 text-sm font-thin"
                  type={type}
                  value={data}
                />
              </div>

              {error && (
                <span className="mt-2 text-center text-xs text-red-600">
                  {errorText}
                </span>
              )}

              <Button
                className="mt-4 h-[36px] w-full justify-center"
                variant="main"
                disabled={error || disabled}
                onClick={submitHandler}
              >
                {isPending ? (
                  <ButtonLoader />
                ) : i18n.language === "fa" ? (
                  "ذخیره"
                ) : (
                  "Save"
                )}
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        <p className="mt-4 text-sm text-gray-500">{value}</p>
      </section>
    </>
  );
};

export default Box;
