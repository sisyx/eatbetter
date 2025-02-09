import AnimatedBackground2 from "../../components/templates/Home/AnimatedBackground2";
import GenderSelector from "../../components/templates/Home/GenderSelector";
import DietsBtn from "../../components/templates/Home/DietsBtn";
import Container from "../../components/modules/Container/Container";
import { useTranslation } from "react-i18next";
import { authStore } from "../../stores/auth";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { userData } = authStore((state) => state);

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div className="pt-14 max-sm:px-5 max-sm:pt-1">
        <AnimatedBackground2 />
        <GenderSelector />
        <DietsBtn />

        <div className="px-28">
          <div
            dir={i18n.language === "fa" ? "ltr" : "rtl"}
            className="my-48 flex items-center justify-center gap-10 max-lg:flex-col"
          >
            <div className="flex w-[600px] flex-col gap-10 max-sm:w-[280px]">
              <h2 className="text-end text-[30px] font-bold text-main max-sm:text-[15px]">
                {" "}
                {t("homeSectionThreetitle")}
              </h2>
              <p className="text-end text-[20px] leading-8 max-sm:text-[15px]">
                {t("homeSectionThreeDes")}
              </p>
            </div>
            <div className="max-sm:w-[250px]">
              <video
                src="gif1.mp4"
                autoPlay
                muted
                loop
                className="w-[600px] rounded-xl shadow-xl"
              ></video>
            </div>
          </div>
          <div
            dir={i18n.language === "fa" ? "ltr" : "rtl"}
            className="my-48 flex flex-row-reverse items-center justify-center gap-10 max-lg:flex-col"
          >
            <div className="flex w-[50%] flex-col items-end gap-5 max-lg:w-[100%] max-sm:w-[250px]">
              <h5 className="text-[30px] font-bold text-main max-sm:text-[20px]">
                {t("homeSectionFourtitle")}
              </h5>
              <p className="text-end text-[16px] leading-7 text-gray-700">
                {t("homeSectionFourDes")}
              </p>
              <Link to={userData ? "/diets" : "/login"}>
                <button className="rounded-lg bg-main px-4 py-2 text-white hover:bg-mainHover">
                  {t("startBtn")}
                </button>
              </Link>
            </div>
            <div className="flex w-[50%] flex-wrap gap-5 max-lg:w-[100%] max-sm:w-[250px]">
              <div className="flex h-[200px] w-[270px] flex-col items-center justify-center gap-3 rounded-xl border border-[#00000034] px-2 text-center shadow-xl">
                <div className="rounded-full bg-mainHover p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h5>{t("homeSectionFourBoxTwoTitle")}</h5>
                <p className="text-[14px]">{t("homeSectionFourBoxTwoDes")}</p>
              </div>
              <div className="flex h-[200px] w-[270px] flex-col items-center justify-center gap-3 rounded-xl border border-[#00000034] px-2 text-center shadow-xl">
                <div className="rounded-full bg-mainHover p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                </div>
                <h5>{t("homeSectionFourBoxOneTitle")}</h5>
                <p className="text-[14px]">{t("homeSectionFourBoxOneDes")}</p>
              </div>
              <div className="flex h-[200px] w-[270px] flex-col items-center justify-center gap-3 rounded-xl border border-[#00000034] px-2 text-center shadow-xl">
                <div className="rounded-full bg-mainHover p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </div>
                <h5>{t("homeSectionFourBoxFourTitle")}</h5>
                <p className="text-[14px]">{t("homeSectionFourBoxFourDes")}</p>
              </div>
              <div className="flex h-[200px] w-[270px] flex-col items-center justify-center gap-3 rounded-xl border border-[#00000034] px-2 text-center shadow-xl">
                <div className="rounded-full bg-mainHover p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </div>
                <h5>{t("homeSectionFourBoxThreeTitle")}</h5>
                <p className="text-[14px]">{t("homeSectionFourBoxThreeDes")}</p>
              </div>
            </div>
          </div>
          <div className="mb-72 flex flex-col items-center justify-center gap-20">
            <div className="flex items-center justify-end gap-5 text-[20px] font-bold">
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
              <h2 className="max-sm:w-[180px] max-sm:text-[15px]">
                {t("homeSectionFiveTitle")}
              </h2>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 max-lg:flex-wrap">
              <div className="rounded-xl bg-green-500 p-6 text-center shadow-lg max-sm:w-[300px]">
                <div className="mb-4 text-2xl font-bold text-white">
                  {t("homeSectionFiveBoxFourTitle")}
                </div>
                <p className="text-white">{t("homeSectionFiveBoxFourDes")}</p>
              </div>
              <div className="2-[900px] rounded-xl bg-purple-500 p-6 text-center shadow-lg">
                <div className="mb-4 text-2xl font-bold text-white">
                  {t("homeSectionFiveBoxThreeTitle")}
                </div>
                <p className="text-white">{t("homeSectionFiveBoxThreeDes")}</p>
              </div>
              <div className="rounded-xl bg-blue-500 p-6 text-center shadow-lg">
                <div className="mb-4 text-2xl font-bold text-white">
                  {t("homeSectionFiveBoxTwoTitle")}
                </div>
                <p className="text-white">{t("homeSectionFiveBoxTwoDes")}</p>
              </div>
              <div className="rounded-xl bg-red-500 p-6 text-center shadow-lg">
                <div className="mb-4 text-2xl font-bold text-white">
                  {t("homeSectionFiveBoxOneTitle")}
                </div>
                <p className="text-white">{t("homeSectionFiveBoxOneDes")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Home;
