import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { Button } from "../../../shadcn/ui/button";
import { useFormik } from "formik";
import { BlogSchema } from "../../../../validations/rules";
import { toast } from "../../../../hooks/use-toast";
import usePostData from "../../../../hooks/usePostData";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { useTranslation } from "react-i18next";

type formValues = {
  title: string;
  content: string;
  imagePath: string;
  publishedDate: string;
};

type PropsType = {
  reload: Function;
};

type XXXType = {
  value: "title" | "content";
  enTitle: string;
  title: string;
  placeholder: string;
  enPlaceholder: string,
  type: "text" | "number" | "date" | "file";
};

const xxx: XXXType[] = [
  {
    value: "title",
    title: "عنوان",
    enTitle: "Title",
    placeholder: "مثلا: اهمیت رژیم غذایی در سلامت روان",
    enPlaceholder: "ex: How Eating affects Body",
    type: "text",
  },
  {
    value: "content",
    title: "متن بلاگ",
    enTitle: "Blog Content",
    placeholder: "متن وبلاگ را اینجا بنویسید",
    enPlaceholder: "Enter the text for your blog here",
    type: "text",
  },
];

const now = new Date().toISOString();

export const CreateBlog = (props: PropsType) => {
  const { reload } = props;
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const successFunc = () => {
    toast({
      variant: "success",
      className: i18n.language === "fa" ? "justify-start" : "justify-end",
      title:
        i18n.language === "fa"
          ? "بلاگ با موفقیت اضافه شد"
          : "Blog added successfully",
    });
    reload();
  };

  const { mutate: mutation, isPending } = usePostData(
    `/api/Blog/create`,
    null,
    false,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      title: "",
      content: "",
      imagePath: "",
      publishedDate: now,
    },
    onSubmit: (_values: formValues) => {
      const data = {
        title: formHandler.values.title,
        content: formHandler.values.content,
        imagePath: "",
        publishedDate: now,
      };
      mutation(data as any);
    },
    validationSchema: BlogSchema,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full py-2">
          <Button className="hidden w-full md:block">
            {t("adminBlogs.create.title")}
          </Button>
          <div className="w-full cursor-pointer text-center text-sm underline md:hidden">
            {t("adminBlogs.create.title")}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>{t("adminBlogs.create.title")}</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4" dir="rtl">
          <div className="flex flex-col items-start gap-4">
            {xxx.map(({ value, title, enTitle, type, placeholder, enPlaceholder }) => (
              <div className="flex w-full items-center gap-2">
                <span>{language === "fa" ? title : enTitle}</span>
                <div className="flex flex-1 flex-col">
                  <input
                    type={type}
                    name={value}
                    value={formHandler.values[value]}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.handleBlur}
                    className="rounded-md border border-main p-2 outline-none focus:border-mainHover"
                    placeholder={language === "fa" ? placeholder : enPlaceholder}
                  />
                  {formHandler.touched[value] && formHandler.errors[value] && (
                    <span className="mt-2 block w-full text-center text-xs text-red-600">
                      {formHandler.errors[value]}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <Button
              disabled={!formHandler.isValid || !formHandler.dirty}
              onClick={() => formHandler.handleSubmit()}
              className="w-full"
            >
              {isPending ? <ButtonLoader /> : ""}
              اضافه کردن
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
