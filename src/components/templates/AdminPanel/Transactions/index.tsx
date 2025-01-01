import { useTranslation } from "react-i18next";
import Layout from "../../../../Layouts/AdminLayout";
import useGetData from "../../../../hooks/useGetData";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
import Cookies from "js-cookie";
import { tokenName } from "../../../../config/constants";
import { toast } from "../../../../hooks/use-toast";
import { TransactionType } from "./types";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const apiUrl = import.meta.env.VITE_API_URL;

const Transactions = () => {
    const { t, i18n } = useTranslation();
    const { language } = i18n;

    const {data: transactions, isError: error, isLoading: loading, } = useGetData(["admin_transactions"], getTransactions);

    async function getTransactions() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/Transaction/GetAllTransactions`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            
            if (res.statusCode === 200 && res?.transactions	) {
                return res.transactions;
            }
        } catch (error) {
            toast({title: language === "en" ? "Failed Loading Withdrawals" : "مشکلی در دریافت برداشت ها پیش آمده به وجود آمد.", variant: "danger"})
            console.error(error);
            return error;
        }
    }

    useEffect(() => {
        console.log(transactions);
    }, [transactions]);

    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaMoneyBillTransfer />
                    <span>{t("adminTransactions.title")}</span>
                </div>
                <hr />
                {error ? (
                <h1>{t("adminTransactions.loadTransError")}</h1>
                ) : loading ? (
                <ThreeDotsLoader dotSize={20} />
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className={`flex flex-col gap-4 items-center`}>
                            <div className="w-full overflow-x-scroll">
                                <table className="w-full" style={{minWidth: "700px"}} dir={language === "fa" ? "rtl" : "ltr"}>
                                    <tr>
                                        <th align={language === "fa" ? "right" : "left"}></th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminTransactions.table.userId")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminTransactions.table.amount")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminTransactions.table.status")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminTransactions.table.packageId")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminTransactions.table.createdAt")}</th>
                                    </tr>
                                    {transactions && transactions?.map((transaction: TransactionType) => (
                                        <>
                                        <Transaction {...transaction} />
                                        </>
                                    ))}
                                </table>
                            </div>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Transactions;