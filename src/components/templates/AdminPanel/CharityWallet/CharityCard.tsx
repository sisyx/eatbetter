import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank2, BsCreditCardFill } from "react-icons/bs";
import { Button } from "../../../shadcn/ui/button";
import { FaUser } from "react-icons/fa";
import { CharityCardProps } from "./types";

export const CharityCard = (props: CharityCardProps) => {
    const { fullName, accountNumber, bankName, iban, balance } = props
    return (
        <div className="flex flex-col items-center">
            <BsCreditCardFill className="text-7xl text-main " />
            <div className="w-full grid grid-cols-2 gap-y-24 items-center justify-center p-16 rounded-md">
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <FaUser className="text-xl text-main" />
                        <span>صاحب کارت</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{fullName}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BsCreditCardFill className="text-xl text-main" />
                        <span>شماره کارت</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">
                        {accountNumber.slice(0,4)}-
                        {accountNumber.slice(4,8)}-
                        {accountNumber.slice(8,12)}-
                        {accountNumber.slice(12,16)}
                    </span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BsBank2 className="text-xl text-main" />
                        <span>نام بانک</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{bankName}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BiMoneyWithdraw className="text-xl text-main" />
                        <span>موجودی</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{balance}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BiMoneyWithdraw className="text-xl text-main" />
                        <span>آی بان</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{iban}</span>
                </div>
            </div>
                <Button className="w-full bg-main">برداشت موجودی</Button>
        </div>
    );
}
