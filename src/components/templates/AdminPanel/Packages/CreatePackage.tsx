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
import Cookies from "js-cookie";
import { toast } from "../../../../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { HtmlHTMLAttributes, ReactNode, useRef } from "react";
import { XXXType } from "./types";

interface formValues {
    name: string;
    currency: string;
    maxDiet: number;
    price: number;
}

const xxx: XXXType[] = [
  {
      value: "name",
      title: "عنوان",
      placeholder: "مثلا: xxx",
      type: "text",
  },
  {
      value: "currency",
      title: "نرخ ارز",
      placeholder: "مثلا: xxx",
      type: "text",
  },
  {
      value: "maxDiet",
      title: "رژیم",
      placeholder: "مثلا: xxx",
      type: "number",
  },
  {
      value: "price",
      title: "قیمت",
      placeholder: "مثلا: xxx",
      type: "number",
  },
]

const CreatePackage = ({ reloadFn }: {reloadFn: Function}) => {
    const navigate = useNavigate();

    const successFunc = (data: any) => {
        console.log(data);
        toast({
            variant: "success",
            title: "پکیج با موفقیت اضافه شد"
        })
        reloadFn();
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
          currency: "",
          maxDiet: NaN,
          price: NaN,
        },
        onSubmit: (_values: formValues) => {
          const data = {
            name: formHandler.values.name,
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
        <div className="group relative flex flex-col gap-3 items-center justify-center aspect-video rounded-md border-2 border-main text-main text-2xl font-extrabold hover:text-mainHover hover:border-mainHover cursor-pointer transition-all duration-100">
            <MdAdd className="text-4xl" />
            <span>ایجاد پکیج جدید</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>ایجاد پکیج جدید</h5>
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
};

export default CreatePackage;
