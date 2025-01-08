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
    placeholder: "مثلا: Base",
    type: "text",
  },
  {
    value: "nameFa",
    title: "عنوان فارسی",
    placeholder: "مثلا: پکیج پایه",
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
    placeholder: "مثلا: 3000",
    type: "number",
  },
  {
    value: "price",
    title: "قیمت",
    placeholder: "مثلا: 40000",
    type: "number",
  },
];

const CreatePackage = ({ reloadFn }: { reloadFn: Function }) => {
  // const navigate = useNavigate();

  const successFunc = (data: any) => {
    if (!!data.id) {
      toast({
        variant: "success",
        title: "پکیج با موفقیت اضافه شد",
      });
      reloadFn();
    } else {
      toast({
        variant: "danger",
        title: "اضافه کردن پکیج با مشکل مواجه شد",
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
        <div className="flex flex-col items-center gap-4" dir="rtl">
          <div className="flex flex-col items-start gap-4">
            {xxx.map(({ value, title, type, placeholder }) => (
              <div className="flex w-full items-center gap-2">
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
