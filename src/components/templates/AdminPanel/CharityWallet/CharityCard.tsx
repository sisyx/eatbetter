import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank2, BsCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { CharityCardProps } from "./types";
import { useTranslation } from "react-i18next";
import WithdrawFromCharity from "./other/WithdrawFromCharity";
import EditCharityCard from "./EditCharityCard";

export const CharityCard = (props: CharityCardProps) => {
    const { fullName, accountNumber, bankName, iban, balance, reloadFn } = props;
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center">
            <BsCreditCardFill className="text-7xl text-main " />
            <div className="w-full grid grid-cols-2 gap-y-24 items-center justify-center p-16 rounded-md">
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <FaUser className="text-xl text-main" />
                        <span>{t("adminCharityWallet.ownerName")}</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{fullName}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BsCreditCardFill className="text-xl text-main" />
                        <span>{t("adminCharityWallet.cardNumber")}</span>
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
                        <span>{t("adminCharityWallet.bankName")}</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{bankName}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BiMoneyWithdraw className="text-xl text-main" />
                        <span>{t("adminCharityWallet.balance")}</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{balance}</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <BiMoneyWithdraw className="text-xl text-main" />
                        <span>{t("adminCharityWallet.iban")}</span>
                    </div>
                    <span className="ps-8 text-2xl font-bold">{iban}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full">
                <EditCharityCard {...props} />
                <WithdrawFromCharity reloadFn={reloadFn} />
            </div>
        </div>
    );
}
