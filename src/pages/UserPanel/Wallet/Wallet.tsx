import { Link } from "react-router-dom";
import Layout from "../../../Layouts/UserLayouts";
import { Button } from "../../../components/shadcn/ui/button";

const Wallet = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse items-center justify-evenly md:flex-row">
        <div>
          <p className="mb-4 text-xl sm:text-2xl">موجودی کیف پول خود را مشاهده کنید </p>
          <p>
            با خیال راحت موجودی کیف پولتون رو با جزئیات کامل مشاهده کنید و از
            مبالغ شارژ و موجودی خود مطلع شوید.
          </p>
          <Link to={"/userpanel/wallet/stock"} className="w-full md:!w-max">
            <Button
              className="mx-auto mt-4 block w-full md:!w-max"
              variant={"main"}
            >
              جزئیات بیشتر
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
          <p className="mb-4 text-xl sm:text-2xl">از کیف پول خود برداشت کنید </p>
          <p>
          به راحتی و بدون هیچ‌گونه پیچیدگی، موجودی کیف پول دیجیتال خود را به حساب بانکی شخصی‌تان انتقال دهید. فقط با چند کلیک ساده، می‌توانید مبلغ مورد نظر را از کیف پول خود برداشت کرده و به حساب بانکی خود واریز کنید.
          </p>
          <Link
            to={"/userpanel/wallet/withdrawal"}
            className="w-full md:!w-max"
          >
            <Button
              className="mx-auto mt-4 block w-full md:!w-max"
              variant={"main"}
            >
              جزئیات بیشتر
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
