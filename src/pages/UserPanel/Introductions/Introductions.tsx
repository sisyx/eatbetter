import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import DataTable from "react-data-table-component";

import { toast } from "../../../hooks/use-toast";
import { Button } from "../../../components/shadcn/ui/button";

const Introductions = () => {
  const columns = [
    {
      name: "نام کاربری",
      selector: (row: { user: string }) => row.user,
    },
    {
      name: "تاریخ",
      selector: (row: { date: string }) => row.date,
    },
    {
      name: "ایمیل",
      selector: (row: { email: string }) => row.email,
    },
  ];
  const data = [
    {
      id: 1,
      user: "شاهین مشکل گشا",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 2,
      user: "شب بخیر جون دل",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 3,
      user: "شاهین مشکل گشا",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 4,
      user: "شب بخیر جون دل",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 5,
      user: "شاهین مشکل گشا",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 6,
      user: "شب بخیر جون دل",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 7,
      user: "شاهین مشکل گشا",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
    {
      id: 8,
      user: "شب بخیر جون دل",
      date: "1403/05/01",
      email: "kasra@gmail.com",
    },
  ];
  return (
    <Layout>
      <Title title="کد معرفی" />
      <img
        src="/images/download-removebg-preview.png"
        alt="logo"
        className="absolute left-1 sm:!left-[118px] top-4 opacity-40"
      />
      <div className="flex items-center gap-3 relative z-20">
        <p
          onClick={() => {
            navigator.clipboard.writeText("23424").then(() => {
              toast({
                variant: "success",
                title: "کد معرفی با موفقیت کپی شد",
              });
            });
          }}
          className="mt-4 w-max cursor-pointer rounded-sm border-2 border-main p-2 px-5 text-2xl font-bold"
        >
          {" "}
          23424{" "}
        </p>
        <Button
          onClick={() => {
            navigator.clipboard.writeText("23424").then(() => {
              toast({
                variant: "success",
                title: "کد معرفی با موفقیت کپی شد",
              });
            });
          }}
          className="mt-4"
          variant={"main"}
        >
          کپی
        </Button>
      </div>
      <div className="mt-10 space-y-4 relative z-20">
        <p className="text-xl">
          با دوستانتون به دنیای جدیدی از تخفیف‌ها قدم بذارید!
        </p>
        <p>
          با معرفی "کد معرف" شما به دوستانتون، هم خودتون 50 هزار تومان تخفیف و
          هم کیف پولتون 50 هزار تومان شارژ میشه.
        </p>
        <p>
          دوستانتون با خرید هر پکیج با کد معرف شما، از این تخفیف ویژه بهره مند
          میشن و شما هم مبلغ 50 هزار تومان به کیف پولتون اضافه می کنید!
        </p>
      </div>

      <div className="mt-8">
        <Title title="دعوت ها" />
        <DataTable
          responsive
          progressComponent={".... "}
          pagination
          columns={columns}
          data={data}
        />
      </div>
    </Layout>
  );
};

export default Introductions;
