import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function index() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("fa");

  useEffect(() => {
    i18n.changeLanguage(language); 
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

  return (
    <>
      <div
        style={{ animation: isScrolled ? " slideDown 0.35s ease-out" : "none" }}
        className={`flex w-full items-center justify-between px-4 py-5 sm:!px-12 lg:!px-24 ${isScrolled ? "fixed top-0 z-50 rounded-ee-xl rounded-es-xl bg-white py-3 shadow-md" : ""}`}
      >
        <div>
          <img src="BLP-b.png" alt="logo" width={"80px"} />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex flex-row-reverse gap-5">
            <Link
              to={""}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("hederMainpage")}</li>
            </Link>
            <Link
              to={""}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("blog")}</li>
            </Link>
            <Link
              to={""}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("diets")}</li>
            </Link>
            <Link
              to={""}
              className="rounded-md p-2 transition-all hover:text-main"
            >
              {" "}
              <li>{t("sleep_soul_mental")}</li>
            </Link>
            <div className="group relative flex transition-all">
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
              <div className="absolute top-[100%] hidden w-32 rounded-xl bg-main text-white group-hover:flex">
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
            </div>
            <div className="group relative flex transition-all">
              <Link to={""} className="group flex items-center justify-center">
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("cookingInstruction")}
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
              <div className="absolute top-[100%] hidden w-[650px] rounded-xl bg-main text-white group-hover:flex group-hover:justify-center">
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
              </div>
            </div>
            <div className="group relative flex transition-all">
              <Link to={""} className="group flex items-center justify-center">
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
              <div className="absolute top-[100%] hidden w-32 rounded-xl bg-main text-white group-hover:flex">
                <ul className="flex flex-col gap-2 p-5 text-end">
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>{t("aboutus")}</li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>{t("constactus")}</li>
                  </Link>
                  <Link to={""} className="hover:text-mainHover">
                    {" "}
                    <li>{t("workwithus")}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <div className="relative lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="group size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="absolute -right-10 top-[100%] hidden w-screen rounded-xl bg-main text-white group-hover:flex">
            <ul className="flex w-screen flex-col gap-2 p-6 text-center">
              <Link
                to={""}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>{t("hederMainpage")}</li>
              </Link>
              <Link
                to={""}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>بلاگ</li>
              </Link>
              <Link
                to={""}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>رژیم ها</li>
              </Link>
              <Link
                to={""}
                className="rounded-md p-2 transition-all hover:text-main"
              >
                {" "}
                <li>خواب و روح و روان</li>
              </Link>
              <Link to={""} className="group flex items-center justify-center">
                <li className="rounded-md p-2 transition-all hover:text-main">
                  {t("exercises")}
                </li>
              </Link>
              <Link to={""} className="group flex items-center justify-center">
                <li className="rounded-md p-2 transition-all hover:text-main">
                  دستور آشپزی
                </li>
              </Link>
              <Link to={""} className="group flex items-center justify-center">
                <li className="rounded-md p-2 transition-all hover:text-main">
                  ارتباط با ما
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 max-lg:hidden">
          <button
            onClick={() => setLanguage(i18next.language == "en" ? "fa" : "en")}
            className="flex items-center justify-center gap-1 rounded-xl border border-transparent bg-white p-2 text-center text-mainHover transition-all hover:border-mainHover hover:text-mainHover"
          >
            <span>{t("headerlang")}</span>
            <IoLanguage />
          </button>
          <Link to={""}>
            <button className="rounded-xl bg-main p-2 text-center text-white transition-all hover:bg-mainHover">
              {t("headerlogin")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
