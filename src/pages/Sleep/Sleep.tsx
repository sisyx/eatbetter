import { Link } from "react-router-dom";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { useTranslation } from "react-i18next";

const Sleep = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <div
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
      >
        <Title
          title={
            i18n.language === "fa" ? `اهمیت خواب` : "The importance of sleep"
          }
        />

        <p className="leading-8">
          {i18n.language === "fa"
            ? `    خواب کلید سلامت جسم و ذهن است. زمانی که بدن و مغز استراحت می‌کنند،
          انرژی بازسازی شده و عملکردها بهبود می‌یابند. خواب کافی به تقویت حافظه،
          تنظیم متابولیسم، کنترل اشتها و افزایش موفقیت در رعایت رژیم غذایی کمک
          می‌کند. خواب نه تنها برای بازسازی جسم و ذهن ضروری است، بلکه مستقیماً
          بر موفقیت شما در رعایت رژیم غذایی و سلامت کلی تاثیر دارد. با بهبود
          کیفیت خواب و ایجاد عادات مثبت قبل از خواب و پس از بیداری، می‌توانید به
          طور موثر به اهداف سلامتی خود نزدیک‌تر شوید. به یاد داشته باشید که هر
          شب سعی کنیم با افکار مثبت به خواب بروید و هر صبح با حس شکرگزاری از
          خواب بیدار شوید، چرا که ارتعاشات روحی شما مسیر روزتان را تعیین
          می‌کنند.`
            : "Sleep is key to a healthy body and mind. When the body and brain rest, energy is restored and performance improves. Adequate sleep helps to strengthen memory, regulate metabolism, control appetite, and increase diet success. Sleep is not only essential for rebuilding the body and mind, but it also directly affects your diet success and overall health. By improving your sleep quality and creating positive habits before bed and after waking up, you can effectively move closer to your health goals. Remember to go to bed with positive thoughts every night and wake up with gratitude every morning, because your spiritual vibrations determine the course of your day."}
        </p>
        <div className="flex flex-col-reverse items-center">
          <p className="leading-8">
            {i18n.language === "fa" ? (
              <>
                ما در وب‌سایت خود سیستمی طراحی کرده‌ایم که به شما کمک می‌کند
                خواب و استراحت خود را بهینه کنید. هر صبح با پیامی برای شروع روز
                با انرژی و هر شب با یادآوری زمان خواب، همراه با نکاتی برای تقویت
                رژیم و روحیه، شما را در مسیر موفقیت‌تان حمایت می‌کنیم. فقط کافیه
                حساب کاربریتون رو بسازید و سپس به این{" "}
                <Link
                  className="border-b border-main pb-1 text-main"
                  to="/userPanel/sleep"
                >
                  صفحه
                </Link>{" "}
                مراجعه و ساعات رو تنظیم کنید.
              </>
            ) : (
              <>
                We have designed a system on our website to help you optimize
                your sleep and rest. We support you on your path to success with
                a message every morning to start the day with energy and a
                reminder every night to go to bed, along with tips to boost your
                diet and mood. Just create your account and then visit
                <Link
                  className="border-b border-main pb-1 text-main"
                  to="/userPanel/sleep"
                >
                  this page
                </Link>{" "}
                to set the hours.
              </>
            )}
          </p>
          <Title
            className={`${ i18n.language === "fa" ? ` ml-auto` : "mr-auto"}`}
            title={
              i18n.language === "fa"
                ? `خوابت رو تنظیم کن!`
                : "Adjust your sleep!"
            }
          />

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
