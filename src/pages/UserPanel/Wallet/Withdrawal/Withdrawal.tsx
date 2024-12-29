import Layout from "../../../../Layouts/UserLayouts";
import Title from "../../../../components/modules/Title/Title";
import { Button } from "../../../../components/shadcn/ui/button";
import { useFormik } from "formik";
import { stockSchema } from "../../../../validations/rules";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../../stores/auth";
import usePostData from "../../../../hooks/usePostData";
import Loader from "../../../../components/modules/loader/Loader";
import { useEffect, useState } from "react";
import useGetData from "../../../../hooks/useGetData";
import { getWithdrawalStatus } from "../../../../utils/fetchs";
import Cookies from "js-cookie";
import { convertToJalali } from "../../../../utils/numbers";
import { Link } from "react-router-dom";
import { toast } from "../../../../hooks/use-toast";

const Withdrawal = () => {
  const { t } = useTranslation();
  const { userData } = authStore((state) => state);
  const [amount, setAmount] = useState("");
  const [highAmount, setHighAmount] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [withDrawalStatusCheck, setWithDrawalStatusCheck] = useState(false);
  const withDrawalId = Cookies.get("withDrawalId");

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
    `/api/UserWalletInfo/CreateOrUpdateWallet?userId=${userData?.id}`,
    "اطلاعات کارت با موفقیت ثبت شد",
    false,
    (data) => {
      if (data.statusCode === 200) {
        formHandler.resetForm();
      }
    },
    false,
    "auth",
  );
  const { mutate: withDrawalMutation, isPending: withDrawalReqPending } =
    usePostData(
      `/api/UserPanel/create-withdrawal-request`,
      "درخواست شما برای برداشت با موفقیت ثبت شد و به زودی مبلغ توسط ادمین به کارت شما واریز میشود",
      false,
      (data) => {
        if (data.statusCode === 200) {
          setAmount("");
          setWithDrawalStatusCheck(true);
          Cookies.set("withDrawalId", data.withdrawalRequestId, {
            expires: 9999999,
            path: "/",
          });
        } else {
          toast({
            title: data.messages.persian,
            variant: "danger",
          });
        }
      },
      false,
      "auth",
    );

  useEffect(() => {
    if (userData?.id) {
      setUserRegister(userData.cartRegister);
    }
  }, [userData]);

  const handleChange = (event: any) => {
    let value = event.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (value > (userData?.walletBalance as string)) setHighAmount(true);
    else setHighAmount(false);

    setAmount(formattedValue);
  };

  const withdrawalHandler = () => {
    withDrawalMutation({
      userId: userData?.id,
      amount: amount.replace(/,/g, ""),
    });
  };

  const { data, isLoading } = useGetData<any>(
    withDrawalId ? ["withdrawalStatus", withDrawalId] : [],
    () => getWithdrawalStatus(withDrawalId as string),
    {
      enabled: Boolean(withDrawalId),
    },
  );

  useEffect(() => {
    if (data) {
      setWithDrawalStatusCheck(true);
    }
  }, [data]);

  return (
    <Layout>
      <div className="relative mx-auto w-max rounded-lg p-8 pt-12 text-center shadow-xl">
        <p> {t("withdrawal.money")}</p>
        <p className="mt-2 text-main">
          {userData?.walletBalance.toLocaleString()} ریال
        </p>
      </div>

      <div className="mt-10 sm:mt-6">
        <Title title={t("withdrawal.titleOne")} />

        <p>{t("withdrawal.textOne")}</p>
        <Title className="mt-8" title={t("withdrawal.titleTwo")} />
        <p>{t("withdrawal.textTwo")}</p>

        {withDrawalStatusCheck ? (
          <div className="mt-10 text-center">
            {data.withdrawalRequest.status === "Pending" ? (
              <p className="rounded-md bg-orange-500 p-2 text-sm text-white md:text-base">
                درخواست برداشت شما در وضعیت انتظار برای تایید ادمین می باشد
              </p>
            ) : null}
            {data.withdrawalRequest.status === "Processing" ? (
              <p className="rounded-md bg-blue-500 p-2 text-sm text-white md:text-base">
                درخواست برداشت شما توسط ادمین تایید شده است و به زودی مبلغ به
                حساب شما واریز میشود
              </p>
            ) : null}
            {data.withdrawalRequest.status !== "Completed" ? (
              <p className="rounded-md bg-green-500 p-2 text-sm text-white md:text-base">
                درخواست برداشت شما تایید و مبلغ به حساب شما واریز شده است
              </p>
            ) : null}
            {data.withdrawalRequest.status === "Cansel" ? (
              <>
                <p className="rounded-md bg-red-500 p-2 text-center text-sm text-white md:text-base">
                  درخواست برداشت شما توسط ادمین رد شده است
                </p>
                <div className="flex flex-col items-center justify-evenly gap-3 text-right text-sm md:flex-row md:gap-0">
                  <div>
                    <p className="mt-4">
                      دلایلی که ممکنه درخواست شما رد شده باشد:
                    </p>
                    <ul>
                      <li>
                        اطلاعات کارت بانکی شما با یکدیگر مطابقت نداشته باشد
                      </li>
                      <li>
                        حساب بانکی با این مشخصات وارد شده وجود نداشته باشد
                      </li>
                    </ul>
                  </div>

                  <div className="text-center md:text-right">
                    <p className="mt-3">
                      مبلغ: {data.withdrawalRequest.amount.toLocaleString()}
                    </p>
                    <p className="mt-3">
                      شماره کارت:{" "}
                      {data.withdrawalRequest.walletInfo.accountNumber}
                    </p>
                    <p className="mt-3">
                      تاریخ درخواست شما:{" "}
                      {convertToJalali(
                        data.withdrawalRequest.requestedAt.slice(0, 10),
                      )}
                    </p>
                    <Link className="mt-3 block text-blue-600" to={"/contacts"}>
                      ارتباط با ما
                    </Link>
                  </div>
                </div>{" "}
              </>
            ) : null}

            {data.withdrawalRequest.status !== "Cansel" && (
              <div className="mt-6">
                <p className="mt-3">
                  مبلغ: {data.withdrawalRequest.amount.toLocaleString()}
                </p>
                <p className="mt-3">
                  شماره کارت: {data.withdrawalRequest.walletInfo.accountNumber}
                </p>
                <p className="mt-3">
                  تاریخ درخواست شما:{" "}
                  {convertToJalali(
                    data.withdrawalRequest.requestedAt.slice(0, 10),
                  )}
                </p>
                <Link className="mt-3 block text-blue-600" to={"/contacts"}>
                  ارتباط با ما
                </Link>
              </div>
            )}

            {data.withdrawalRequest.status !== "Completed" ? (
              <Button
                onClick={() => {
                  Cookies.remove("withDrawalId");
                  window.location.reload();
                }}
                className="mt-4 border-main"
                variant={"outline"}
              >
                ایجاد درخواست جدید
              </Button>
            ) : null}
          </div>
        ) : userData && !userRegister ? (
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
                {formHandler.errors.shabaNumber &&
                  formHandler.errors.shabaNumber}
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
              disabled={!formHandler.isValid || !formHandler.dirty}
              variant={"main"}
              className="mx-auto !block h-9 w-full !rounded-md outline-none sm:w-1/3"
            >
              {t("withdrawal.submit")}
            </Button>
            {userData.cartRegister ? (
              <p
                className="mt-4 cursor-pointer text-center text-sm"
                onClick={() => {
                  setUserRegister(true);
                }}
              >
                برگشت
              </p>
            ) : (
              ""
            )}
          </form>
        ) : (
          <div className="mt-10 flex items-center justify-center gap-10 px-10 py-7 text-center">
            <div>
              <p className="text-sm">
                لطفا مبلغ مورد نظر جهت برداشت را وارد کنید
              </p>
              <p className="text-xs text-red-500">
                توجه کنید که مبلغ به ریال میباشد
              </p>
              <input
                value={amount}
                onChange={handleChange}
                type="text"
                dir="ltr"
                className="mt-6 block w-[300px] rounded-md border border-gray-500 bg-white px-3 py-2 outline-0"
              />
              <Button
                disabled={
                  !amount ||
                  highAmount ||
                  amount === "0" ||
                  (userData?.walletBalance as string) < "9000000" ||
                  Number(amount.replace(/,/g, "")) < 9000000
                }
                className="mt-5 w-full"
                variant={"main"}
                onClick={withdrawalHandler}
              >
                {(userData?.walletBalance as string) < "9000000"
                  ? "موجودی شما کمتر از حداقل برای برداشت است"
                  : Number(amount.replace(/,/g, "")) < 9000000
                    ? "حداقل میزان برداشت 9000000 تومان است"
                    : "تایید"}
              </Button>
              {highAmount ? (
                <p className="mx-auto mt-3 text-sm text-red-600">
                  مبلغ وارده بیش از حد مجاز هست
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="space-y-3">
              <p>شماره کارت از قبل ثبت شده شما:</p>
              <p>{userData?.wallet.accountNumber}</p>
              <p className="text-sm">{userData?.wallet.bankName}</p>
              <Button
                className="border-main"
                onClick={() => {
                  setUserRegister(false);
                }}
                variant={"outline"}
              >
                تغییر شماره کارت
              </Button>
            </div>
          </div>
        )}
      </div>
      {isPending || isLoading || (withDrawalReqPending && <Loader />)}
    </Layout>
  );
};

export default Withdrawal;
