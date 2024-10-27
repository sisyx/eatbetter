import { Link } from "react-router-dom";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";

const Sleep = () => {
  return (
    <Container>
      <div
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
        dir="rtl"
      >
        <Title title="اهمیت خواب" />

        <p className="leading-8">
          خواب کلید سلامت جسم و ذهن است. زمانی که بدن و مغز استراحت می‌کنند،
          انرژی بازسازی شده و عملکردها بهبود می‌یابند. خواب کافی به تقویت حافظه،
          تنظیم متابولیسم، کنترل اشتها و افزایش موفقیت در رعایت رژیم غذایی کمک
          می‌کند. خواب نه تنها برای بازسازی جسم و ذهن ضروری است، بلکه مستقیماً
          بر موفقیت شما در رعایت رژیم غذایی و سلامت کلی تاثیر دارد. با بهبود
          کیفیت خواب و ایجاد عادات مثبت قبل از خواب و پس از بیداری، می‌توانید به
          طور موثر به اهداف سلامتی خود نزدیک‌تر شوید. به یاد داشته باشید که هر
          شب سعی کنیم با افکار مثبت به خواب بروید و هر صبح با حس شکرگزاری از
          خواب بیدار شوید، چرا که ارتعاشات روحی شما مسیر روزتان را تعیین
          می‌کنند.
        </p>
        <div className="flex flex-col-reverse items-center">
          <p className="leading-8">
            ما در وب‌سایت خود سیستمی طراحی کرده‌ایم که به شما کمک می‌کند خواب و
            استراحت خود را بهینه کنید. هر صبح با پیامی برای شروع روز با انرژی و
            هر شب با یادآوری زمان خواب، همراه با نکاتی برای تقویت رژیم و روحیه،
            شما را در مسیر موفقیت‌تان حمایت می‌کنیم. فقط کافیه حساب کاربریتون
            رو بسازید و سپس به این <Link className="text-main border-b border-main pb-1" to="/userPanel/sleep">صفحه</Link>{" "}
            مراجعه و ساعات رو تنظیم کنید.
          </p>
          <Title className="ml-auto" title="خوابت رو تنظیم کن!" />

          <video
            data-aos="fade-right"
            src="/images/3q6IdMG5Xa8BJUYs1z.mp4"
            loop
            autoPlay
            className="h-[300px] w-[76%] object-cover object-[0,76%] md:!w-[38%]"
          ></video>
        </div>
      </div>
    </Container>
  );
};

export default Sleep;
