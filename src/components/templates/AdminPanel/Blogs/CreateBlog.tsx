import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../shadcn/ui/dialog";
import { Button } from "../../../shadcn/ui/button";
import { useFormik } from "formik";
import { BlogSchema } from "../../../../validations/rules";
import { toast } from "../../../../hooks/use-toast";
import usePostData from "../../../../hooks/usePostData";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { useTranslation } from "react-i18next";

type formValues = {
    title: string,
    content: string,
    imagePath: string,
    publishedDate: string,
}

type PropsType = {
    reload: Function,
}

type XXXType = {
    value: "title" | "content",
    title: string,
    placeholder: string,
    type: "text" | "number" | "date" | "file"
}

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
]

const now = new Date().toISOString();

export const CreateBlog = (props: PropsType) => {
    const { reload } = props;
    const { t } = useTranslation();

    const successFunc = () => {
        toast({
            variant: "success",
            title: "بلاگ با موفقیت اضافه شد"
        })
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
                    <Button className="hidden md:block w-full">{t("adminBlogs.create.title")}</Button>
                    <div className="text-sm underline md:hidden cursor-pointer w-full text-center">{t("adminBlogs.create.title")}</div>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
                <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-2 py-3">
                    <h5>ایجاد</h5>
                    <div className="h-2 w-2 rounded-xl bg-main">
                    <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                    </div>
                </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 items-center" dir="rtl">
                    <div className="flex flex-col gap-4 items-start">
                        {
                            xxx.map(({value, title, type}) => 
                            <div className="flex gap-2 items-center w-full">
                                <span>{title}</span>
                                <div className="flex-1 flex flex-col">
                                    <input 
                                        type={type}
                                        name={value}
                                        value={formHandler.values[value]}
                                        onChange={formHandler.handleChange} 
                                        onBlur={formHandler.handleBlur} 
                                        className="border border-main rounded-md outline-none p-2 focus:border-mainHover" 
                                        placeholder="مثلا: پکیج طلایی" 
                                        />
                                    { formHandler.touched[value] && formHandler.errors[value] && (
                                        <span className="mt-2 block w-full text-center text-xs text-red-600">
                                            {formHandler.errors[value]}
                                        </span>
                                    )}
                                </div>
                            </div>
                            )
                        }
                    <Button 
                        disabled={!formHandler.isValid || !formHandler.dirty}
                        onClick={() => formHandler.handleSubmit()}
                        className="w-full">
                        {
                            isPending ? <ButtonLoader /> : ""
                        }
                        اضافه کردن
                    </Button>
                    </div>
                </div>
            </DialogContent>
            </Dialog>
    );
}
