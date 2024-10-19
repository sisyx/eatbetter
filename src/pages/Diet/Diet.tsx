import Container from "../../components/modules/Container/Container";
import Card from "../../components/templates/Diet/Card";
import { diets } from "../../utils/data";
import Sliders from "../../components/templates/Diet/Sliders";

const Diet = () => {
  return (
    <Container>
      <div className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
        <img
          className="mx-auto block w-52 sm:!hidden"
          src="/images/KTG7110z38dUr53v92-unscreen.gif"
          alt=""
        />
        <div className="flex items-baseline justify-end gap-2 text-2xl font-bold">
          <h5 className="mb-2 max-sm:text-xl">معرفی رژیم های غذایی</h5>
          <div className="h-2 w-2 rounded-xl bg-main">
            <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
          </div>
        </div>
        <div dir="rtl" className="text-right">
          <div className="flex items-center">
            <p className="mt-4 sm:!mt-0 sm:leading-9">
              رژیم غذایی ما با دقت و ظرافت تمام بر اساس وزن، وضعیت بدنی و اهداف
              شما طراحی می‌شود تا دقیقاً به نیازهای شما پاسخ دهد. این برنامه ۲۱
              روزه، که هر روزش به صورت جداگانه تنظیم شده است، بر اساس اصل جادویی
              عدد ۲۱ استوار است—چرا که ۲۱ روز زمان لازم برای ایجاد و تثبیت
              عادت‌های جدید است. اما هدف ما تنها کاهش وزن نیست؛ ما به دنبال
              تغییر سبک زندگی شما به سمت یک الگوی سالم و پایدار هستیم. این رژیم،
              با زبانی ساده و در عین حال علمی و حرفه‌ای، تمام جزئیات را توضیح
              داده‌ایم تا پس از ۲۱ روز نه تنها به راحتی رژیم را ادامه دهید، بلکه
              بتوانید از منوی متنوع دوره نیز مجدداً استفاده کنید.
            </p> 
            <img
              className="hidden w-1/2 sm:!block"
              data-aos="fade-right"
              src="/images/KTG7110z38dUr53v92-unscreen.gif"
              alt=""
            />
          </div>

          <div className="flex items-center sm:flex-row flex-col">
            <img
              data-aos="fade-right"
              className="w-1/2"
              src="/images/k9d7314g4G4v3TI76G-unscreen.gif"
              alt=""
            /> 
            <p className="sm:leading-9">
              تمام مواد غذایی مجاز و غیرمجاز به وضوح ذکر شده‌اند و همچنین مشخص
              کرده‌ایم که این رژیم برای چه افرادی مناسب نیست. به همراه رژیم،
              <span className="border-b border-main pb-1 text-green-700">
                {" "}
                توصیه‌های کاربردی و نکات جانبی
              </span>{" "}
              هم ارائه می‌شود تا شما را در مسیر دستیابی به اهداف‌تان همراهی
              کنیم. همراهی برنامه ورزشی ۲۱ روزه شخصی‌سازی ‌شده به همراه رژیم
              برای دستیابی به اندام و وزن ایده‌آل، تلفیق رژیم غذایی با ورزش،
              راهکاری اثربخش و ضروری است. به همین دلیل، ما در کنار رژیم غذایی
              اختصاصی، یک برنامه ورزشی کاملاً شخصی‌سازی‌شده را برای شما ارائه
              می‌دهیم. این برنامه ۲۱ روزه با تمرینات روزانه، به‌طور دقیق بر اساس
              سطح آمادگی جسمانی شما طراحی شده و شامل حرکات ورزشی، نحوه اجرای
              صحیح آنها و زمان‌بندی هر تمرین است. با دنبال کردن این برنامه که
              مکمل رژیم غذایی شماست، می‌توانید تغییرات قابل‌توجهی در افزایش
              تناسب اندام و سلامت خود مشاهده کنید.
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-end gap-2 text-2xl font-bold">
          <h5 className="max-sm:text-xl"> انواع رژیم ها </h5>
          <div className="h-2 w-2 rounded-xl bg-main">
            <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
          </div>
        </div>
        <main
          className="mt-5 hidden grid-cols-[1fr,1fr] items-center gap-4 sm:!grid md:!grid-cols-[1fr,1fr,1fr]"
          dir="rtl"
        >
          {diets.map((data) => (
            <Card {...data} />
          ))}
        </main>
        <Sliders />
      </div>
    </Container>
  );
};

export default Diet;
