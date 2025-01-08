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
  id: number;
  title: string;
  content: string;
  imagePath: string;
  publishedDate: string;
  reload: Function;
};

type XXXType = {
  value: "title" | "content";
  title: string;
  placeholder: string;
  type: "text" | "number" | "date" | "file";
};

const xxx: XXXType[] = [
  {
    value: "title",
    title: "عنوان فارسی",
    placeholder: "مثلا: اهمیت رژیم غذایی در سلامت روان",
    type: "text",
  },
  {
    value: "content",
    title: "متن بلاگ",
    placeholder: "متن وبلاگ را اینجا بنویسید",
    type: "text",
  },
];

export const EditBlog = (props: PropsType) => {
  const { id, title, content, imagePath, publishedDate, reload } = props;
  const { t,i18n } = useTranslation();

  const successFunc = () => {
    toast({
      variant: "success",
      className: i18n.language === "fa" ? "justify-start" : "justify-end",
      title: "بلاگ با موفقیت اضافه شد",
    });
    reload();
  };

  const { mutate: mutation, isPending } = usePostData(
    `/api/Blog/edit/${id}`,
    null,
    true,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      title,
      content,
      imagePath,
      publishedDate,
    },
    onSubmit: (_values: formValues) => {
      const data = {
        title: formHandler.values.title,
        content: formHandler.values.content,
        imagePath,
        publishedDate,
      };
      mutation(data as any);
    },
    validationSchema: BlogSchema,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button className="hidden md:block">
            {t("adminBlogs.table.row.edit")}
          </Button>
          <span className="cursor-pointer text-sm underline md:hidden">
            {t("adminBlogs.table.row.edit")}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>ویرایش</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4" dir="rtl">
          <div className="flex flex-col items-start gap-4">
            {xxx.map(({ value, title, type }) => (
              <div className="flex w-full items-center gap-2">
                <span>{title}</span>
                <div className="flex flex-1 flex-col">
                  <input
                    type={type}
                    name={value}
                    value={formHandler.values[value]}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.handleBlur}
                    className="rounded-md border border-main p-2 outline-none focus:border-mainHover"
                    placeholder="مثلا: پکیج طلایی"
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
