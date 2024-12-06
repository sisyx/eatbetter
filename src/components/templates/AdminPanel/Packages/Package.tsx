import { GoPackage } from "react-icons/go";
import { PackageProps } from "./types";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { SiIfood } from "react-icons/si";
import { FaHamburger, FaPen } from "react-icons/fa";
import { formatNumberWithCommas } from "../../../../utils/numbers";
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

interface formValues {
    name: string;
    currency: string;
    maxDiet: number;
    price: number;
}

type XXXType = {
    value: "name" | "currency" | "price" | "maxDiet",
    title: string,
    placeholder: string,
    type: "text" | "number",
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

const CreatePackage = (props: PackageProps) => {
    const { id, name, currency, maxDiet, price, reloadFn } = props;

    const successFunc = (data: any) => {
        console.log(data);
        toast({
            variant: "success",
            title: "پکیج با موفقیت اضافه شد"
        })
        reloadFn();
    };

    const { mutate: mutation, isPending } = usePostData(
        `/api/Package/${id}`,
        null,
        true,
        successFunc,
      );

    const formHandler = useFormik({
        initialValues: {
          name,
          currency,
          maxDiet,
          price,
        },
        onSubmit: (_values: formValues) => {
          const data = {
            name: formHandler.values.name,
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
      <div data-aos="fade-up" className="group relative flex flex-col gap-3 items-center justify-center aspect-video rounded-md border-2 bg-main text-white bg-opacity-90 hover:bg-opacity-100 cursor-pointer transition-all duration-100">
            <span className="absolute bottom-0 translate-y-1/3 rounded-full bg-black p-2 text-3xl">
                <SiIfood />
            </span>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl bg-black opacity-0 group-hover:opacity-60 transition-all duration-150">
                <FaPen />
            </span>
            <span className="flex items-center gap-1 text-2xl font-extrabold">
                <span className="rounded-full bg-gray-700 text-white p-1">
                    <GoPackage />
                </span>
                {name}
            </span>
            <div className="flex flex-col justify-center gap-2">
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <PiCurrencyCircleDollarFill className="text-gray-700" />
                    </span>
                    {currency}
                </span>
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <FaHamburger className="text-gray-700" />
                    </span>
                    {maxDiet.toString()}
                </span>
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <PiCurrencyCircleDollarFill className="text-gray-700" />
                    </span>
                    {formatNumberWithCommas(price)}
                </span>
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
