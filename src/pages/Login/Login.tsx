import { useState } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { toast } from "../../hooks/use-toast";
import Cookies from "js-cookie";
import { loginSchema } from "../../validations/rules";
import { ButtonLoader } from "../../components/modules/loader/Loader";
import usePostData from "../../hooks/usePostData";

interface formValues {
  userName: string;
  password: string;
}

const successFunc = (data: {
  statusCode: number;
  RefreshToken: string;
  accessToken: string;
}) => {
  if (data.statusCode === 200) {
    Cookies.set("eatBetterToken", data.RefreshToken, {
      expires: 9999999,
      path: "",
    });
    toast({
      variant: "success",
      title: "با موفقیت وارد   شدید",
    });
    // router.replace("/dashboard");
  } else if (data.statusCode === 400) {
    // toast({
    //   variant: "danger",
    //   title: "کاربر با این شماره در سایت ثبت نام شده است",
    // });
  } else {
    toast({
      variant: "danger",
      title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
    });
    // location.reload();
    // localStorage.clear();
  }
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { i18n, t } = useTranslation();

  const { mutate: mutation, isPending } = usePostData<{ phone: string }>(
    "/api/user/LoginUser",
    null,
    false,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values: formValues) => {
      const data = {
        username: formHandler.values.userName,
        password: formHandler.values.password,
      };
      console.log(data);

      // mutation(data as any);
    },
    validationSchema: loginSchema,
  });

  return (
    <Container>
      <div
        className={`${i18n.language === "fa" ? "md:flex-row" : "md:flex-row-reverse"} relative flex flex-col items-center px-12 max-sm:px-5 max-sm:pt-1 sm:!mb-44 sm:mt-20 lg:mt-0 lg:!px-28 xl:items-start`}
      >
        <img
          style={{ transform: "rotateY(181deg) " }}
          className={`${i18n.language === "fa" ? "right-0 xl:right-[10%]" : "left-0 xl:left-[10%]"} absolute -top-8 hidden h-[600px] w-[50%] object-cover opacity-30 lg:block xl:top-9`}
          src="/images/blob.svg"
          alt=""
        />
        <video
          src="/images/4C507YmpdJeL1Z82UN.mp4"
          autoPlay
          loop
          className="mx-auto w-full xs:h-[300px] md:!h-auto md:w-1/2 lg:mx-0"
        ></video>
        <div
          dir={`${i18n.language === "fa" ? "rtl" : "ltr"}`}
          className="z-20 w-full rounded-lg bg-white px-4 pb-14 pt-6 shadow-2xl sm:px-10 lg:mt-24 lg:w-[410px] lg:pt-16"
        >
          <Title
            title={t("login.title")}
            className="w-full border-b border-gray-400"
          />
          <div className="relative mt-12 w-full">
            <span
              className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
            >
              {t("login.userName")}
            </span>
            <input
              type="text"
              name="userName"
              value={formHandler.values.userName}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              className="w-full rounded-xl border border-main p-3 pl-4"
            />
            {formHandler.touched.userName && formHandler.errors.userName && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.userName}
              </span>
            )}
          </div>
          <div className="relative mt-7 w-full">
            <span
              className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
            >
              {t("login.password")}
            </span>
            <input
              name="password"
              value={formHandler.values.password}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type={showPassword ? "text" : "password"}
              className="w-full rounded-xl border border-main p-3 pl-4"
            />
            {formHandler.touched.password && formHandler.errors.password && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.password}
              </span>
            )}
            {showPassword ? (
              <FaEyeSlash
                className={`${i18n.language === "fa" ? "left-3" : "right-3"} absolute top-4 cursor-pointer`}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className={`${i18n.language === "fa" ? "left-3" : "right-3"} absolute top-4 cursor-pointer`}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <Button
            disabled={!formHandler.isValid || !formHandler.dirty}
            variant={"main"}
            type="submit"
            className="mt-7 h-[36px] w-full"
            onClick={() => formHandler.handleSubmit()}
          >
            {isPending ? <ButtonLoader /> : t("login.submit")}
          </Button>
          <p className="mt-6 text-center font-thin">
            {" "}
            {t("login.forgotPassword")}
          </p>
          <Link
            className="mt-3 block text-center font-thin text-main"
            to={"/register"}
          >
            {t("login.noAccount")}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
