import Container from "../../components/modules/Container/Container";
const About = () => {
  return (
    <Container>
      <div className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
        <div
          className="space-y-8 text-right text-sm sm:!space-y-6 sm:text-base"
          dir="rtl"
        >
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            <p data-aos="fade-left" className="sm:leading-9">
              <span className="text-base sm:text-xl">
                من علی موید هستم،{" "}
                <span className="text-main">متخصص تغذیه و سبک زندگی</span> با
                بیش از ۲۵ سال تجربه در ونکوور کانادا.{" "}
              </span>
              از همان ابتدای کارم، باور داشتم که هر فرد می‌تواند به بهترین نسخه
              از خود تبدیل شود؛ کافی است ابزارهای مناسب و راهنمایی درست در
              اختیار داشته باشد. مدرک لیسانس تغذیه خود را از دانشگاه شهید بهشتی
              ایران گرفتم و پس از مهاجرت به کانادا، مدرک Certified Sport
              Performance Nutritionist را دریافت کردم. در طول سال‌ها، تجربه‌ام
              در بخش‌های مختلف از جمله بیمارستان‌های معتبر ایران و موسسه
              استاندارد، و همچنین برگزاری سمینارهای بین‌المللی در زمینه آب،
              سلامت و زیبایی، به من آموخت که سلامتی چیزی فراتر از یک رژیم غذایی
              است. ترکیب علم تغذیه، ورزش، استراحت کافی و توجه به روح و روان،{" "}
              <span className="border-b border-main pb-1">
                {" "}
                کلید دستیابی به یک زندگی متعادل و سالم است
              </span>
              .
            </p>
            <video
              data-aos="fade-right"
              src="/images/aeNVP4ci73jntrH1iy.mp4"
              loop
              autoPlay
              className="w-[76%] md:!w-[38%]"
            ></video>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <img
              className="w-[76%] md:!w-[35%]"
              src="/images/ed018d59-3e71-49b8-bdaf-f91b5932628d.jfif"
              alt=""
            />
            <p className="sm:leading-9">
              هدف من این است که به شما کمک کنم تا با برنامه‌های تغذیه‌ای و ورزشی
              شخصی‌سازی شده، به اهداف سلامتی خود برسید. در این مسیر، ابزارهای
              هوشمند، محاسبه‌گرهای کالری، و برنامه‌های ۲۱ روزه ما برای ایجاد
              عادات سالم و پایدار، همراه شما خواهند بود. اعتقاد من به طب کل‌نگر
              است، جایی که جسم، ذهن و روح در کنار هم بهبود می‌یابند. به من
              بپیوندید و با هم مسیر دستیابی به سلامتی و زیبایی را طی کنیم. شما
              شایسته بهترین‌ها هستید، و من اینجا هستم تا به شما کمک کنم به آن
              دست یابید.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
