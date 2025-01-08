import { PackageProps, XXXType } from "./types";
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
import { ButtonLoader } from "../../../modules/loader/Loader";
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
    value: "nameFa",
    title: "عنوان فارسی",
    placeholder: "مثلا: پکیج طلایی",
    type: "text",
  },
  {
    value: "name",
    title: "عنوان",
    placeholder: "مثلا: Golden",
    type: "text",
  },
  {
    value: "currency",
    title: "نرخ ارز",
    placeholder: "مثلا: IRR",
    type: "text",
  },
  {
    value: "maxDiet",
    title: "رژیم",
    placeholder: "مثلا: 13000",
    type: "number",
  },
  {
    value: "price",
    title: "قیمت",
    placeholder: "مثلا: 50000",
    type: "number",
  },
];

const CreatePackage = (props: PackageProps) => {
  const { id, name, nameFa, currency, maxDiet, price, reloadFn } = props;
  const { i18n } = useTranslation();
  const successFunc = () => {
    toast({
      variant: "success",
      className: i18n.language === "fa" ? "justify-start" : "justify-end",
      title: "پکیج با موفقیت ویرایش شد",
    });
    reloadFn();
  };

  const { mutate: mutation, isPending } = usePostData(
    `/api/Package/UpdatePackage/${id}`,
    null,
    true,
    successFunc,
  );

  const formHandler = useFormik({
    initialValues: {
      name,
      nameFa,
      currency,
      maxDiet,
      price,
    },
    onSubmit: (_values: formValues) => {
      const data = {
        name: formHandler.values.name,
        nameFa: formHandler.values.nameFa,
        currency: formHandler.values.currency,
        maxDiet: formHandler.values.maxDiet,
        price: formHandler.values.price,
      };
      mutation(data as any);
    },
    validationSchema: packageSchema,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          // data-aos="fade-up"
          className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-main bg-opacity-90 transition-all duration-100 hover:bg-opacity-100"
        >
          <span className="flex items-center justify-center gap-2 bg-main p-4 text-base font-extrabold text-white md:text-xl">
            <span>{name}</span>
            <span>{nameFa}</span>
          </span>
          <div className="flex items-center justify-center border-b-2 border-black py-4">
            <span>{currency}</span>
          </div>
          <div className="flex items-center justify-center border-b-2 border-black py-4">
            <span>{maxDiet.toString()}</span>
          </div>
          <div className="flex items-center justify-center py-4">
            <span>
              {currency === "IRR" ? (
                i18n.language === "fa" ? (
                  <p> {price.toLocaleString()} هزار ریال</p>
                ) : (
                  <p dir="ltr">{price.toLocaleString()} thousand rials</p>
                )
              ) : i18n.language === "fa" ? (
                `${price.toLocaleString()} دلار  `
              ) : (
                <p dir="ltr">${price.toLocaleString()}</p>
              )}
            </span>
          </div>
          <div className="px-4 pb-4">
            <Button className="w-full">ویرایش</Button>
          </div>
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
            {xxx.map(({ value, title, type, placeholder }) => (
              <div className="flex w-full items-center gap-2 text-sm md:text-base">
                <div className="w-1/4">{title}</div>
                <div className="flex flex-1 flex-col">
                  <input
                    type={type}
                    name={value}
                    value={formHandler.values[value]}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.handleBlur}
                    className="w-full min-w-8 rounded-md border border-main p-2 outline-none focus:border-mainHover"
                    placeholder={placeholder}
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

export default CreatePackage;
1;
