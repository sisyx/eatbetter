import { Link } from "react-router-dom";
import Layout from "../../../../Layouts/UserLayouts";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Title from "../../../../components/modules/Title/Title";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../../stores/auth";

const Stock = () => {
  const { i18n, t } = useTranslation();
  const { userData } = authStore((state) => state);

  return (
    <Layout>
      <div className="relative mx-auto w-max rounded-lg p-8 pt-12 text-center shadow-xl">
        <p>{t("stock.money")}</p>
        <p className="mt-2 text-main">{userData?.walletBalance} تومان</p>
      </div>
      <div className="relative z-20 mt-10 space-y-4">
        <Title title={t("stock.title")} />

        <p>{t("stock.desOne")}</p>
        <p>{t("stock.desTwo")}</p>
      </div>

      <Link
        className="mt-6 flex items-center gap-1 text-sm text-blue-600 sm:text-base"
        to={"/userPanel/introductions"}
      >
        {t("stock.linkOne")}

        <FaArrowAltCircleRight className="text-xl xs:text-base" />
      </Link>
      <Link
        className="mt-6 flex items-center gap-1 text-sm text-blue-600 sm:text-base"
        to={"/userPanel/wallet/withdrawal"}
      >
        {t("stock.linkTwo")}
        <FaArrowAltCircleRight className="text-base" />
      </Link>

      <span
        className={`${i18n.language === "fa" ? "left-[98px]" : "right-[98px]"} absolute top-0 text-main opacity-30 sm:text-[250px] md:!text-[500px]`}
      >
        $
      </span>
    </Layout>
  );
};

export default Stock;
