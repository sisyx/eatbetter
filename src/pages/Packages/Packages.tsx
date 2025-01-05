import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import useGetData from "../../hooks/useGetData";
import { authStore } from "../../stores/auth";
import Loader from "../../components/modules/loader/Loader";
import { getPackages } from "../../utils/fetchs";
import Card from "../../components/templates/Packages/Card";
import { useTranslation } from "react-i18next";

const Packages = () => {
  const { userData } = authStore((state) => state);

  const { data, isLoading } = useGetData(
    ["allPackages", String(userData?.id)],
    () => getPackages(userData?.id as number),
    {
      enabled: Boolean(userData?.id),
    },
  );
  const { i18n } = useTranslation();

  return (
    <Container>
      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-24 lg:!px-28"
      >
        <Title title={i18n.language === "fa" ? "پکیج ها" : "Packages"} />

        <div className="mt-16 grid grid-cols-[1fr] gap-16 sm:grid-cols-[1fr,1fr] sm:gap-10 xl:grid-cols-[1fr,1fr,1fr]">
          {data && data?.packages.map((pack: any) => <Card data={pack} />)}
        </div>
        {isLoading && <Loader />}
      </div>
    </Container>
  );
};

export default Packages;
