import Container from "../../components/modules/Container/Container";
import Card from "../../components/templates/Diet/Card";
import Sliders from "../../components/templates/Diet/Sliders";
import Modal from "../../components/templates/Diet/questionModal";
import { useTranslation } from "react-i18next";
import useGetData from "../../hooks/useGetData";
import { getAllDiets } from "../../utils/fetchs";
import Loader from "../../components/modules/loader/Loader";
import { Button } from "../../components/shadcn/ui/button";
import { authStore } from "../../stores/auth";
import { toast } from "../../hooks/use-toast";

const Diets = () => {
  const { t, i18n } = useTranslation();

  const { data, isLoading } = useGetData(["dietsPage", i18n.language], () =>
    getAllDiets(i18n.language),
  );
  const { userData } = authStore((state) => state);
  return (
    <Container>
      <div
        dir={i18n.language === "fa" ? "ltr" : "rtl"}
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
      >
        <img
          className="mx-auto block w-52 sm:!hidden"
          src="/images/KTG7110z38dUr53v92-unscreen.gif"
          alt=""
        />
        <div className="flex items-baseline justify-end gap-2 text-2xl font-bold">
          <h5 className="mb-2 max-sm:text-xl">{t("dietsTitleone")}</h5>
          <div className="h-2 w-2 rounded-xl bg-main">
            <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
          </div>
        </div>
        <div
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
          className="text-right"
        >
          <div className="flex items-center">
            <p className="mt-4 sm:!mt-0 sm:leading-9">{t("dietsTextOne")}</p>
            <img
              className="hidden w-1/2 sm:!block"
              data-aos="fade-right"
              src="/images/KTG7110z38dUr53v92-unscreen.gif"
              alt=""
            />
          </div>

          <div className="flex flex-col items-center sm:flex-row">
            <img
              data-aos="fade-right"
              className="w-1/2"
              src="/images/k9d7314g4G4v3TI76G-unscreen.gif"
              alt=""
            />
            <p className="sm:leading-9">{t("dietsTextTwo")}</p>
          </div>
        </div>

        <div>
          <div className="mt-5 flex items-center justify-end gap-2 text-2xl font-bold">
            <h5 className="!text-base sm:!text-xl"> {t("dietsTitleTwo")} </h5>

            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </div>
          <div
            className="mb-5 mt-8"
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            <p>{t("dietsTextThree")}</p>
            {userData && userData.package ? (
              <Modal />
            ) : (
              <Button
                className="mx-auto mb-14 mt-5 block"
                onClick={() => {
                  toast({
                    title: userData
                      ? i18n.language === "fa"
                        ? "لطفا ابتدا پکیج تهیه کنید"
                        : "Please purchase the package first"
                      : i18n.language === "fa"
                        ? "لطفا ابتدا وارد حسابتون بشید    "
                        : "Please Login first",

                    variant: "success",
                    className:
                      i18n.language === "fa" ? "justify-start" : "justify-end",
                  });
                }}
                variant={"main"}
              >
                {t("dietsButtonOne")}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2 text-2xl font-bold">
          <h5 className="!text-base sm:!text-xl"> {t("dietsTitleThree")} </h5>
          <div className="h-2 w-2 rounded-xl bg-main">
            <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
          </div>
        </div>
        <main
          className="mt-5 hidden grid-cols-[1fr,1fr] items-center gap-4 sm:!grid md:!grid-cols-[1fr,1fr,1fr]"
          dir="rtl"
        >
          {data &&
            data.diets.length &&
            data.diets.map(
              (data: {
                allowedFoods: string;
                description: string;
                howToImplement: string;
                id: number;
                name: string;
              }) => <Card data={data} />,
            )}
        </main>
        {data && data.diets.length && <Sliders data={data.diets} />}
      </div>
      {isLoading && <Loader />}
    </Container>
  );
};

export default Diets;
