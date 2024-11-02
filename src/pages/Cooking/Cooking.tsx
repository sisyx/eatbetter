import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/shadcn/ui/accordion";
const Cooking = () => {
  return (
    <Container>
      <div
        dir="rtl"
        className="px-12 relative pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
      >
        <Title title="آشپزی برای همه" />
        <p className="mt-8">
          در بخش آشپزی وب‌سایت ما، به بیش از ۱۵۰ دستور غذایی ایرانی و بین‌المللی
          دسترسی خواهید داشت. هر دستور غذا شامل اطلاعات کامل کالری، مواد مغذی و
          دستور پخت اصلی است. برای خوشمزه‌تر و سالم‌تر شدن غذا، نکات کلیدی و
          حرفه‌ای ارائه می‌شود. همچنین، برای هر غذا مشخص می‌کنیم که مناسب چه
          رژیم‌هایی (کتو، وگان، وجترین و غیره) است و چه افرادی بهتر است از آن
          خودداری کنند. با ما، طعم سلامتی را در کنار تنوع و لذت تجربه کنید!
        </p>
        <img src="https://cdn-icons-png.freepik.com/256/9862/9862039.png?semt=ais_hybrid" 
         className=" absolute lg:left-48 left-20 w-52 md:block hidden lg:w-auto top-14 opacity-20"
        alt="logo" />
        <Accordion data-aos='fade-up' type="single" collapsible className="mt-10 w-full">
          <AccordionItem className="border-0" value={`item-1`}>
            <AccordionTrigger className="flex border-b px-5 py-0 !pb-4 outline-none hover:!no-underline">
              <div className="flex flex-col justify-start">
                <p className="text-right"> خورشت قیمه</p>
                <span className="block text-sm font-thin text-main text-right">
                  عطر و طعمی که از گذشته‌های دور به سفره‌های امروز آمده!
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-4 space-y-4 px-10">
              <div>
                <p> مواد اولیه برای ۸۰۰ کالری (برای ۴ نفر):</p>• گوشت گوسفندی
                کم‌چرب: ۲۵۰ گرم • لپه: ۱۵۰ گرم • پیاز: ۱ عدد متوسط • سیب‌زمینی:
                ۲ عدد کوچک • رب گوجه‌فرنگی: ۲ قاشق غذاخوری • لیمو عمانی: ۲ عدد •
                زردچوبه، نمک، فلفل، دارچین: به مقدار لازم • روغن زیتون: ۲ قاشق
                غذاخوری • آب: ۳ لیوان
              </div>
              <div>
                <p>میزان مواد مغذی:</p>• پروتئین: ۳۵ گرم • چربی: ۳۰ گرم (قابل
                تنظیم با نوع روغن و گوشت) • کربوهیدرات: ۶۵ گرم • ویتامین‌ها و
                مواد معدنی: ویتامین C، ویتامین B6، آهن، پتاسیم، فیبر
              </div>
              <div>
                <p>مناسب برای رژیم‌های:</p>• رژیم کتوژنیک (با کاهش مقدار
                سیب‌زمینی و لپه) • رژیم پالئو (در صورت حذف لپه) • رژیم
                کم‌کربوهیدرات (در صورت حذف یا کاهش سیب‌زمینی)
              </div>
              <div>
                <p>مناسب نیست برای:</p>• افرادی با مشکلات کلیوی (به دلیل پروتئین
                و لپه) • افراد دارای مشکلات معده و گوارش (به دلیل لیمو عمانی و
                لپه) • افرادی با کلسترول بالا (در صورت استفاده از گوشت پرچرب)
              </div>
              <div>
                <p>طرز تهیه اصیل خورشت قیمه:</p>
                ۱- آماده‌سازی گوشت: گوشت گوسفندی را به قطعات کوچک خرد کنید. پیاز
                را ریز خرد کرده و با گوشت و زردچوبه در قابلمه‌ای با کمی روغن
                زیتون تفت دهید تا رنگ گوشت قهوه‌ای شود. ۲- اضافه‌کردن لپه:
                لپه‌ها را که از قبل خیس کرده‌اید، به گوشت اضافه کرده و چند دقیقه
                با هم تفت دهید. ۳- افزودن رب گوجه‌فرنگی: رب گوجه‌فرنگی را به
                قابلمه اضافه کنید و با گوشت و لپه تفت دهید تا رنگ رب باز شود و
                عطر آن پخش شود. ۴- افزودن آب و لیمو عمانی: ۳ لیوان آب به مواد
                اضافه کنید و لیمو عمانی‌ها را که سوراخ کرده‌اید، داخل قابلمه
                بیندازید. ۵- پخت نهایی: خورشت را به مدت ۲ ساعت روی حرارت ملایم
                بگذارید تا گوشت و لپه کاملاً پخته و خورش جا بیفتد. در نیم ساعت
                آخر، نمک و فلفل را اضافه کنید. ۶- سرخ‌کردن سیب‌زمینی:
                سیب‌زمینی‌ها را خلال کرده و در روغن زیتون سرخ کنید. در هنگام
                سرو، آن‌ها را روی خورشت قرار دهید.
              </div>
              <div>
                <p>فوت کوزه‌گری:</p>• برای طعمی ملایم‌تر و خوش‌عطرتر، یک تکه چوب
                دارچین در هنگام پخت به خورش اضافه کنید. • برای داشتن طعمی
                غلیظ‌تر، می‌توانید رب گوجه‌فرنگی بیشتری به خورش اضافه کنید و آن
                را خوب تفت دهید. • اضافه کردن یک قاشق زعفران دم‌کرده به خورش در
                نیم ساعت پایانی، طعم و بوی بی‌نظیری به آن می‌بخشد. • برای اینکه
                لپه‌ها در خورش له نشوند، بهتر است آن‌ها را جداگانه بپزید و در
                مرحله نهایی به خورش اضافه کنید.
              </div>
              <div>
                <p>چگونه خورشت قیمه را سالم‌تر بپزیم:</p>• به جای گوشت گوسفندی،
                از گوشت بوقلمون یا مرغ استفاده کنید که چربی کمتری دارد. • از
                سیب‌زمینی‌های آب‌پز یا کبابی به جای سرخ‌کرده استفاده کنید تا
                میزان چربی کاهش یابد. • برای کاهش کالری، مقدار لپه و روغن را
                کاهش داده و از روغن‌های سالم‌تر مثل روغن زیتون یا آووکادو
                استفاده کنید. • به جای استفاده از لیمو عمانی‌های زیاد که ممکن
                است معده را اذیت کنند، از کمی آب لیموی تازه استفاده کنید.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="mt-5 border-0" value={`item-2`}>
            <AccordionTrigger className="flex border-b px-5 py-0 !pb-4 outline-none hover:!no-underline">
              <div className="flex flex-col justify-start">
                <p className="text-right"> خورش قورمه سبزی </p>
                <span className="block text-sm font-thin text-main text-right">
                  غذایی اصیل، سرشار از عطر و طعم، میراثی از سفره‌های ایرانی!
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-4 space-y-4 px-10">
              <div>
                <p> مواد اولیه برای ۸۰۰ کالری (برای ۴ نفر): </p>• گوشت گوسفندی
                کم‌چرب: ۳۰۰ گرم • لوبیا قرمز: ۱۰۰ گرم • سبزی قورمه (تره، جعفری،
                گشنیز، شنبلیله): ۵۰۰ گرم • پیاز: ۱ عدد متوسط • لیمو عمانی: ۲ عدد
                • روغن زیتون: ۲ قاشق غذاخوری • زردچوبه، نمک و فلفل: به مقدار
                لازم • آب: ۲ لیوان
              </div>
              <div>
                <p> میزان مواد مغذی: </p>• پروتئین: ۳۸ گرم • چربی: ۴۲ گرم (قابل
                تنظیم با نوع روغن و گوشت) • کربوهیدرات: ۵۵ گرم • ویتامین‌ها و
                مواد معدنی: ویتامین C، ویتامین A، آهن، فیبر، کلسیم
              </div>
              <div>
                <p> مناسب برای رژیم‌های: </p>• رژیم کتوژنیک (در صورت کاهش میزان
                لوبیا) • رژیم پالئو (در صورت حذف لوبیا) • رژیم کم‌کربوهیدرات •
                رژیم‌های وگان (در صورت جایگزینی گوشت با پروتئین‌های گیاهی)
              </div>
              <div>
                <p> مناسب نیست برای: </p>• افراد دارای مشکلات کلیوی (به دلیل
                پروتئین بالا) • افرادی با کلسترول بالا (در صورت استفاده از گوشت
                پرچرب) • افراد دارای حساسیت به حبوبات
              </div>
              <div>
                <p> طرز تهیه اصیل خورش قورمه سبزی: </p>
                ۱- آماده‌سازی سبزی‌ها: سبزی قورمه را پاک کرده و به اندازه ریز
                خرد کنید. سپس در یک تابه با حرارت متوسط با کمی روغن زیتون تفت
                دهید تا رنگ سبزی تغییر کند و عطر آن آزاد شود. ۲- آماده‌سازی
                گوشت: گوشت گوسفندی را به قطعات کوچک تقسیم کرده و با پیاز
                رنده‌شده و زردچوبه در قابلمه‌ای با کمی روغن زیتون تفت دهید تا
                گوشت قهوه‌ای شود. ۳- افزودن لوبیا: لوبیا قرمز را که از شب قبل
                خیس کرده‌اید، به قابلمه اضافه کنید. ۴- افزودن آب و سبزی‌ها: دو
                لیوان آب به قابلمه گوشت و لوبیا اضافه کرده و سبزی تفت‌داده‌شده
                را نیز به خورش اضافه کنید. ۵- افزودن لیمو عمانی: لیمو عمانی‌ها
                را چند سوراخ بزنید و در خورش بیندازید تا طعم دلپذیر آن به غذا
                منتقل شود. ۶- پخت نهایی: خورش را به مدت ۲ الی ۳ ساعت روی حرارت
                ملایم قرار دهید تا تمام مواد کاملاً پخته و خورش جا بیفتد. نمک و
                فلفل را در نیم ساعت پایانی اضافه کنید. ۷- آماده‌سازی برای سرو:
                خورش را همراه با برنج سرو کنید.
              </div>
              <div>
                <p> فوت کوزه‌گری: </p>• برای داشتن طعمی خاص‌تر، سبزی قورمه را با
                کمی شنبلیله خشک مخلوط کنید. • افزودن یک قاشق رب گوجه‌فرنگی در
                ابتدای پخت می‌تواند رنگ زیباتری به خورش بدهد. • در اواسط پخت،
                کمی زعفران دم‌کرده به خورش اضافه کنید تا عطر و طعم بهتری به آن
                بدهد. • استفاده از لیمو عمانی تازه و سوراخ‌کردن آن‌ها باعث
                می‌شود طعم تلخ به خورش ندهد.
              </div>
              <div>
                <p> چگونه خورش قورمه سبزی را سالم‌تر بپزیم: </p>• به جای گوشت
                قرمز، از گوشت بوقلمون یا مرغ استفاده کنید که چربی کمتری دارد. •
                برای کاهش میزان چربی، از لوبیاهای بیشتری استفاده کرده و میزان
                گوشت را کم کنید. • به جای سرخ‌کردن سبزی‌ها در روغن، آن‌ها را
                بخارپز کنید تا ویتامین‌های بیشتری حفظ شود. • استفاده از روغن‌های
                سالم‌تری مانند روغن زیتون یا آووکادو به جای روغن‌های معمولی،
                می‌تواند خورش را سالم‌تر کند.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="mt-5 border-0" value={`item-3`}>
            <AccordionTrigger className="flex border-b px-5 py-0 !pb-4 outline-none hover:!no-underline">
              <div className="flex flex-col justify-start">
                <p className="text-right"> کباب دیگی </p>
                <span className="block text-sm font-thin text-main text-right">
                  طعم و عطر کباب در هر لقمه، لذتی بی‌نظیر برای سفره‌های ایرانی!
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-4 space-y-4 px-10">
              <div>
                <p> مواد اولیه برای ۸۰۰ کالری (برای ۴ نفر): </p>• گوشت چرخ‌کرده
                گوسفند یا مخلوط گوسفند و گوساله: ۴۰۰ گرم • پیاز: ۲ عدد بزرگ •
                زعفران دم‌کرده: ۲ قاشق غذاخوری • زردچوبه، نمک، فلفل: به مقدار
                لازم • روغن زیتون: ۲ قاشق غذاخوری
              </div>
              <div>
                <p> میزان مواد مغذی: </p>• پروتئین: ۴۰ گرم • چربی: ۴۵ گرم •
                کربوهیدرات: ۱۵ گرم • ویتامین‌ها و مواد معدنی: ویتامین C، ویتامین
                B6، آهن، پتاسیم، فسفر
              </div>
              <div>
                <p> مناسب برای رژیم‌های:</p>• رژیم کتوژنیک (با کاهش میزان چربی)
                • رژیم کم‌کربوهیدرات • رژیم پالئو (با توجه به مواد طبیعی)
              </div>
              <div>
                <p>مناسب نیست برای: </p>• افرادی با کلسترول بالا (به دلیل چربی
                گوشت) • افرادی با مشکلات قلبی • افرادی که به پروتئین‌های حیوانی
                حساسیت دارند
              </div>
              <div>
                <p>طرز تهیه اصیل کباب دیگی بدون سیب‌زمینی:</p>
                ۱- آماده‌سازی گوشت و پیاز: پیازها را رنده کنید و آب اضافی آن‌ها
                را بگیرید. سپس پیاز رنده‌شده را به گوشت چرخ‌کرده اضافه کنید.
                نمک، فلفل، زردچوبه و زعفران دم‌کرده را نیز اضافه کنید و همه مواد
                را به خوبی ورز دهید تا ترکیب یکدستی به دست آید. ۲- شکل دادن به
                کباب‌ها: مخلوط گوشت و پیاز را به اندازه یک گردو یا بیضی کوچک شکل
                دهید. ضخامت کباب‌ها را کم نگه دارید تا به خوبی و سریع پخته شوند.
                ۳- سرخ کردن کباب‌ها: در یک ماهیتابه بزرگ، مقداری روغن زیتون
                بریزید و آن را گرم کنید. کباب‌ها را در ماهیتابه قرار داده و به
                مدت ۳-۴ دقیقه هر طرف را سرخ کنید تا رنگ قهوه‌ای و ترد به خود
                بگیرند. ۴- پخت نهایی: بعد از سرخ کردن، درب ماهیتابه را بگذارید و
                حرارت را کم کنید. بگذارید کباب‌ها به مدت ۱۵ دقیقه به آرامی بپزند
                تا طعم زعفران به آن‌ها نفوذ کند. ۵- سرو کباب: کباب‌های خوشمزه و
                خوش‌عطر شما آماده است. آن‌ها را در ظرف سرو قرار دهید و با نان یا
                برنج تازه سرو کنید.
              </div>
              <div>
                <p> فوت کوزه‌گری: </p>• برای افزایش عطر و طعم، می‌توانید کمی
                دارچین به مخلوط گوشت و پیاز اضافه کنید. • در نیمه‌های پخت، اگر
                احساس کردید کباب‌ها کمی خشک می‌شوند، کمی کره یا روغن زیتون اضافی
                به ماهیتابه اضافه کنید. • از آنجایی که کباب‌ها باید ترد و لطیف
                باشند، ضخامت آن‌ها را کم نگه دارید تا به خوبی پخته شوند.
              </div>
              <div>
                <p> چگونه کباب دیگی را سالم‌تر بپزیم: </p>• از گوشت بوقلمون یا
                مرغ چرخ‌کرده به جای گوشت قرمز استفاده کنید تا چربی و کالری کمتری
                داشته باشید. • از روغن کمتر استفاده کنید و به جای سرخ‌کردن،
                می‌توانید کباب‌ها را روی گریل بپزید. • اضافه‌کردن سبزیجات معطر
                مانند جعفری یا گشنیز به مخلوط گوشت می‌تواند طعم غذا را بهبود
                ببخشد و ارزش غذایی آن را افزایش دهد.
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="mt-5 border-0" value={`item-4`}>
            <AccordionTrigger className="flex border-b px-5 py-0 !pb-4 outline-none hover:!no-underline">
              <div className="flex flex-col justify-start">
                <p className="text-right"> آش رشته </p>
                <span className="block text-sm font-thin text-main text-right">
                  لذتی از سنت و سلامتی در هر قاشق
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-4 space-y-4 px-10">
              <div>
                <p> مواد اولیه لازم برای ۸۰۰ کالری </p>• عدس: ۱ پیمانه (تقریباً
                ۱۹۰ گرم) • نخود: ۱ پیمانه (تقریباً ۲۰۰ گرم) • لوبیا چیتی: ۱
                پیمانه (تقریباً ۲۲۰ گرم) • رشته آش: ۲۵۰ گرم • پیاز: ۲ عدد متوسط
                • روغن مایع: ۲ قاشق غذاخوری • سبزی آش (تره، جعفری، شنبلیله، و
                گشنیز): ۲ پیمانه (تقریباً ۱۰۰ گرم) • زردچوبه: ۱ قاشق چای‌خوری •
                نمک و فلفل: به مقدار لازم • زعفران دم‌کرده: ۱ قاشق چای‌خوری •
                لیمو عمانی: ۲ عدد (اختیاری) اطلاعات تغذیه‌ای (به ازای یک وعده) •
                پروتئین: ۳۰ گرم • چربی: ۱۲ گرم • کربوهیدرات: ۹۰ گرم
              </div>
              <div>
                <p> ویتامین‌ها و مواد معدنی: </p>◦ ویتامین A: ۲۵۰۰ IU ◦ ویتامین
                C: ۱۰ میلی‌گرم ◦ آهن: ۵ میلی‌گرم ◦ کلسیم: ۱۲۰ میلی‌گرم
              </div>
              <div>
                <p> رژیم‌هایی که می‌توان استفاده کرد: </p>• رژیم وگان • رژیم
                گیاه‌خواری • رژیم مدیترانه‌ای • رژیم بدون گلوتن (با استفاده از
                رشته‌های بدون گلوتن) افرادی که مناسب نیست • افرادی که به حبوبات
                حساسیت دارند. • کسانی که در حال رژیم‌های کتوژنیک هستند. • افرادی
                که دارای مشکلات گوارشی هستند و نمی‌توانند حبوبات را به راحتی هضم
                کنند.
              </div>
              <div>
                <p> طرز تهیه اصیل آش رشته:</p>
                ۱- آماده‌سازی حبوبات: ◦ حبوبات (عدس، نخود، لوبیا چیتی) را از شب
                قبل خیس کنید. این کار به نرم‌تر شدن و کاهش زمان پخت کمک می‌کند.
                ۲- پخت حبوبات: ◦ در یک قابلمه بزرگ، حبوبات خیس‌خورده را به همراه
                ۴ لیوان آب به جوش بیاورید و سپس حرارت را کم کنید. اجازه دهید تا
                حدود ۱ ساعت بپزند تا نرم شوند. ۳- سرخ کردن پیاز: ◦ در تابه‌ای
                جدا، پیازها را با روغن مایع سرخ کنید تا طلایی و نرم شوند. سپس
                زردچوبه را اضافه کنید و کمی تفت دهید. ۴- اضافه کردن سبزی: ◦ سبزی
                آش را به مخلوط پیاز اضافه کنید و چند دقیقه تفت دهید تا عطر آن
                آزاد شود. ۵- ترکیب همه مواد: ◦ مخلوط سبزی و پیاز را به قابلمه
                حبوبات اضافه کنید. رشته آش را نیز به مخلوط بیفزایید و در نهایت
                نمک، فلفل، و زعفران دم‌کرده را اضافه کنید. ۶- پخت نهایی: ◦ حرارت
                را کم کنید و درب قابلمه را بگذارید. اجازه دهید تا آش به مدت ۳۰
                تا ۴۰ دقیقه دیگر بپزد و غلیظ شود. ۷- سرو: ◦ پس از پخت، آش را در
                کاسه‌های سرو ریخته و می‌توانید با کمی ماست، نعناع داغ، و لیمو
                عمانی سرو کنید.
              </div>
              <div>
                <p> فوت کوزه‌گری</p>• اضافه کردن لیمو عمانی: این کار به آش عطر و
                طعم خاصی می‌دهد. • استفاده از سبزی تازه: استفاده از سبزی تازه به
                خوش‌عطر شدن آش کمک می‌کند. • ماست کم‌چرب: برای سرو می‌توانید از
                ماست کم‌چرب استفاده کنید که طعم لذیذی به آش می‌دهد. سالم‌تر کردن
                آش • کاهش روغن: می‌توانید مقدار روغن را کاهش دهید یا از روغن
                زیتون استفاده کنید. • استفاده از حبوبات تازه: حبوبات تازه را
                جایگزین حبوبات کنسروی کنید که حاوی نمک و مواد نگهدارنده هستند. •
                اضافه کردن سبزیجات بیشتر: می‌توانید از سبزیجات دیگر مانند هویج
                رنده‌شده یا کدو سبز در پخت آش استفاده کنید تا ارزش غذایی آن
                افزایش یابد.
              </div>
              <div>
                <p>
                  با رعایت این نکات، می‌توانید آش رشته را به یک غذای سالم و
                  خوشمزه تبدیل کنید که هم برای شما و هم برای مهمانانتان لذیذ
                  باشد. نوش جان!{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

   
      </div>
    </Container>
  );
};

export default Cooking;
