import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import BarChart from "../../../components/templates/UserPanel/Income/BarChart";

const Income = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-row-reverse items-baseline justify-end gap-2 text-2xl font-bold">
        <h5 className="mb-2 max-sm:text-xl">{t("income.title")}</h5>
        <div className="h-2 w-2 rounded-xl bg-main">
          <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
        </div>
      </div>
      <section className="mt-5 flex flex-col gap-3 md:!flex-row">
        <BarChart />
      </section>
    </Layout>
  );
};

export default Income;
