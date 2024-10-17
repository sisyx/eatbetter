import Container from "../../components/modules/Container/Container";
import { Button } from "../../components/shadcn/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";

const Cooperate = () => {
  const phoneRegExp = /((0?9)|(\+?989))\d{9}/g;

  let cooperateSchema = Yup.object().shape({
    message: Yup.string()
      .min(10, "متن شما حداقل باید 10 حرف داشته باشد")
      .max(200, "متن شما حداکثر باید 200 حرف داشته باشد")
      .required("لطفا متنی بنویسید"),

    phone: Yup.string()
      .email("ایمیل معتبر نیست")
      .matches(phoneRegExp, "شماره تماس معتبر نیست")
      .required("لطفا شماره تماس خودتون رو وارد کنید"),

    name: Yup.string()
      .min(3, "اسم شما حداقل باید 3 حرف داشته باشد")
      .max(12, "اسم شما حداکثر باید 12 حرف داشته باشد")
      .required("لطفا اسم خودتون رو وارد کنید"),
  });

  const formHandler = useFormik({
    initialValues: { name: "", phone: "", message: "" },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      //   mutation(values);
      resetForm();
    },
    validationSchema: cooperateSchema,
  });
  return (
    <Container>
      <div className="flex flex-col items-center px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!flex-row lg:!px-28">
        <video
          src="/images/Xw55QrN0QJMO0R25p1.mp4"
          loop
          autoPlay
          className="w-3/4 md:!w-1/2"
        ></video>
        <div className="w-full space-y-4" dir="rtl">
          <p className="mb-4 sm:text-xl">
            ما از اینکه شما وب‌سایت ما را برای{" "}
            <span className="text-main">مدیریت وزن و بهبود سلامتی</span> خود
            انتخاب کرده‌اید، بسیار خوشحالیم.
          </p>
          <p className="text-sm sm:text-base">
            تجربه نشان داده است که مسائل مالی می‌تواند نقش بزرگی در انتخاب سبک
            زندگی، کیفیت مواد غذایی و سلامت فردی ایفا کند. به همین دلیل، در این
            وب‌سایت برنامه‌ای را طراحی کرده‌ایم تا در صورت رضایت از خدمات و
            رژیم‌های ما، بتوانید به دوستان و عزیزان خود ما را معرفی کنید.
          </p>

          <p className="text-sm sm:text-base">
            ما برای قدردانی از حمایت شما، مبلغی به کیف پول فردی که معرفی
            کرده‌اید اضافه خواهیم کرد و همچنین پاداشی به کیف پول شما واریز
            می‌شود. این مبلغ را می‌توانید هر ماه برداشت کنید یا برای خرید
            محصولات دیگر از وب‌سایت ما استفاده نمایید. با این روش، نه تنها به
            بهبود سلامت و کیفیت زندگی خود و دیگران کمک می‌کنید، بلکه به کاهش
            استرس مالی و ارتقای سطح تغذیه‌ای خود نیز می‌پردازید.
          </p>
          <p className="text-sm sm:text-base">
            پس از اولین خرید و تمایل به همکاری، تمامی آموزش‌ها و اطلاعات تکمیلی
            در اختیارتان قرار خواهد گرفت. اگر سوالی دارید یا نیاز به اطلاعات
            بیشتر دارید، لطفاً فرم زیر را تکمیل کنید و ما در اسرع وقت با شما در
            ارتباط خواهیم بود.از همراهی شما سپاسگزاریم و امیدواریم با هم در مسیر
            بهبود سلامت و سبک زندگی موفق باشیم.
          </p>
          <form
            onClick={formHandler.handleSubmit}
            className="mt-5 w-full p-4 shadow-md"
          >
            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {" "}
                  ایمیل شما
                </label>
                <div className="h-2 w-2 rounded-xl bg-main">
                  <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                </div>
              </div>

              <input
                name="phone"
                value={formHandler.values.phone}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                type="text"
                id="phone"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                placeholder="09332423121"
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.phone && formHandler.errors.phone}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {" "}
                  نام شما
                </label>
                <div className="h-2 w-2 rounded-xl bg-main">
                  <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                </div>
              </div>
              <input
                name="name"
                value={formHandler.values.name}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                type="text"
                id="name"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                placeholder="شاهین"
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.name && formHandler.errors.name}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  متن
                </label>
                <div className="h-2 w-2 rounded-xl bg-main">
                  <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                </div>
              </div>
              <input
                name="message"
                value={formHandler.values.message}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                type="text"
                id="text"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                placeholder="سلام..."
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.message && formHandler.errors.message}
              </span>
            </div>

            <Button
              type="submit"
              variant={"main"}
              className="mx-auto !block h-9 w-1/3 !rounded-md outline-none"
            >
              ارسال
            </Button>
          </form>
        </div>
      </div>{" "}
    </Container>
  );
};

export default Cooperate;
