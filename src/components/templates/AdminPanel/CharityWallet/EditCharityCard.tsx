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
import { CharityCardSchema } from "../../../../validations/rules";
import usePostData from "../../../../hooks/usePostData";
import { toast } from "../../../../hooks/use-toast"; 
import { ButtonLoader } from "../../../modules/loader/Loader";
import { EditCardProps } from "./types";

interface formValues {
  accountNumber: string,
  iban: string,
  bankName: string,
  fullName: string,
  balance: number
}

type XXXType = {
    value: "accountNumber" | "bankName" | "iban" | "balance" | "fullName",
    title: string,
    placeholder: string,
    type: "text" | "number",
}

const xxx: XXXType[] = [
    {
        value: "accountNumber",
        title: "شماره کارت",
        placeholder: "---- ---- ---- ----",
        type: "text",
    },
    {
        value: "fullName",
        title: "نام کامل",
        placeholder: "",
        type: "text",
    },
    {
        value: "bankName",
        title: "اسم بانک",
        placeholder: "",
        type: "text",
    },
    {
      value: "iban",
      title: "آی بان",
      placeholder: "",
      type: "text",
    },
    {
      value: "balance",
      title: "موجودی حساب",
      placeholder: "",
      type: "number",
  },
]

const EditCharityCard = ({ reloadFn, accountNumber, fullName, balance, iban, bankName }: EditCardProps) => {
    const successFunc = () => {
        toast({
            variant: "success",
            title: "کارت جدید با موفقیت اضافه شد"
        })
        reloadFn();
    };

    const { mutate: mutation, isPending } = usePostData(
        "/api/charityWallet/Edit",
        null,
        true,
        successFunc,
      );

    const formHandler = useFormik({
        initialValues: {
          accountNumber,
          fullName,
          iban,
          bankName,
          balance,
        },
        onSubmit: (_values: formValues) => {
          const data = {
            accountNumber: formHandler.values.accountNumber,
            fullName: formHandler.values.fullName,
            iban: formHandler.values.iban,
            bankName: formHandler.values.bankName,
            balance: formHandler.values.balance,
          };
          mutation(data as any);
        },
        validationSchema: CharityCardSchema,
      });

  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group w-full relative p-2 flex gap-3 items-center justify-center rounded-md border-2 font-extrabold cursor-pointer transition-all duration-100">
            ویرایش اطلاعات
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5>ویرایش اطلاعات</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-center" dir="rtl">
            <div className="flex flex-col gap-4 items-start">
                {
                    xxx.map(({value, title, type, placeholder}) => 
                    <div className="flex gap-2 items-center w-full">
                        <span>{title}</span>
                        <div className="flex-1 flex flex-col">
                            <input 
                                type={type}
                                name={value}
                                value={formHandler.values[value]}
                                onChange={formHandler.handleChange} 
                                onBlur={formHandler.handleBlur} 
                                className="border border-main text-center rounded-md outline-none p-2 focus:border-mainHover" 
                                placeholder={placeholder}
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
                disabled={!formHandler.dirty || !formHandler.isValid}
                type="submit"
                onClick={() => formHandler.handleSubmit()}
                className="w-full">
                {
                    isPending ? <ButtonLoader /> : ""
                }
                اعمال تغییرات
            </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCharityCard;
