import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import { toast } from "../../../hooks/use-toast";
import { Button } from "../../../components/shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../stores/auth";

const Introductions = () => {
  const { i18n, t } = useTranslation();
  const { userData } = authStore((state) => state);

  // const columns = [
  //   {
  //     name: t("introductions.trOne"),
  //     selector: (row: { user: string }) => row.user,
  //   },
  //   {
  //     name: t("introductions.trTwo"),
  //     selector: (row: { date: string }) => row.date,
  //   },
  //   {
  //     name: t("introductions.trThree"),
  //     selector: (row: { email: string }) => row.email,
  //   },
  // ];
  // const data = [
  //   {
  //     id: 1,
  //     user: "شاهین مشکل گشا",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     user: "شب بخیر جون دل",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     user: "شاهین مشکل گشا",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     user: "شب بخیر جون دل",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     user: "شاهین مشکل گشا",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 6,
  //     user: "شب بخیر جون دل",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 7,
  //     user: "شاهین مشکل گشا",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  //   {
  //     id: 8,
  //     user: "شب بخیر جون دل",
  //     date: "1403/05/01",
  //     email: "kasra@gmail.com",
  //   },
  // ];
  return (
    <Layout>
      <Title title={t("introductions.titleOne")} className="mt-20" />
      <img
        src="/images/download-removebg-preview.png"
        alt="logo"
        className={`${i18n.language === "fa" ? "left-1 sm:!left-[118px]" : "right-1 sm:!right-[118px]"} absolute top-28 opacity-40`}
      />
      <div className="relative z-20 flex items-center gap-3">
        <p
          onClick={() => {
            navigator.clipboard
              .writeText(userData?.referralCode as string)
              .then(() => {
                toast({
                  variant: "success",
                  className:
                    i18n.language === "fa" ? "justify-start" : "justify-end",
                  title:
                    i18n.language === "fa"
                      ? "کد معرفی با موفقیت کپی شد"
                      : "Referral code copied successfully",
                });
              });
          }}
          className="mt-4 w-max cursor-pointer rounded-sm border-2 border-main p-2 px-5 text-2xl font-bold"
        >
          {userData?.referralCode}
        </p>
        <Button
          onClick={() => {
            navigator.clipboard
              .writeText(userData?.referralCode as string)
              .then(() => {
                toast({
                  variant: "success",
                  className:
                    i18n.language === "fa" ? "justify-start" : "justify-end",
                  title:
                    i18n.language === "fa"
                      ? "کد معرفی با موفقیت کپی شد"
                      : "Referral code copied successfully",
                });
              });
          }}
          className="mt-4"
          variant={"main"}
        >
          {t("introductions.copy")}
        </Button>
      </div>
      <div className="relative z-20 mt-10 space-y-4">
        <p className="text-xl">{t("introductions.textOne")}</p>
        <p>{t("introductions.textTwo")}</p>
        <p>{t("introductions.textThree")}</p>
      </div>

      {/* <div className="mt-8">
        <Title title={t("introductions.titleTwo")} />
        <DataTable
          responsive
          progressComponent={".... "}
          pagination
          columns={columns}
          data={data}
        />
      </div> */}
    </Layout>
  );
};

export default Introductions;
