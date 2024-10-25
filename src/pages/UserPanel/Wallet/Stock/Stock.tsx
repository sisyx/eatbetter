import { Link } from "react-router-dom";
import Layout from "../../../../Layouts/UserLayouts";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Title from "../../../../components/modules/Title/Title";

const Stock = () => {
  return (
    <Layout>
      <div className="relative mx-auto w-max rounded-lg p-8 pt-12 text-center shadow-xl">
        <p>موجودی شما:</p>
        <p className="mt-2 text-main">120,000 تومان</p> 
      </div>
      <div className="relative z-20 mt-10 space-y-4">
        <Title title="چطور کیف پول را شارژ کنیم؟" />

        <p>
          با معرفی "کد معرف" شما به دوستانتون، هم خودتون 50 هزار تومان تخفیف و
          هم کیف پولتون 50 هزار تومان شارژ میشه.
        </p>
        <p>
          دوستانتون با خرید هر پکیج با کد معرف شما، از این تخفیف ویژه بهره مند
          میشن و شما هم مبلغ 50 هزار تومان به کیف پولتون اضافه می کنید!
        </p>
      </div>

      <Link
        className="mt-6 flex items-center sm:text-base text-sm gap-1 text-blue-600"
        to={"/userPanel/introductions"}
      >
        برای مشاهده افراد دعوت شده و کد معرف اینجا کلیک کنید
        <FaArrowAltCircleRight className="xs:text-base text-xl" />
      </Link>
      <Link
        className="mt-6 flex items-center sm:text-base text-sm gap-1 text-blue-600"
        to={"/userPanel/wallet/withdrawal"}
      >
        برداشت وجه
        <FaArrowAltCircleRight className="text-base" />
      </Link>

      <span className="absolute opacity-30 top-0 left-[98px] sm:text-[250px] md:!text-[500px] text-main">
          $
        </span>  
    </Layout>
  );
};

export default Stock;
