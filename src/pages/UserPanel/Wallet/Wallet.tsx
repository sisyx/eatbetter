import { Link } from "react-router-dom";
import Layout from "../../../Layouts/UserLayouts";
import { Button } from "../../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";

const Wallet = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col-reverse items-center justify-evenly md:flex-row">
        <div>
          <p className="mb-4 text-xl sm:text-2xl">{t("wallet.stockTtile")}</p>
          <p>{t("wallet.stockText")}</p>
          <Link to={"/userpanel/wallet/stock"} className="w-full md:!w-max">
            <Button
              className="mx-auto mt-4 block w-full md:!w-max"
              variant={"main"}
            >
              {t("wallet.detail")}
            </Button>
          </Link>
        </div>
        <img
          src="/images/download-removebg-preview.png"
          alt="logo"
          className="w-3/4 opacity-40 sm:!w-1/4"
        />
      </div>
      <div className="mt-14 flex flex-col-reverse items-center justify-evenly gap-3 md:flex-row-reverse lg:mt-8 xl:mt-0">
        <div>
          <p className="mb-4 text-xl sm:text-2xl">
            {t("wallet.withDrawalTitle")}
          </p>
          <p>{t("wallet.withDrawalText")} </p>
          <Link
            to={"/userpanel/wallet/withdrawal"}
            className="w-full md:!w-max"
          >
            <Button
              className="mx-auto mt-4 block w-full md:!w-max"
              variant={"main"}
            >
              {t("wallet.detail")}
            </Button>
          </Link>
        </div>
        <img
          src="/images/pngwing.com.png"
          alt="logo"
          className="mb-4 w-2/4 opacity-40 sm:!mb-0 sm:!w-1/4"
        />
      </div>
    </Layout>
  );
};

export default Wallet;
