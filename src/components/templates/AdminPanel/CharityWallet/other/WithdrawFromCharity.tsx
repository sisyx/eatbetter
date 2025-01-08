import { useState } from "react";
import { Button } from "../../../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../shadcn/ui/dialog";
import { useTranslation } from "react-i18next";
import { toast } from "../../../../../hooks/use-toast";
import usePostData from "../../../../../hooks/usePostData";
import { ButtonLoader } from "../../../../modules/loader/Loader";

type Props = {
  reloadFn: Function;
};

const WithdrawFromCharity = ({ reloadFn }: Props) => {
  const [amount, setAmount] = useState<number>(2000);
  const { i18n } = useTranslation();
  const { language } = i18n;

  function handleChangeAmount(newValue: string) {
    try {
      const number = Number(newValue);
      if (typeof number === "number" && !Number.isNaN(number)) {
        setAmount(number);
      } else {
        throw new Error("TypeError");
      }
    } catch (error) {
      toast({ variant: "danger", title: language === "fa" ? "لطفا صرفا عدد وارد کنید" : "Please Enter Only Numbers" });
    }
  }

  const successFunc = () => {
    toast({
      variant: "success",
      title: language === "fa" ? "کیف پول با موفقیت اضافه شد" : "Wallet Added Successfully",
    });
    reloadFn();
  };

  const { mutate: mutation, isPending } = usePostData(
    `/api/charityWallet/Withdraw`,
    null,
    false,
    successFunc,
  );

  async function handleWithdraw() {
    const body = Number(amount);
    mutation(body as any);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-main hover:bg-mainHover">
          {
            language === "fa" ? "برداشت موجودی" : "Withdraw"
          }
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
            <span>
              {
                language === "fa" ? "برداشت از کیف پول خیریه" : "Withdraw from Charitty Wallet"
              }
            </span>
          </DialogTitle>
        </DialogHeader>
        <input
          dir={language === "fa" ? "rtl" : "ltr"}
          className="w-full min-w-8 rounded-md border border-main p-2 outline-none focus:border-mainHover"
          placeholder="مقدار موردنظر برای برداشت"
          value={amount}
          onChange={(event) => handleChangeAmount(event.target.value)}
        />
        <Button
          onClick={handleWithdraw}
          className="bg-main hover:bg-mainHover"
          disabled={!amount || isPending}
        >
          {isPending ? <ButtonLoader /> : ""}
          {
            language === "fa" ? "برداشت" : "Withdraw"
          }
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawFromCharity;
