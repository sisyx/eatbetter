import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { Button } from "../../../shadcn/ui/button";
import { useFormik } from "formik";
import { packageSchema } from "../../../../validations/rules";
import usePostData from "../../../../hooks/usePostData";
import { toast } from "../../../../hooks/use-toast";
// import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { XXXType } from "./types";
import { useTranslation } from "react-i18next";

interface formValues {
  name: string;
  nameFa: string;
  currency: string;
  maxDiet: number;
  price: number;
}

const xxx: XXXType[] = [
  {
    value: "name",
    title: "عنوان",
    enTitle: "Tiele",
    placeholder: "مثلا: Base",
    enPlaceholder: "ex: Base",
    type: "text",
  },
  {
    value: "nameFa",
    title: "عنوان فارسی",
    enTitle: "Persian Title",
    placeholder: "مثلا: پکیج پایه",
    enPlaceholder: "ex: پکیج پایه",
    type: "text",
  },
  {
    value: "currency",
    title: "نرخ ارز",
    enTitle: "currency",
    placeholder: "مثلا: IRR",
    enPlaceholder: "ex: IRR",
    type: "text",
  },
  {
    value: "maxDiet",
    title: "رژیم",
    enTitle: "Regiems",
    placeholder: "مثلا: 3000",
    enPlaceholder: "ex: 3000",
    type: "number",
  },
  {
    value: "price",
    title: "قیمت",
    enTitle: "Price",
    placeholder: "مثلا: 40000",
    enPlaceholder: "ex: 40000",
    type: "number",
  },
];

const CreatePackage = ({ reloadFn }: { reloadFn: Function }) => {
  // const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { language } = i18n;

  const successFunc = (data: any) => {
    if (!!data.id) {
      toast({
        variant: "success",
        className: i18n.language === "fa" ? "justify-start" : "justify-end",
        title:
          i18n.language === "fa"
            ? "پکیج با موفقیت اضافه شد"
            : "Package added successfully",
      });
      reloadFn();
    } else {
      toast({
        variant: "danger",
        className: i18n.language === "fa" ? "justify-start" : "justify-end",
        title:
          i18n.language === "fa"
            ? "اضافه کردن پکیج با مشکل مواجه شد"
            : "There was a problem adding the package",
      });
    }
  };

  const { mutate: mutation, isPending } = usePostData(
    "/api/Package",
    null,
    false,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      name: "",
      nameFa: "",
      currency: "",
      maxDiet: NaN,
      price: NaN,
    },
    onSubmit: (_values: formValues) => {
      const data = {
        name: formHandler.values.name,
        nameFa: formHandler.values.nameFa,
        currency: formHandler.values.currency,
        maxDiet: formHandler.values.maxDiet,
        price: formHandler.values.price,
      };
      //   console.log(data)
      mutation(data as any);
    },
    validationSchema: packageSchema,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-main text-2xl font-extrabold text-main transition-all duration-100 hover:border-mainHover hover:text-mainHover">
          <MdAdd className="text-4xl" />
          <span>
            {language === "fa" ? "ایجاد پکیج جدید" : "Create New Package"}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>{language === "fa" ? "ایجاد پکیج جدید" : "Create New Package"}</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4" dir="rtl">
          <div className="flex flex-col items-start gap-4">
            {xxx.map(({ value, title, enTitle, type, placeholder, enPlaceholder, }) => (
              <div className="flex w-full items-center gap-2">
                <div className="w-1/4">{language === "fa" ? title : enTitle}</div>
                <div className="flex flex-1 flex-col">
                  <input
                    type={type}
                    name={value}
                    value={formHandler.values[value]}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.handleBlur}
                    className="w-full min-w-8 rounded-md border border-main p-2 outline-none focus:border-mainHover"
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
              {
                language === "fa" ? "اضافه کردن" : "Add"
              }
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePackage;
