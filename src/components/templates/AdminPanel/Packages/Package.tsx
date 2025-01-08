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
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;


interface formValues {
    name: string;
    nameFa: string,
    currency: string;
    maxDiet: number;
    price: number;
}

const xxx: XXXType[] = [
    {
        value: "nameFa",
        title: "عنوان فارسی",
        enTitle: "Persian Title",
        placeholder: "مثلا: پکیج طلایی",
        enPlaceholder: "ex: پکیج طلایی",
        type: "text",
    },
    {
        value: "name",
        title: "عنوان",
        enTitle: "Title",
        placeholder: "مثلا: Golden",
        enPlaceholder: "ex: Golden",
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
        enTitle: "Diets",
        placeholder: "مثلا: 13000",
        enPlaceholder: "ex: 13000",
        type: "number",
    },
    {
        value: "price",
        title: "قیمت",
        enTitle: "Price",
        placeholder: "مثلا: 50000",
        enPlaceholder: "ex: 50000",
        type: "number",
    },
]

const CreatePackage = (props: PackageProps) => {
    const { id, name, nameFa, currency, maxDiet, price, reloadFn } = props;
    const { i18n } = useTranslation();
    const { language } = i18n;
    const [deleteState, setDeleteState] = useState({
        deleting: false,
        deleted: false,
        deleteErr: false,
    })
    const successFunc = () => {
           
        toast({
            variant: "success",
            title: "پکیج با موفقیت ویرایش شد"
        })
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

      async function handleDelete(event: any) {
        event.stopPropagation()
              setDeleteState(cur => ({...cur, deleting: true}))
              fetch(`${apiUrl}/api/Package/DeletePackage/${id}`, {
                  method: "DELETE",
                  headers: {
                      "accept": "*/*"
                  }
              })
              .then(req => {
                  req.json()
              })
              .then((response: any) => {
                if (response?.statusCode === 200) {

                  // refresh the users (call reload funciton)
                  reloadFn();
                  
                  // show success message
                  const { message } = response
                  toast({ title: message })
                } else {
                  toast({
                    title: "مشکلی پیش آمده",
                    variant: "danger",
                  })
                }
                setDeleteState(cur => ({...cur, deleted: true, deleteErr: false, deleting: false}))
                return response
              })
              .catch((_error) => {
                  setDeleteState(cur => ({...cur, deleted: false, deleteErr: true, deleting: false}))
              })
          }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          // data-aos="fade-up"
          className="group relative cursor-pointer rounded-2xl border-2 border-main bg-opacity-90 transition-all duration-100 hover:bg-opacity-100 overflow-hidden"
        >
          <span className="flex items-center justify-center gap-2 p-4 text-base md:text-xl font-extrabold  text-white bg-main">
              <span>{name}</span>
              <span>{nameFa}</span>
          </span>
          <div className="flex items-center justify-center py-4 border-b-2 border-black">
            <span>
              {currency}
            </span>
          </div>
          <div className="flex items-center justify-center py-4 border-b-2 border-black">
            <span>
              {maxDiet.toString()}
            </span>
          </div>
          <div className="flex items-center justify-center py-4">
            <span>
              {currency === "IRR" ? (
                    i18n.language === "fa" ? (
                      <p> {price.toLocaleString()} هزار ریال</p>
                    ) : (
                      <p dir="ltr">
                        {price.toLocaleString()} thousand rials
                      </p>
                    )
                  ) : i18n.language === "fa" ? (
                    `${price.toLocaleString()} دلار  `
                  ) : (
                    <p dir="ltr">${price.toLocaleString()}</p>
                  )}
            </span>
          </div>
          <div className="px-4 pb-4 flex flex-col gap-2">
            <Button className="w-full bg-main hover:bg-mainHover">
              {language === "fa" ? "ویرایش" : "Edit"}
            </Button>
            <Button className="w-full" onClick={e => handleDelete(e)}>
              {
                deleteState.deleting ? <ButtonLoader /> : 
                language === "fa" ? "حذف" : "Delete"
              }
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>{language === "fa" ? "ویرایش" : "Edit"}            </h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-center" dir="rtl">
            <div className="flex flex-col gap-4 items-start">
                {
                    xxx.map(({value, title, enTitle, type, placeholder, enPlaceholder}) => 
                    <div className="flex gap-2 items-center w-full text-sm md:text-base">
                        <span className="w-1/4">{language === "fa" ? title : enTitle}</span>
                        <div className="flex-1 flex flex-col">
                            <input 
                                type={type}
                                name={value}
                                value={formHandler.values[value]}
                                onChange={formHandler.handleChange} 
                                onBlur={formHandler.handleBlur} 
                                className="border border-main rounded-md outline-none p-2 focus:border-mainHover w-full min-w-8" 
                                placeholder={language === "fa" ? placeholder : enPlaceholder}
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
};

export default CreatePackage;
1