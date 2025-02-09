import { Link } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { toast } from "../../../hooks/use-toast";
import { authStore } from "../../../stores/auth";
import usePostData from "../../../hooks/usePostData";
import { ButtonLoader } from "../../modules/loader/Loader";

type Props = {
  data: any;
  panel?: boolean;
  isActive?: boolean;
};

const Card = ({ data, panel }: Props) => {
  const { i18n } = useTranslation();

  const images = [
    "/images/11663519_20944480.svg",
    "/images/15128913_ODcyMjQ5OTkx.jpg",
    "/images/7434479_3665593.svg",
    "/images/12145582_Wavy_Edu-02_Single-11.svg",
    "/images/8381144_3901686.svg",
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const { userData } = authStore((state) => state);

  const { mutate: mutation, isPending } = usePostData<[]>(
    `/api/Diet/SelectDiets?userId=${userData?.id}`,
    i18n.language === "fa"
      ? "رژِیم با موفقیت به پنل کاربری شما اضافه شد"
      : "Diet has been successfully added to your user panel",
    false,
    () => {},
    false,
    "auth",
  );

  const reciveDietHandler = () => {
    if (userData) {
      if (userData.selectedDiets.length + 1 > userData.package?.maxDiet) {
        toast({
          title:
            i18n.language === "fa"
              ? "شما به حداکثر سقف انتخاب رژیم با توجه پکیج خریداری شده خود رسیدید"
              : "You have reached the maximum diet selection limit according to the package you purchased",
          variant: "danger",
          className: i18n.language === "fa" ? "justify-start" : "justify-end",
        });
      } else {
        mutation([data.id] as any);
      }
    }
  };

  const isDietReserve = userData?.selectedDiets.some(
    (diet: any) => diet.id === data.id,
  );

  return (
    <div
      data-aos="fade-up"
      className={`${panel ? "pb-6" : "pb-7"} relative mt-9 rounded-sm bg-white px-3 pt-8 text-center transition-transform sm:!shadow-md hover:sm:!-translate-y-2`}
    >
      <img
        className="absolute -top-10 left-1/2 block h-16 w-[84px] -translate-x-1/2 transform"
        src={randomImage}
        alt="cover"
      />
      <p className="mb-7 mt-2 text-sm sm:text-base">
        {panel ? (i18n.language === "fa" ? data.nameFa : data.name) : data.name}
      </p>
      {panel ? (
        <>
          <p className="cursor-pointer text-sm" dir="rtl">
            {i18n.language === "fa"
              ? data.descriptionFa.slice(0, 190) + "..."
              : data.description.slice(0, 190)}
          </p>
          <Link className="mt-4 block" to={`/userPanel/health/${data.id}`}>
            <Button variant={"main"}>
              {i18n.language === "fa" ? "جزئیات بیشتر" : "more details"}{" "}
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Modal {...data} />

          {userData && userData.package ? (
            <Button
              onClick={reciveDietHandler}
              className={`${isDietReserve ? "pointer-events-none border-main" : ""} mt-5 w-full`}
              variant={isDietReserve ? "outline" : "main"}
            >
              {isPending ? (
                <ButtonLoader />
              ) : i18n.language === "fa" ? (
                isDietReserve ? (
                  "قبلا انتخاب شده است"
                ) : (
                  "دریافت رژیم"
                )
              ) : isDietReserve ? (
                "Already selected"
              ) : (
                "Get a diet"
              )}
            </Button>
          ) : (
            <Button
              onClick={() => {
                toast({
                  title: userData
                    ? i18n.language === "fa"
                      ? "لطفا ابتدا پکیج تهیه کنید"
                      : "Please purchase the package first"
                    : i18n.language === "fa"
                      ? "لطفا ابتدا وارد حسابتون بشید"
                      : "Please Login first",
                  variant: "success",
                  className:
                    i18n.language === "fa" ? "justify-start" : "justify-end",
                });
              }}
              className="mt-5 w-full"
              variant={"main"}
            >
              {i18n.language === "fa" ? "دریافت رژیم" : "Get a diet"}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
