import { Button } from "../../../components/shadcn/ui/button";

import { useTranslation } from "react-i18next";
import { toast } from "../../../hooks/use-toast";
import swal from "sweetalert";
import usePostData from "../../../hooks/usePostData";
import Loader from "../../modules/loader/Loader";
import { authStore } from "../../../stores/auth";
type Props = {
  data: {
    currency: string;
    id: number;
    maxDiet: number;
    name: string;
    nameFa: string;
    price: number;
    purchasedByUsers: any;
    transactions: any;
  };
};

const Card = (props: Props) => {
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);

  const { mutate: mutation, isPending } = usePostData<any>(
    userData?.country === "IR"
      ? `/api/Payment/request`
      : `/api/Stripe/create-checkout-session`,
    null,
    false,
    (data) => {
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        toast({
          title: data.message
            ? data.message
            : i18n.language === "fa"
              ? "کد معرف نادرست است"
              : "Referral code is not valid",
          variant: "danger",
          className: i18n.language === "fa" ? "justify-start" : "justify-end",
        });
      }
    },
  );

  const buyPackageHandler = () => {
    if (userData?.package) {
      toast({
        title:
          i18n.language === "fa"
            ? "شما از قبل یک پکیج فعال دارید و میتونید برای دیدن مشخصات پکیجتون به پنل کاربری خود مراجعه کنید"
            : "You already have an active package and you can visit your user panel to see your package details",
        variant: "danger",
        className: i18n.language === "fa" ? "justify-start" : "justify-end",
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
                amount: props.data?.price,
                description: "No Des",
                userId: userData?.id,
                mobile: userData?.phoneNumber,
                email: userData?.email,
                referralCode: inputValue ? inputValue : "",
                packageId: props.data?.id,
              };

              if (props.data) {
                mutation(data);
              }
            });
          } else {
            const data = {
              amount: props.data?.price,
              description: "No Des",
              userId: userData?.id,
              mobile: userData?.phoneNumber,
              email: userData?.email,
              referralCode: "",
              packageId: props.data?.id,
            };
            mutation(data);
          }
        }
      });
    }
  };

  return (
    <div className="rounded-md border border-main text-center">
      <p className="bg-main py-5 text-white">
        {i18n.language === "fa" ? props.data?.nameFa : props.data?.name}
      </p>
      <p className="border-y border-gray-400 py-5">
        {props.data?.currency === "IRR"
          ? i18n.language === "fa"
            ? "ریال"
            : "Rials"
          : i18n.language === "fa"
            ? "دلار"
            : "Dollers"}
      </p>
      <p className="border-b border-gray-400 py-5">
        {i18n.language === "fa"
          ? ` انتخاب حداکثر ${props.data?.maxDiet} رژیم`
          : `Choose up to ${props.data?.maxDiet} diets`}
      </p>
      <div className="pt-5">
        {props.data?.currency === "IRR" ? (
          i18n.language === "fa" ? (
            <p> {props.data?.price.toLocaleString()} هزار ریال</p>
          ) : (
            <p dir="ltr">{props.data?.price.toLocaleString()} thousand rials</p>
          )
        ) : i18n.language === "fa" ? (
          `${props.data?.price.toLocaleString()} دلار  `
        ) : (
          <p dir="ltr">${props.data?.price.toLocaleString()}</p>
        )}
      </div>
      <Button
        onClick={() => {
          buyPackageHandler();
        }}
        className="my-8 w-[90%]"
        variant="main"
      >
        {i18n.language === "fa" ? "خرید" : "Buy"}
      </Button>

      {isPending && <Loader />}
    </div>
  );
};

export default Card;
