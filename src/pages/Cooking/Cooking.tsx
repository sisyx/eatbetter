import { useTranslation } from "react-i18next";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/shadcn/ui/accordion";
import useGetData from "../../hooks/useGetData";
import Cookies from "js-cookie";
import { toast } from "../../hooks/use-toast";
import { tokenName } from "../../config/constants";
import { useState } from "react";
import { Button } from "../../components/shadcn/ui/button";
import { t } from "i18next";
import Loader from "../../components/modules/loader/Loader";
const apiUrl = import.meta.env.VITE_API_URL;

const Cooking = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [sliceToShow, setSliceToShow] = useState(10);

  const {data: cookings, isError: error, isLoading: loading, } = useGetData(["cookings", language], getCookings);

  async function getCookings() {
      const eatBetterToken = Cookies.get(tokenName);
      try {
          const req = await fetch(`${apiUrl}/api/Cook/GetAllCooks?lang=${language}`, {
              headers: {
                  Authorization: `Bearer ${eatBetterToken}`,
                  "accept": "text/plain"
              }
          });
          if (!req.ok) throw new Error(req.statusText);
          const res = await req.json();
          
          if (res.statusCode === 200 && !!res?.data) {
              return res.data;
          }
      } catch (error) {
          toast({title: language === "en" ? "Failed To Fetch Cookies :)" : "مشکلی در دریافت غذا ها به وجود آمد.", variant: "danger"})
          console.error(error);
          return error;
      }
  }

  function showMoreCookings() {
    setSliceToShow(cur => cur+5)
  }

  return (
    <Container>
      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="relative px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
      >
        <Title title={t("cookings.title")} />
        <p className="mt-8">{t("cookings.text")}</p>
        <img
          src="https://cdn-icons-png.freepik.com/256/9862/9862039.png?semt=ais_hybrid"
          className={`${i18n.language === "fa" ? "left-20 lg:left-48 " : "right-20 lg:right-48 "} absolute  top-14 hidden w-52 opacity-20 md:block lg:w-auto`}
          alt="logo"
        />
        {
          loading ? <Loader/> : ""
        }
        {
          error ? <div>
            <span>{t("cookings.errorHappend")}</span>
          </div> : ""
        }
        <Accordion
          // data-aos="fade-up"
          type="single"
          collapsible
          className={`mt-10 w-full ${(error || loading || !cookings?.length) ? "hidden" : ""}`}
        >
          {
            cookings ? cookings.slice(0, sliceToShow).map((cooking: any, index: number) =>
          <AccordionItem className="border-0" value={`item-${index}`}>
            <AccordionTrigger className="flex border-b px-5 py-4 outline-none hover:!no-underline">
              <div
                className={`${i18n.language === "fa" ? "justify-start" : "justify-end"} flex flex-col`}
              >
                <p className={`${i18n.language === "fa" ? "text-right" : "text-left"}`}> {cooking.food}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-4 space-y-4 px-10">
              <div>
                <p>{cooking.calories}</p>
                {cooking.ingredients}
              </div>
              <div>
                <p>{t("cookings.amountOfNutritional")}:</p>• {t("cookings.protein")}: {cooking.protein} • {t("cookings.fats")}: {cooking.fat} • {t("cookings.carbs")}: {cooking.carbs} • {t("cookings.otherVitamins")}: {cooking.vitaminsAndMinerals}
              </div>
              <div>
                <p> {t("cookings.properFor")}: </p>
                {cooking.suitableForDiets}
              </div>
              <div>
                <p> {t("cookings.notProperFor")}: </p>
                {cooking.notSuitableFor}
              </div>
              <div>
                <p>{t("cookings.cookInstructions")} {cooking.food}:</p>
                {cooking.instructions}
              </div>
              <div>
                <p>{t("cookings.tips")}:</p>
                {cooking.cookingTips}
              </div>
              <div>
                <p>{t("cookings.howToCookitHealthier")}:</p>
                {cooking.howToMakeItHealthier}
              </div>
            </AccordionContent>
          </AccordionItem>
            ) : "هیچ چیزی یافت نشد"
          }
        </Accordion>
        {
          (!loading && !error && cookings?.length) &&
          <div className="w-full flex justify-center py-4">
            <Button className={`w-full ${sliceToShow >= cookings?.length ? "hidden" : ""}`} onClick={showMoreCookings}>{t("cookings.loadMore")}</Button>
          </div>
        }
      </div>
    </Container>
  );
};

export default Cooking;
