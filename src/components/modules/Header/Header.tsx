import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { authStore } from "../../../stores/auth";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";

export default function index() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "fa",
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { userData } = authStore((state) => state);

  return (
    <>
      <div
        dir={i18n.language === "fa" ? "ltr" : "rtl"}
        style={{ animation: isScrolled ? " slideDown 0.35s ease-out" : "none" }}
        className={`flex w-full items-center justify-between px-4 py-5 sm:!px-4 xl:!px-24 ${isScrolled ? "fixed top-0 z-50 rounded-ee-xl rounded-es-xl bg-white py-3 shadow-md" : ""}`}
      >
        <div className="w-[85px]">
          <Link to={"/"}>
            <img src="logo.png" alt="logo"  className="min-w-[90px] max-w-[90px]" />
          </Link>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex flex-row-reverse gap-3 text-sm xl:gap-5 xl:text-base">
            <Link
              to={"/"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("hederMainpage")}</li>
            </Link>
            <Link
              to={"/diets"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("diets")}</li>
            </Link>
            <Link
              to={"/challenges"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("sideBar.challenges")}</li>
            </Link>
            {/* {userData && userData.country ? (
              <Link
                to={"/packages"}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("package")}</li>
              </Link>
            ) : null} */}

            <div className="group relative flex transition-all">
              <Link
                to={"/cooking"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("cookingInstruction")}
                </li>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 rotate-180 transition-all group-hover:rotate-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg> */}
              </Link>
              {/* <div className="absolute top-[100%] z-[999] hidden w-[650px] rounded-xl bg-main text-white group-hover:flex group-hover:justify-center">
                <div className="border-r border-[#00000014] p-2">
                  <p className="text-end font-bold">{t("breakfast")}</p>
                  <ul className="flex flex-col gap-2 p-5 text-end">
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>نان و پنیر و گوجه و خیار</li>
                    </Link>
                  </ul>
                </div>
                <div className="border-r border-[#00000014] p-2">
                  <p className="text-end font-bold">ناهار</p>
                  <ul className="flex flex-col gap-2 p-5 text-end">
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>برنج سفید آبکش</li>
                    </Link>
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>برنج قهوه ای کته</li>
                    </Link>
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>خورشت قورمه سبزی</li>
                    </Link>
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>خورشت قیمه</li>
                    </Link>
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>کباب دیگی</li>
                    </Link>
                  </ul>
                </div>
                <div className="border-r border-[#00000014] p-2">
                  <p className="text-end font-bold">سوپ ها</p>
                  <ul className="flex flex-col gap-2 p-5 text-end">
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>آش رشته</li>
                    </Link>
                  </ul>
                </div>
                <div className="p-2">
                  <p className="text-end font-bold">سالاد ها</p>

                  <ul className="flex flex-col gap-2 p-5 text-end">
                    <Link to={""} className="text- hover:text-mainHover">
                      {" "}
                      <li>سالاد</li>
                    </Link>
                    <Link to={""} className="hover:text-mainHover">
                      {" "}
                      <li>سالادشیرازی</li>
                    </Link>
                  </ul>
                </div>
              </div> */}
            </div>
            <Link
              to={"/training"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li> {t("exercises")}</li>
            </Link>
            <Link
              to={"/blogs"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("blog")}</li>
            </Link>

            <Link
              to={"/sleep"}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("sleep_soul_mental")}</li>
            </Link>

            {/* <div className="group relative flex transition-all">
              <Link to={""} className="group flex items-center justify-center">
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("exercises")}
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 rotate-180 transition-all group-hover:rotate-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </Link>
              <div className="absolute top-[100%] z-[999] hidden w-32 rounded-xl bg-main text-white group-hover:flex">
                <ul className="flex flex-col gap-2 p-6 text-end">
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>شنا</li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>اسکات</li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>ورزش شکم</li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>پیاده روی </li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>پلانگ</li>
                  </Link>
                </ul>
              </div>
            </div> */}

            <div className="group relative flex transition-all">
              <Link
                to={"/contacts"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("constactus")}
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 rotate-180 transition-all group-hover:rotate-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </Link>
              <div className="absolute top-[100%] z-[999] hidden w-32 rounded-xl bg-main text-white group-hover:flex">
                <ul className="flex flex-col gap-2 p-5 text-end">
                  <Link to={"/about"} className="hover:text-mainHover">
                    {" "}
                    <li>{t("aboutus")}</li>
                  </Link>
                  <Link to={"/contacts"} className="hover:text-mainHover">
                    {" "}
                    <li>{t("constactus")}</li>
                  </Link>
                  <Link to={"/cooperate"} className="hover:text-mainHover">
                    {" "}
                    <li>{t("workwithus")}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <svg
              className="relative size-8 lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="!pt-4">
            <SheetHeader
              className="border-b border-b-main py-0 pb-3"
              dir={i18n.language === "fa" ? "ltr" : "rtl"}
            >
              <SheetTitle className="py-0">
                <div className="flex items-center justify-between lg:hidden">
                  <button
                    onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
                    className="flex items-center justify-center gap-1 rounded-xl border border-transparent bg-white p-2 text-center text-base text-mainHover transition-all hover:border-mainHover hover:text-mainHover"
                  >
                    <span>{t("headerlang")}</span>
                    <IoLanguage />
                  </button>
                  {userData ? (
                    <Link to={"/userPanel/profile"}>
                      <button className="rounded-md bg-main p-2 px-3 text-center text-sm text-white transition-all hover:bg-mainHover xl:text-base">
                        {userData.username}
                      </button>
                    </Link>
                  ) : (
                    <Link to={"/register"}>
                      <button className="rounded-md bg-main p-2 px-3 text-center text-sm text-white transition-all hover:bg-mainHover xl:text-base">
                        {t("headerlogin")}
                      </button>
                    </Link>
                  )}
                </div>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-2 p-6 text-center">
              <Link
                to={"/"}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("hederMainpage")}</li>
              </Link>
              <Link
                to={"/blogs"}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("blog")}</li>
              </Link>
              <Link
                to={"/diets"}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("diets")}</li>
              </Link>
              {userData ? (
                <Link
                  to={"/packages"}
                  className="rounded-md p-2 transition-all hover:text-main"
                >
                  {" "}
                  <li>{t("package")}</li>
                </Link>
              ) : null}
              <Link
                to={"/sleep"}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("sleep_soul_mental")}</li>
              </Link>
              <Link
                to={"/training"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("exercises")}
                </li>
              </Link>
              <Link
                to={"/cooking"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("cookingInstruction")}
                </li>
              </Link>
              <Link
                to={"/contacts"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("constactus")}
                </li>
              </Link>
              <Link
                to={"/about"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("aboutus")}
                </li>
              </Link>
              <Link
                to={"/cooperate"}
                className="group flex items-center justify-center"
              >
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("workwithus")}
                </li>
              </Link>
            </ul>

            <div className="absolute bottom-0 right-0 w-full border border-t-main p-3 text-center">
              <p>{t("logout")}</p>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center justify-center gap-2 max-lg:hidden">
          <button
            onClick={() =>
              i18n.changeLanguage(i18next.language == "en" ? "fa" : "en")
            }
            className="flex items-center justify-center gap-1 rounded-xl border border-transparent bg-white p-2 text-center text-mainHover transition-all hover:border-mainHover hover:text-mainHover"
          >
            <span>{t("headerlang")}</span>
            <IoLanguage />
          </button>
          {userData ? (
            <Link to={"/userPanel/profile"}>
              <button className="rounded-md bg-main p-2 px-3 text-center text-sm text-white transition-all hover:bg-mainHover xl:text-base">
                {userData.username}
              </button>
            </Link>
          ) : (
            <Link to={"/register"}>
              <button className="rounded-md bg-main p-2 px-3 text-center text-sm text-white transition-all hover:bg-mainHover xl:text-base">
                {t("headerlogin")}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
