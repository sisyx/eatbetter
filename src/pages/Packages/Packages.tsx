import { useState } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { Button } from "../../components/shadcn/ui/button";
import useGetData from "../../hooks/useGetData";
import { authStore } from "../../stores/auth";
import Loader from "../../components/modules/loader/Loader";
import { getPackages } from "../../utils/fetchs";
import { useTranslation } from "react-i18next";
import { toast } from "../../hooks/use-toast";
import swal from "sweetalert";
import usePostData from "../../hooks/usePostData";

const Packages = () => {
  const { userData } = authStore((state) => state);
  const [selectedPackage, setSelectedPackage] = useState<{
    price: string;
    id: string;
  }>();
  const { i18n } = useTranslation();
  const { mutate: mutation, isPending } = usePostData<any>(
    `/api/Payment/request`,
    null,
    false,
    (data) => {
      console.log(data);
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        toast({
          title:
            i18n.language === "fa"
              ? "کد معرف نادرست است"
              : "Referral code is not valid",
          variant: "danger",
        });
      }
    },
  );

  const { data, isLoading } = useGetData(
    ["allPackages", String(userData?.id)],
    () => getPackages(userData?.id as number),
    {
      enabled: Boolean(userData?.id),
    },
  );

  console.log(data);

  const buyPackageHandler = () => {
    if (userData?.package) {
      toast({
        title:
          i18n.language === "fa"
            ? "شما از قبل یک پکیج فعال دارید و میتونید برای دیدن مشخصات پکیجتون به پنل کاربری خود مراجعه کنید"
            : "You already have an active package and you can visit your user panel to see your package details",
        variant: "danger",
      });
    } else {
      swal({
        title:
          i18n.language === "fa"
            ? "آیا از خرید این پکیج اطمینان دارید؟"
            : "Are you sure you want to buy this package?",
        icon: "warning",
        buttons: [
          i18n.language === "fa" ? "نه" : "No",
          i18n.language === "fa" ? "آره" : "yes",
        ],
      }).then((res) => {
        if (res) {
          if (userData?.country === "IR") {
            swal({
              title:
                i18n.language === "fa"
                  ? "کد معرف(اختیاری)"
                  : "Referral Code(optional)",
              content: {
                element: "input",
                attributes: {
                  type: "text",
                  id: "ReferralInput",
                },
              },
              buttons: [i18n.language === "fa" ? "ادامه" : "Next", false],
            }).then(() => {
              const inputValue = (
                document?.querySelector("#ReferralInput") as HTMLInputElement
              )?.value;

              const data = {
                amount: selectedPackage?.price,
                description: "No Des",
                userId: userData?.id,
                mobile: userData?.phoneNumber,
                email: userData?.email,
                referralCode: inputValue ? inputValue : "",
                packageId: selectedPackage?.id,
              };
              console.log(data);
              
              mutation(data);
            });
          } else {
            const inputValue = (
              document?.querySelector("#ReferralInput") as HTMLInputElement
            )?.value;

            const data = {
              amount: selectedPackage?.price,
              description: "No Des",
              userId: userData?.id,
              mobile: userData?.phoneNumber,
              email: userData?.email,
              referralCode: inputValue ? inputValue : "",
              packageId: selectedPackage?.id,
            };
            mutation(data);
          }
        }
      });
    }
  };

  return (
    <Container>
      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-24 lg:!px-28"
      >
        <Title title={i18n.language === "fa" ? "پکیج ها" : "Packages"} />

        <div className="mt-16 grid grid-cols-[1fr] gap-16 sm:grid-cols-[1fr,1fr] sm:gap-10 xl:grid-cols-[1fr,1fr,1fr]">
          {data &&
            data?.packages.map((pack: any) => (
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
                <Button
                  onClick={() => {
                    buyPackageHandler();
                    setSelectedPackage(pack);
                  }}
                  className="my-8 w-[90%]"
                  variant="main"
                >
                  {i18n.language === "fa" ? "خرید" : "Buy"}
                </Button>
              </div>
            ))}
        </div>
        {isLoading && <Loader />}
      </div>
      {isPending && <Loader />}
    </Container>
  );
};

export default Packages;
