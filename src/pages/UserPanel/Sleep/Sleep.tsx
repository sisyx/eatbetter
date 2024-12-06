import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import { FaAngleLeft } from "react-icons/fa";
import SleepSchedule from "../../../components/templates/UserPanel/sleep/SleepSchedule";
import { useTranslation } from "react-i18next";

const Sleep = () => {
  const { i18n, t } = useTranslation();

  return ( 
    <Layout>
      <div>
        <Title title={t("sleep.titleOne")} />
        <p>{t("sleep.textOne")}</p>
      </div>

      <div className="mt-10">
        <Title title={t("sleep.titleTwo")} />
        <p>{t("sleep.textTwo")}</p>
      </div>

      <div className="mt-10">
        <Title title={t("sleep.titleThree")} />
        <p>{t("sleep.desThree")}</p>
        <ul className="py-3">
          {Object.values(t("sleep.optionsThree", { returnObjects: true })).map(
            (item: string, index: number) => (
              <li key={index} className="flex items-center">
                <FaAngleLeft className="text-main" />
                {item}
              </li>
            ),
          )}
        </ul>
        <p>{t("sleep.textThree")}</p>
      </div>

      <div className="mt-10">
        <Title title={t("sleep.titleFour")} />
        <p>{t("sleep.textFour")}</p>
      </div>

      <div className="mt-10">
        <Title title={t("sleep.titleFive")} />
        <p>{t("sleep.desFive")}</p>
        <ul className="list-decimal py-4 pr-4">
          {Object.values(t("sleep.optionsFive", { returnObjects: true })).map(
            (item: string, index: number) => (
              <li key={index} className="flex items-center">
                <FaAngleLeft className="text-main" />
                {item}
              </li>
            ),
          )}
        </ul>
        <p>{t("sleep.textFive")}</p>
      </div>
      <video
        data-aos="fade-up"
        src="/images/3q6IdMG5Xa8BJUYs1z.mp4"
        loop
        autoPlay
        className="mx-auto w-96"
      ></video>
      <div className="mt-10">
        <Title title={t("sleep.titleSix")} />
        <p>{t("sleep.textSix")}</p>
      </div>

      <p className="mt-10 font-bold">{t("sleep.lastText")}</p>

      <div className="mb-16 mt-10" data-aos="fade-up">
        <Title title={t("sleep.titleSeven")} />
        <p>{t("sleep.textSeven")}</p>

        <SleepSchedule />
      </div>

      <img
        className={`${i18n.language === "fa" ? "-left-6" : "right-0"} absolute top-20 h-[500px] opacity-20`}
        src="/images/sleep-removebg-preview.png"
        alt=""
      />
    </Layout>
  );
};

export default Sleep;
