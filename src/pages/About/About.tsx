import { useTranslation } from "react-i18next";
import Container from "../../components/modules/Container/Container";
const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
        <div
          className="space-y-8 text-right text-sm sm:!space-y-6 sm:text-base"
          dir="rtl"
        >
          <div dir={i18n.language === 'fa' ? "rtl" : 'ltr'} className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            <p data-aos="fade-left" className="sm:leading-9">
              <span className="text-base sm:text-xl">
                {t("aboutTextOne")}
                <span className="text-main"> {t("aboutTextTwo")}</span>
                {t("aboutTextThree")}
              </span>
              {t("aboutTextFour")}
              <span className="border-b border-main pb-1">
                {" "}
                {t("aboutTextFive")}
              </span>
              .
            </p>
            <video
              data-aos="fade-right"
              src="/images/aeNVP4ci73jntrH1iy.mp4"
              loop
              autoPlay
              className="w-[76%] md:!w-[38%]"
            ></video>
          </div>
          <div  dir={i18n.language === 'fa' ? "rtl" : 'ltr'} className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <img
              className="w-[76%] md:!w-[35%]"
              src="/images/ed018d59-3e71-49b8-bdaf-f91b5932628d.jfif"
              alt=""
            />
            <p className="sm:leading-9">
            {t("aboutTextSix")}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
