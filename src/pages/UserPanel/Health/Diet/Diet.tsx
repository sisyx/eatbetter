import { useTranslation } from "react-i18next";
import Title from "../../../../components/modules/Title/Title";
import Modal from "../../../../components/templates/UserPanel/Health/Diets/Modal";
import Layout from "../../../../Layouts/UserLayouts";

const Diet = () => {
  const { i18n, t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <Title title="رژیم شماره سوم" />
        <div className="relative" dir="rtl">
          <div className="relative z-50 flex gap-3 rounded-full bg-main p-2 px-4 text-white">
            <div className="border-l border-white pl-3 text-center text-xs sm:text-sm">
              <p>{t('health.duration')}</p>
              <p>23 روز</p>
            </div>
            <div className="border-l border-white pl-3 text-center text-xs sm:text-sm">
              <p> {t('health.start')}</p>
              <p>ثبت نشده</p>
            </div>
            <div className="text-center text-xs sm:text-sm">
              <p>{t('health.end')}</p>
              <p>ثبت نشده</p>
            </div>
          </div>
          <div className="absolute z-40 -bottom-12 right-12 sm:right-16 rounded-md bg-black before:absolute before:-top-6 before:right-16 before:block before:h-6 before:w-3 before:rounded-b-[30px] before:bg-black before:content-[''] after:absolute after:-top-6 after:left-16 after:block after:h-6 after:w-3 after:rounded-b-[30px] after:bg-black after:content-['']">
            <Modal />
          </div>
        </div>
      </div>
      <main data-aos="fade-up"> 
        <video
          src="/images/5NJy1lvx8cz37xS05B.mp4"
          loop
          autoPlay
          className="mx-auto w-[400px]"
        ></video>
        <p className="leading-8">
          رژیم قلیایی با هدف ایجاد تعادل در pH بدن و بهبود سلامت عمومی طراحی شده
          است. این رژیم بر مصرف غذاهای قلیایی مانند میوه‌ها، سبزیجات و دانه‌ها
          تأکید دارد و مصرف غذاهای اسیدی مانند گوشت قرمز، محصولات لبنی و شکر را
          کاهش می‌دهد. رژیم قلیایی به کاهش التهابات، بهبود سطح انرژی و ارتقاء
          سلامت پوست و گوارش کمک می‌کند. با دنبال کردن این رژیم، احساس سبکی و
          شادابی بیشتری خواهید داشت و بدن شما به‌طور طبیعی به تعادل می‌رسد. این
          رژیم برای چه کسانی مناسب است؟ افرادی که به دنبال بهبود سطح انرژی، کاهش
          التهابات و تقویت سلامت عمومی بدن هستند. چه کسانی نباید از این رژیم
          استفاده کنند؟ افرادی که نیاز به مصرف بالای پروتئین دارند یا به
          رژیم‌های خاص مانند کتو متعهد هستند، ممکن است این رژیم برایشان مناسب
          نباشد.
        </p>
        <p className="leading-8">
          رژیم قلیایی با هدف ایجاد تعادل در pH بدن و بهبود سلامت عمومی طراحی شده
          است. این رژیم بر مصرف غذاهای قلیایی مانند میوه‌ها، سبزیجات و دانه‌ها
          تأکید دارد و مصرف غذاهای اسیدی مانند گوشت قرمز، محصولات لبنی و شکر را
          کاهش می‌دهد. رژیم قلیایی به کاهش التهابات، بهبود سطح انرژی و ارتقاء
          سلامت پوست و گوارش کمک می‌کند. با دنبال کردن این رژیم، احساس سبکی و
          شادابی بیشتری خواهید داشت و بدن شما به‌طور طبیعی به تعادل می‌رسد. این
          رژیم برای چه کسانی مناسب است؟ افرادی که به دنبال بهبود سطح انرژی، کاهش
          التهابات و تقویت سلامت عمومی بدن هستند. چه کسانی نباید از این رژیم
          استفاده کنند؟ افرادی که نیاز به مصرف بالای پروتئین دارند یا به
          رژیم‌های خاص مانند کتو متعهد هستند، ممکن است این رژیم برایشان مناسب
          نباشد.
        </p>
        <p className="leading-8">
          رژیم قلیایی با هدف ایجاد تعادل در pH بدن و بهبود سلامت عمومی طراحی شده
          است. این رژیم بر مصرف غذاهای قلیایی مانند میوه‌ها، سبزیجات و دانه‌ها
          تأکید دارد و مصرف غذاهای اسیدی مانند گوشت قرمز، محصولات لبنی و شکر را
          کاهش می‌دهد. رژیم قلیایی به کاهش التهابات، بهبود سطح انرژی و ارتقاء
          سلامت پوست و گوارش کمک می‌کند. با دنبال کردن این رژیم، احساس سبکی و
          شادابی بیشتری خواهید داشت و بدن شما به‌طور طبیعی به تعادل می‌رسد. این
          رژیم برای چه کسانی مناسب است؟ افرادی که به دنبال بهبود سطح انرژی، کاهش
          التهابات و تقویت سلامت عمومی بدن هستند. چه کسانی نباید از این رژیم
          استفاده کنند؟ افرادی که نیاز به مصرف بالای پروتئین دارند یا به
          رژیم‌های خاص مانند کتو متعهد هستند، ممکن است این رژیم برایشان مناسب
          نباشد.
        </p>
      </main>
    </Layout>
  );
};

export default Diet;
