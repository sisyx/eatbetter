import Layout from "../../../../Layouts/UserLayouts";
import Title from "../../../../components/modules/Title/Title";
import { Button } from "../../../../components/shadcn/ui/button";
import { useFormik } from "formik";
import { stockSchema } from "../../../../validations/rules";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../../stores/auth";
import usePostData from "../../../../hooks/usePostData";
import Loader from "../../../../components/modules/loader/Loader";

const Withdrawal = () => {
  const { t } = useTranslation();
  const { userData } = authStore((state) => state);

  const formHandler = useFormik({
    initialValues: { name: "", shabaNumber: "", bankName: "", cartNumber: "" },
    onSubmit: (values) => {
      const data = {
        accountNumber: values.cartNumber,
        iban: values.shabaNumber,
        bankName: values.bankName,
        fullName: values.name,
      };
      mutation(data);
    },
    validationSchema: stockSchema,
  });

  const { mutate: mutation, isPending } = usePostData(
    "/api/UserWalletInfo/CreateOrUpdateWallet",
    null,
    false,
    (data) => {
      if (data.statusCode === 2000) {
        formHandler.resetForm();
      }
    },
  );

  return (
    <Layout>
      <div className="relative mx-auto w-max rounded-lg p-8 pt-12 text-center shadow-xl">
        <p> {t("withdrawal.money")}</p>
        {/* <span className="absolute -bottom-0 left-[98px] text-2xl text-main">
          $
        </span> */}
        <p className="mt-2 text-main">{userData?.walletBalance} تومان</p>
      </div>

      <div className="mt-10 sm:mt-6">
        <Title title={t("withdrawal.titleOne")} />

        <p>{t("withdrawal.textOne")}</p>
        <Title className="mt-8" title={t("withdrawal.titleTwo")} />
        <p>{t("withdrawal.textTwo")}</p>

        <form
          data-aos="fade-up"
          onClick={formHandler.handleSubmit}
          className="mt-5 w-full p-4 shadow-md"
        >
          <div className="mb-5">
            <div className="flex flex-row-reverse items-baseline justify-end gap-2">
              <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                {" "}
                {t("withdrawal.shaba")}
              </label>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>

            <input
              name="shabaNumber"
              value={formHandler.values.shabaNumber}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type="text"
              id="shabaNumber"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
              required
            />
            <span className="mx-auto mt-2 block text-center text-xs text-red-600">
              {formHandler.errors.shabaNumber && formHandler.errors.shabaNumber}
            </span>
          </div>

          <div className="mb-5">
            <div className="flex flex-row-reverse items-baseline justify-end gap-2">
              <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                {" "}
                {t("withdrawal.bank")}
              </label>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>
            <input
              name="bankName"
              value={formHandler.values.bankName}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type="text"
              id="bankName"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
              required
            />
            <span className="mx-auto mt-2 block text-center text-xs text-red-600">
              {formHandler.errors.bankName && formHandler.errors.bankName}
            </span>
          </div>

          <div className="mb-5">
            <div className="flex flex-row-reverse items-baseline justify-end gap-2">
              <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                {t("withdrawal.cartUserName")}
              </label>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>
            <input
              name="name"
              value={formHandler.values.name}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type="text"
              id="text"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
              required
            />
            <span className="mx-auto mt-2 block text-center text-xs text-red-600">
              {formHandler.errors.name && formHandler.errors.name}
            </span>
          </div>

          <div className="mb-5">
            <div className="flex flex-row-reverse items-baseline justify-end gap-2">
              <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                {t("withdrawal.cartNumber")}
              </label>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>
            <input
              name="cartNumber"
              value={formHandler.values.cartNumber}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type="text"
              id="text"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
              required
            />
            <span className="mx-auto mt-2 block text-center text-xs text-red-600">
              {formHandler.errors.cartNumber && formHandler.errors.cartNumber}
            </span>
          </div>

          {/* <div className="mb-5">
            <div className="flex flex-row-reverse items-baseline justify-end gap-2">
              <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                {t("withdrawal.password")}
              </label>
              <div className="h-2 w-2 rounded-xl bg-main">
                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
              </div>
            </div>
            <input
              name="password"
              value={formHandler.values.password}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              type="password"
              id="text"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
              required
            />
            <span className="mx-auto mt-2 block text-center text-xs text-red-600">
              {formHandler.errors.password && formHandler.errors.password}
            </span>
          </div> */}

          <Button
            type="submit"
            variant={"main"}
            className="mx-auto !block h-9 w-full !rounded-md outline-none sm:w-1/3"
          >
            {t("withdrawal.submit")}
          </Button>
        </form>
      </div>
      {isPending && <Loader />}
    </Layout>
  );
};

export default Withdrawal;
