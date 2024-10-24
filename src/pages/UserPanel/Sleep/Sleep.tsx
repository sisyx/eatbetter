import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import { FaAngleLeft } from "react-icons/fa";
import SleepSchedule from "../../../components/templates/UserPanel/sleep/SleepSchedule";

const Sleep = () => {
  return (
    <Layout>
      <div>
        <Title title="خواب چیست و چرا اهمیت دارد؟" />
        <p>
          خواب به حالتی از آرامش جسمی و روانی گفته می‌شود که طی آن، بدن و مغز به
          طور موقت از فعالیت‌های آگاهانه روزانه فاصله می‌گیرند و فرصتی برای
          بازسازی و ترمیم فراهم می‌آورند. در هنگام خواب، بدن ما هورمون‌هایی
          تولید می‌کند که برای سلامت و بهبود عملکرد اندام‌ها ضروری است. همچنین،
          مغز ما طی خواب اطلاعات و تجربیات روزانه را پردازش کرده و حافظه‌ها را
          تقویت می‌کند.
        </p>
      </div>

      <div className="mt-10">
        <Title title="چرا خواب برای موفقیت در رژیم غذایی و سلامت کلی اهمیت دارد؟" />
        <p>
          خواب به حالتی از آرامش جسمی و روانی گفته می‌شود که طی آن، بدن و مغز به
          طور موقت از فعالیت‌های آگاهانه روزانه فاصله می‌گیرند و فرصتی برای
          بازسازی و ترمیم فراهم می‌آورند. در هنگام خواب، بدن ما هورمون‌هایی
          تولید می‌کند که برای سلامت و بهبود عملکرد اندام‌ها ضروری است. همچنین،
          مغز ما طی خواب اطلاعات و تجربیات روزانه را پردازش کرده و حافظه‌ها را
          تقویت می‌کند.
        </p>
      </div>

      <div className="mt-10">
        <Title title="چند ساعت خواب نیاز داریم؟" />
        <p>نیاز به خواب بسته به سن و شرایط فردی متفاوت است:</p>
        <ul className="py-3">
          <li className="flex items-center">
            <FaAngleLeft className="text-main" />
            نوزادان: بین ۱۴ تا ۱۷ ساعت خواب در روز
          </li>
          <li className="flex items-center">
            <FaAngleLeft className="text-main" />
            کودکان نوپا: ۱۱ تا ۱۴ ساعت خواب
          </li>
          <li className="flex items-center">
            <FaAngleLeft className="text-main" />
            نوجوانان: ۸ تا ۱۰ ساعت خواب
          </li>
          <li className="flex items-center">
            <FaAngleLeft className="text-main" />
            بزرگسالان: ۷ تا ۹ ساعت خواب
          </li>
          <li className="flex items-center">
            <FaAngleLeft className="text-main" />
            افراد مسن (بالای ۶۵ سال): ۷ تا ۸ ساعت خواب
          </li>
        </ul>
        <p>
          میزان خواب مورد نیاز برای زنان و مردان تفاوت چندانی ندارد، اما برخی
          تحقیقات نشان داده‌اند که زنان ممکن است به طور متوسط کمی بیشتر از مردان
          به خواب نیاز داشته باشند، چرا که فعالیت‌های مغزی آنها در طی روز
          متنوع‌تر است.
        </p>
      </div>

      <div className="mt-10">
        <Title title="چه ساعاتی برای خواب بهتر هستند؟" />
        <p>
          بیشترین توصیه‌ها برای بهبود کیفیت خواب، پیشنهاد می‌کنند که بین ساعت ۱۰
          شب تا ۶ صبح خوابیده و بیدار شویم. این زمان به هماهنگی با ریتم
          شبانه‌روزی طبیعی بدن کمک می‌کند، چرا که بدن ما به طور طبیعی در این
          بازه زمانی برای استراحت و بازیابی انرژی تنظیم شده است. بیدار شدن با
          طلوع خورشید و خوابیدن در شب به بدن کمک می‌کند که بهینه‌ترین عملکرد را
          داشته باشد.
        </p>
      </div>

      <div className="mt-10">
        <Title title="چگونه می‌توانیم بهتر و عمیق‌تر بخوابیم؟" />
        <p>برای بهبود کیفیت خواب، رعایت موارد زیر پیشنهاد می‌شود:</p>
        <ul className="list-decimal py-4 pr-4">
          <li>
            محیط مناسب خواب: اتاق تاریک و خنک می‌تواند به بهبود کیفیت خواب کمک
            کند. از استفاده از تلفن همراه یا وسایل الکترونیکی قبل از خواب
            خودداری کنید، زیرا نور آبی آنها مغز را تحریک می‌کند و خواب را به
            تعویق می‌اندازد.
          </li>
          <li>
            رعایت یک زمان مشخص برای خواب و بیداری: حتی در روزهای تعطیل، سعی کنید
            هر شب در یک ساعت مشخص به رختخواب بروید و در یک ساعت مشخص از خواب
            بیدار شوید.
          </li>
          <li>
            اجتناب از مصرف کافئین و غذاهای سنگین قبل از خواب: مصرف کافئین، الکل
            یا غذاهای سنگین می‌تواند موجب اختلال در خواب شود.
          </li>
          <li>
            ورزش منظم: ورزش می‌تواند کمک به بهبود کیفیت خواب کند، اما از انجام
            ورزش سنگین در ساعات نزدیک به خواب خودداری کنید.
          </li>
          <li>
            ایجاد عادات آرامش‌بخش قبل از خواب: خواندن کتاب، مدیتیشن، یا گوش دادن
            به موسیقی آرام‌بخش می‌تواند به کاهش استرس و آمادگی ذهن و بدن برای
            خواب کمک کند
          </li>
        </ul>
        <p>
          میزان خواب مورد نیاز برای زنان و مردان تفاوت چندانی ندارد، اما برخی
          تحقیقات نشان داده‌اند که زنان ممکن است به طور متوسط کمی بیشتر از مردان
          به خواب نیاز داشته باشند، چرا که فعالیت‌های مغزی آنها در طی روز
          متنوع‌تر است.
        </p>
      </div>
      <video
        data-aos="fade-up"
        src="/images/3q6IdMG5Xa8BJUYs1z.mp4"
        loop
        autoPlay
        className="mx-auto w-96"
      ></video>
      <div className="mt-10">
        <Title title="خواب و شرایط روحی قبل از خواب و پس از بیداری:" />
        <p>
          برای تجربه خوابی آرام و عمیق، شرایط روحی قبل از خواب بسیار اهمیت دارد.
          شب‌ها پیش از خواب، تمرکز کنید که ذهن خود را از افکار منفی خالی کنید.
          یکی از راه‌های موثر برای این کار، فکر کردن به چیزهایی است که برایشان
          سپاسگزارید. این امر می‌تواند به کاهش استرس و افزایش احساس آرامش کمک
          کند. به یاد داشته باشید که شب‌ها هر چه با احساسات مثبت‌تر به خواب
          بروید، صبح با همان ارتعاشات مثبت بیدار خواهید شد. یک تمرین ساده این
          است که چند دقیقه قبل از خواب به اهداف و آرزوهایتان فکر کنید و از جهان
          هستی برای هر آنچه دارید سپاسگزاری کنید. صبح‌ها نیز با انرژی مثبت روز
          خود را شروع کنید. پس از بیداری، چند دقیقه به نفس‌های عمیق توجه کنید و
          به این فکر کنید که امروز چقدر برایتان ارزشمند است. تمرین شکرگزاری
          روزانه می‌تواند به شما کمک کند تا ارتعاشات مثبت را در طول روز حفظ کنید
          و با انرژی بالا به اهداف خود برسید.
        </p>
      </div>

      <p className="mt-10 font-bold">
        در نهایت، خواب نه تنها برای بازسازی جسم و ذهن ضروری است، بلکه مستقیماً
        بر موفقیت شما در رعایت رژیم غذایی و سلامت کلی تاثیر دارد. با بهبود کیفیت
        خواب و ایجاد عادات مثبت قبل از خواب و پس از بیداری، می‌توانید به طور
        موثر به اهداف سلامتی خود نزدیک‌تر شوید. به یاد داشته باشید که هر شب سعی
        کنیم با افکار مثبت به خواب بروید و هر صبح با حس شکرگزاری از خواب بیدار
        شوید، چرا که
        <span className="border-b border-main pb-1">
          {" "}
          ارتعاشات روحی شما مسیر روزتان
        </span>{" "}
        را تعیین می‌کنند.
      </p>

      <div className="mt-10"  data-aos="fade-up">
        <Title title="زمان خواب و بیدار شدنتون رو تنظیم کنید!" />
        <p>
          تنظیم ساعت خواب و بیداری خودتون رو شروع کنید و با صبح بخیر های گرم و
          شب بخیر های آرام از سایت ما لذت ببرید!
        </p>

        <SleepSchedule />
      </div>

      <img
        className="absolute -left-6 top-20 h-[500px] opacity-20"
        src="/images/sleep-removebg-preview.png"
        alt=""
      />
    </Layout>
  );
};

export default Sleep;
