import { useEffect } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { Button } from "../../components/shadcn/ui/button";
import useGetData from "../../hooks/useGetData";
import { authStore } from "../../stores/auth";
import Loader from "../../components/modules/loader/Loader";
import { getPackages } from "../../utils/fetchs";
import { useTranslation } from "react-i18next";

const Packages = () => {
  const { userData } = authStore((state) => state);

  const { i18n, t } = useTranslation();

  const { data, isLoading, refetch } = useGetData(
    ["allPackages", String(userData?.id)],
    () => getPackages(userData?.id as number),
  );

  console.log(data);

  useEffect(() => {
    if (userData?.id) {
      refetch();
    }
  }, [userData?.id]);

  return (
    <Container>
      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-24 lg:!px-28"
      >
        <Title title={i18n.language === "fa" ? "پکیج ها" : "Packages"} />

        <div className="mt-16 grid grid-cols-[1fr] gap-16 sm:grid-cols-[1fr,1fr] sm:gap-10 xl:grid-cols-[1fr,1fr,1fr]">
          {data?.packages.map((pack: any) => (
            <div className="rounded-md border border-main text-center">
              <p className="bg-main py-5 text-white">
                {i18n.language === "fa" ? pack.nameFa : pack.name}
              </p>
              <p className="border-y border-gray-400 py-5">
                {pack.currency === "IRR"
                  ? i18n.language === "fa"
                    ? "ریال"
                    : "Rials"
                  : i18n.language === "fa"
                    ? "دلار"
                    : "Dollers"}
              </p>
              <p className="border-b border-gray-400 py-5">
                {i18n.language === "fa"
                  ? ` انتخاب حداکثر ${pack.maxDiet} رژیم`
                  : `Choose up to ${pack.maxDiet} diets`}
              </p>
              <div className="pt-5">
                {pack.currency === "IRR" ? (
                  i18n.language === "fa" ? (
                    <p> {pack.price.toLocaleString()} هزار ریال</p>
                  ) : (
                    <p dir="ltr">
                      {pack.price.toLocaleString()} thousand rials
                    </p>
                  )
                ) : i18n.language === "fa" ? (
                  `${pack.price.toLocaleString()} دلار  `
                ) : (
                  <p dir="ltr">${pack.price.toLocaleString()}</p>
                )}
              </div>
              <Button className="my-8 w-[90%]" variant="main">
                {i18n.language === "fa" ? "خرید" : "Buy"}
              </Button>
            </div>
          ))}
        </div>
        {isLoading && <Loader />}
      </div>
    </Container>
  );
};

export default Packages;
