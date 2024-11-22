import { useState } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";
import usePostData from "../../hooks/usePostData";
import Cookies from "js-cookie";
import { toast } from "../../hooks/use-toast";
import { useFormik } from "formik";
import { registerSchema } from "../../validations/rules";
import { ButtonLoader } from "../../components/modules/loader/Loader";

interface formValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
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
      title: "با موفقیت ثبت نام شدید",
    });
    // router.replace("/dashboard");
  } else if (data.statusCode === 400) {
    toast({
      variant: "danger",
      title: "کاربر قبلا در سایت ثبت نام شده است",
    });
  } else {
    toast({
      variant: "danger",
      title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
    });
    // location.reload();
    // localStorage.clear();
  }
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [country, setCountry] = useState("IR");
  const { i18n, t } = useTranslation();

   
  const { mutate: mutation, isPending } = usePostData<{ phone: string }>(
    "/api/user/RegisterUser",
    null,
    false,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      phone: "",
      confirmPassword: "",
    },
    onSubmit: (values: formValues) => {
      const data = {
        username: formHandler.values.userName,
        password: formHandler.values.password,
        confirmPassword: formHandler.values.confirmPassword,
        phoneNumber: formHandler.values.phone,
        email: formHandler.values.email,
        country: country,
      };
      console.log(data);
      
      mutation(data as any);
    },
    validationSchema: registerSchema,
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
          src="/images/olShi6AW2pQj75e9EX.mp4"
          autoPlay
          loop
          className="mx-auto w-full xs:h-[300px] md:!h-auto md:w-1/2 lg:mx-0"
        ></video>
        <div
          dir={`${i18n.language === "fa" ? "rtl" : "ltr"}`}
          className="z-20 w-full rounded-lg bg-white px-4 pb-14 pt-6 shadow-2xl sm:px-10 lg:mt-24 lg:w-[410px] lg:pt-16"
        >
          <Title
            title={t("register.title")}
            className="w-full border-b border-gray-400"
          />
          <div>
            <div className="mt-12 flex flex-col gap-2 xs:flex-row">
              <div className="relative w-full">
                <span
                  className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
                >
                  {t("register.userName")}
                </span>
                <input
                  type="text"
                  className="w-full rounded-xl border border-main p-3 pl-4 text-sm"
                  name="userName"
                  value={formHandler.values.userName}
                  onChange={formHandler.handleChange}
                  onBlur={formHandler.handleBlur}
                />
                {formHandler.touched.userName &&
                  formHandler.errors.userName && (
                    <span className="mt-2 block w-full text-center text-xs text-red-600">
                      {formHandler.errors.userName}
                    </span>
                  )}
              </div>

              <div className="relative mt-4 w-full xs:mt-0">
                <span
                  className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
                >
                  {t("register.phone")}
                </span>
                <input
                  type="text"
                  className="w-full rounded-xl border border-main p-3 pl-4 text-sm"
                  name="phone"
                  value={formHandler.values.phone}
                  onChange={formHandler.handleChange}
                  onBlur={formHandler.handleBlur}
                />
                {formHandler.touched.phone && formHandler.errors.phone && (
                  <span className="mt-2 block w-full text-center text-xs text-red-600">
                    {formHandler.errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="relative mb-2 mt-6 w-full lg:mb-0">
              <span
                className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
              >
                {t("register.email")}
              </span>
              <input
                type="email"
                name="email"
                value={formHandler.values.email}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                className="w-full rounded-xl border border-main p-3 pl-4 text-sm"
              />
              {formHandler.touched.email && formHandler.errors.email && (
                <span className="mt-2 block w-full text-center text-xs text-red-600">
                  {formHandler.errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 xs:flex-row">
              <div className="relative mt-4 w-full lg:mt-7">
                <span
                  className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
                >
                  {t("register.password")}
                </span>
                <input
                  name="password"
                  value={formHandler.values.password}
                  onChange={formHandler.handleChange}
                  onBlur={formHandler.handleBlur}
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-xl border border-main p-3 pl-8 text-sm"
                />
                {formHandler.touched.password &&
                  formHandler.errors.password && (
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
              <div className="relative mt-4 w-full lg:mt-7">
                <span
                  className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
                >
                  {t("register.confirmPassword")}
                </span>
                <input
                  name="confirmPassword"
                  value={formHandler.values.confirmPassword}
                  onChange={formHandler.handleChange}
                  onBlur={formHandler.handleBlur}
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full rounded-xl border border-main p-3 pl-8 text-sm"
                />
                {formHandler.touched.confirmPassword &&
                  formHandler.errors.confirmPassword && (
                    <span className="mt-2 block w-full text-center text-xs text-red-600">
                      {formHandler.errors.confirmPassword}
                    </span>
                  )}
                {showConfirmPassword ? (
                  <FaEyeSlash
                    className={`${i18n.language === "fa" ? "left-3" : "right-3"} absolute top-4 cursor-pointer`}
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <FaEye
                    className={`${i18n.language === "fa" ? "left-3" : "right-3"} absolute top-4 cursor-pointer`}
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-3">
            <div className="flex gap-1">
              <input
                style={{ accentColor: "green" }}
                type="radio"
                checked
                name="country"
                value={"IR"}
                id=""
                onClick={() => setCountry("IR")}
              />
              <p>IR</p>
            </div>

            <div className="flex gap-1">
              <input
                style={{ accentColor: "green" }}
                type="radio"
                name="country"
                value={"INT"}
                id=""
                onClick={() => setCountry("INT")}
              />
              <p>INT</p>
            </div>
          </div>
          <Button
            disabled={!formHandler.isValid || !formHandler.dirty}
            variant={"main"}
            type="submit"
            className="mt-7 h-[36px] w-full"
            onClick={() => formHandler.handleSubmit()}
          >
            {isPending ? <ButtonLoader /> : t("register.submit")}
          </Button>
          <Link
            className="mt-3 block text-center font-thin text-main"
            to={"/login"}
          >
            {t("register.haveAccount")}
          </Link>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Register;
