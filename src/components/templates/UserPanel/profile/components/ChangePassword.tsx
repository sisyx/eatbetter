import { Button } from "../../../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../../shadcn/ui/dialog";
// import usePostData from "@/src/hooks/usePostData";
// import { changePasswordSchema } from "@/src/validations/rules";
import { useFormik } from "formik";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
// import { toast } from "../../../../../hooks/use-toast";
import { useTranslation } from "react-i18next";
import usePostData from "../../../../../hooks/usePostData";
import { toast } from "../../../../../hooks/use-toast";
import { ButtonLoader } from "../../../../modules/loader/Loader";
import { authStore } from "../../../../../stores/auth";
import { changePasswordSchema } from "../../../../../validations/rules";

interface newPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

const ChangePassword = () => {
  const { t, i18n } = useTranslation();
  const { userData } = authStore((state) => state);

  const successFunc = (data: { statusCode: number; message: string }) => {
    if (data.statusCode === 200) {
      formHandler.resetForm();
      toast({
        variant: "success",
        title:
          i18n.language === "fa"
            ? "رمز عبور با موفقیت بروزرسانی شد"
            : "Password updated successfully.",
      });
      setOpen(false);
    } else {
      toast({
        variant: "danger",
        title: data.message,
      });
    }
  };

  const { mutate: mutation, isPending } = usePostData<any>(
    "/api/user/ChangePassword",
    null,
    true,
    successFunc,
  );
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const formHandler = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values: newPasswordData) => {
      mutation({
        userId: userData?.id,
        oldPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmPassword,
      });
    },
    validationSchema: changePasswordSchema,
  });
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    formHandler.handleSubmit();
  };
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          className="mb-5 mt-10 block bg-gray-100 text-black hover:!text-white"
        >
          {t("profile.changePassword")}
        </Button>
      </DialogTrigger>
      <DialogContent
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="w-full max-w-full sm:!max-w-[425px]"
      >
        <div>
          <DialogTitle>
            <p className="text-center font-thin">
              {i18n.language === "fa" ? "رمز عبور فعلی" : "Current password"}
            </p>
          </DialogTitle>

          <input
            className="w-full border-b border-solid px-3 py-2 outline-none"
            type="text"
            name="currentPassword"
            value={formHandler.values.currentPassword}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
          />
          {formHandler.touched.currentPassword &&
            formHandler.errors.currentPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.currentPassword as any}
              </span>
            )}
        </div>
        <div>
          <p className="text-center font-thin">
            {i18n.language === "fa" ? " رمز عبور جدید" : "New password"}
          </p>
          <div className="relative">
            <input
              className="w-full border-b border-solid px-3 py-2 outline-none"
              type={showNewPass ? "text" : "password"}
              name="newPassword"
              value={formHandler.values.newPassword}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
            />
            <LuEye
              onClick={() => setShowNewPass((prev) => !prev)}
              className={`absolute ${i18n.language === "fa" ? "left-3" : "right-3"} top-[15px] cursor-pointer`}
            />
          </div>
          {formHandler.touched.newPassword &&
            formHandler.errors.newPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.newPassword as any}
              </span>
            )}
        </div>
        <div>
          <p className="text-center font-thin">
            {i18n.language === "fa"
              ? "تکرار رمز عبور جدید"
              : "Confirm Password"}
          </p>
          <div className="relative">
            <input
              className="w-full border-b border-solid px-3 py-2 outline-none"
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formHandler.values.confirmPassword}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
            />
            <LuEye
              onClick={() => setShowConfirmPass((prev) => !prev)}
              className={`absolute ${i18n.language === "fa" ? "left-3" : "right-3"} top-[15px] cursor-pointer`}
            />
          </div>
          {formHandler.touched.confirmPassword &&
            formHandler.errors.confirmPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.confirmPassword as any}
              </span>
            )}
        </div>

        <Button
          onClick={(event) => submitHandler(event)}
          variant={"main"}
          className="mx-auto my-3 block h-9 text-center"
        >
          {isPending ? (
            <ButtonLoader />
          ) : i18n.language === "fa" ? (
            "ﺗﻐﯿﯿﺮ رمزعبور"
          ) : (
            "Change Password"
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
