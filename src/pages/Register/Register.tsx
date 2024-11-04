import { useState } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { i18n, t } = useTranslation();

  return (
    <Container>
      <div
        className={`${i18n.language === "fa" ? "lg:flex-row" : "lg:flex-row-reverse"} relative flex items-start px-12 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28`}
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
          className="mx-auto w-full md:w-1/2 lg:mx-0"
        ></video>
        <div
          dir={`${i18n.language === "fa" ? "rtl" : "ltr"}`}
          className="z-20 w-full rounded-lg bg-white px-4 pb-14 pt-6 shadow-2xl sm:px-10 lg:mt-24 lg:w-[410px] lg:pt-16"
        >
          <Title
            title={t("register.title")}
            className="w-full border-b border-gray-400"
          />
          <div className="grid grid-cols-[auto] items-baseline gap-2 sm:grid-cols-[auto,auto]">
            <div className="relative mt-12 w-full">
              <span
                className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
              >
                {t("register.userName")}
              </span>
              <input
                type="text"
                className="w-full rounded-xl border border-main p-3 pl-4"
              />
            </div>
            <div className="relative mt-4 w-full lg:mt-12">
              <span
                className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
              >
                {t("register.email")}
              </span>
              <input
                type="email"
                className="w-full rounded-xl border border-main p-3 pl-4"
              />
            </div>
            <div className="relative mt-4 w-full lg:mt-7">
              <span
                className={`${i18n.language === "fa" ? "right-3" : "left-3"} absolute -top-3 bg-white px-3 text-sm`}
              >
                {t("register.password")}
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl border border-main p-3 pl-4"
              />
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
                type={showConfirmPassword ? "text" : "password"}
                className="w-full rounded-xl border border-main p-3 pl-4"
              />
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
          <div className="mt-4 flex justify-center gap-3">
            <div className="flex gap-1">
              <input
                style={{ accentColor: "green" }}
                type="radio"
                checked
                name="country"
                value={"IR"}
                id=""
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
              />
              <p>INT</p>
            </div>
          </div>
          <Button variant={"main"} className="mt-7 w-full">
            {t("register.submit")}
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
