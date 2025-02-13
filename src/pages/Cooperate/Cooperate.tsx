import Container from "../../components/modules/Container/Container";
import { Button } from "../../components/shadcn/ui/button";
import { useFormik } from "formik";
import usePostData from "../../hooks/usePostData";
import { useTranslation } from "react-i18next";
import { ButtonLoader } from "../../components/modules/loader/Loader";
import { cooperateSchema } from "../../validations/rules";

const Cooperate = () => {
  const { t, i18n } = useTranslation();

  const formHandler = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      workExperience: "",
    },
    onSubmit: (values, { resetForm }) => {
      const data = {
        message: values.message,
        phoneNumber: values.phone,
        email: values.email,
        fullName: values.name,
        workExperience: values.workExperience,
      };
      mutation(data);
      resetForm();
    },
    validationSchema: cooperateSchema,
  });

  const { mutate: mutation, isPending } = usePostData<any>(
    "/api/WorkMeForm/collaboration",
    i18n.language === "fa"
      ? "درخواست با موفقیت ارسال شد"
      : "Request sent successfully",
    false,
  );
  return (
    <Container>
      <div 
        dir={i18n.language === "fa" ? "ltr" : "rtl"}
        className="flex flex-col items-center px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!flex-row lg:!px-28">
        <video
          src="/images/Dm22X5QeFw6j8Eq6L8.mp4"
          loop
          data-aos="fade-right"
          autoPlay
          className="w-[76%] md:!w-1/2"
        ></video>
        <div className="w-full space-y-4"
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >
          <p className="mb-4 sm:text-xl">
            {t("cooperateTextOne")}
            <span className="text-main"> {t("cooperateTextTwo")}</span>
            {t("cooperateTextThree")}
          </p>
          <p className="text-sm sm:text-base">{t("cooperateTextFour")}</p>

          <p className="text-sm sm:text-base">{t("cooperateTextFive")}</p>
          <p className="text-sm sm:text-base">{t("cooperateTextSix")}</p>
          <form
            data-aos="fade-up"
            onClick={formHandler.handleSubmit}
            className="mt-5 w-full p-4 shadow-md"
          >
            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {" "}
                  {t("cooperateLableOne")}
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
                type="email"
                id="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.email && formHandler.errors.email}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {" "}
                  {t("cooperateLableTwo")}
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
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.name && formHandler.errors.name}
              </span>
            </div>
            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {" "}
                  {t("cooperateLableThree")}
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
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.phone &&
                  formHandler.touched.phone &&
                  formHandler.errors.phone}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {t("cooperateLableFour")}
                </label>
                <div className="h-2 w-2 rounded-xl bg-main">
                  <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                </div>
              </div>
              <input
                name="workExperience"
                value={formHandler.values.workExperience}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                type="text"
                id="text"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.workExperience &&
                  formHandler.errors.workExperience}
              </span>
            </div>
            <div className="mb-5">
              <div className="flex flex-row-reverse items-baseline justify-end gap-2">
                <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                  {t("cooperateLableFive")}
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
                required
              />
              <span className="mx-auto mt-2 block text-center text-xs text-red-600">
                {formHandler.errors.message && formHandler.errors.message}
              </span>
            </div>

            <Button
              type="submit"
              variant={"main"}
              className="mx-auto !flex h-9 w-1/3 justify-center !rounded-md outline-none"
            >
              {isPending ? <ButtonLoader /> : t("cooperateSend")}
            </Button>
          </form>
        </div>
      </div>{" "}
    </Container>
  );
};

export default Cooperate;
