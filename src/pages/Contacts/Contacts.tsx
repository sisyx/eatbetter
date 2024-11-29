import Container from "../../components/modules/Container/Container";
import { Button } from "../../components/shadcn/ui/button";
import { useFormik } from "formik";
import { contactsSchema } from "../../validations/rules";
import usePostData from "../../hooks/usePostData";
import { useTranslation } from "react-i18next";
import { ButtonLoader } from "../../components/modules/loader/Loader";

const Contacts = () => {
  // const phoneRegExp = /((0?9)|(\+?989))\d{9}/g;
  const { i18n } = useTranslation();

  const { mutate: mutation, isPending } = usePostData<any>(
    "/api/ContactMe/contactus",
    i18n.language === "fa"
      ? "پیام با موفقیت ارسال شد"
      : "Message sent successfully",
    false,
  );

  const formHandler = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: (values, { resetForm }) => {
      const data = {
        message: values.message,
        email: values.email,
        fullName: values.name,
      };
      mutation(data);
      resetForm();
    },
    validationSchema: contactsSchema,
  });
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 md:!flex-row lg:!px-28">
        <video
          data-aos="fade-right"
          src="/images/I2BP070FjVGkC57wp1.mp4"
          loop
          autoPlay
          className="w-[76%] md:!w-1/2"
        ></video>
        <div className="w-full" dir="rtl">
          <p className="mb-4 sm:text-xl">
            ما اینجا هستیم تا شما را در{" "}
            <span className="text-main">مسیر سلامتی و تناسب اندام</span> همراهی
            کنیم!
          </p>
          <p className="text-sm sm:text-base">
            اگر سوالی دارید یا به راهنمایی نیاز دارید، لطفاً فرم زیر را با ذکر
            دلیل تماس خود تکمیل کنید. یکی از مشاوران ما در سریع‌ترین زمان ممکن
            با شما تماس خواهد گرفت.
          </p>
          <form
            data-aos="fade-up"
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
                name="email"
                value={formHandler.values.email}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                type="text"
                id="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                placeholder="test@gmail.com"
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.email &&
                  formHandler.touched.email &&
                  formHandler.errors.email}
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
                {formHandler.errors.name &&
                  formHandler.touched.name &&
                  formHandler.errors.name}
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
                {formHandler.errors.message &&
                  formHandler.touched.message &&
                  formHandler.errors.message}
              </span>
            </div>

            <Button
              type="submit"
              variant={"main"}
              className="mx-auto !block h-9 w-1/3 !rounded-md outline-none"
            >
            {isPending ? <ButtonLoader/> : "ارسال"}  
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
