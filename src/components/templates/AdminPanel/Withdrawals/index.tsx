import { useTranslation } from "react-i18next";
import Layout from "../../../../Layouts/AdminLayout";
import useGetData from "../../../../hooks/useGetData";
import { useState } from "react";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
import Cookies from "js-cookie";
import { tokenName } from "../../../../config/constants";
import { toast } from "../../../../hooks/use-toast";
import i18n from "../../../../i18n/i18n";
import WidthDrawal from "./Withdrowal";
import { WithdrawalType } from "./types";
import { GoLog } from "react-icons/go";
const apiUrl = import.meta.env.VITE_API_URL;

const Withdrawals = () => {
    const { t } = useTranslation();
    const [reload, setReload] = useState<number>(0);
    const { language } = i18n;

    const {data: withdrawals, isError: error, isLoading: loading, } = useGetData(["admin_withdrawals", reload], getBlogs);

    const processingWithdrawals = withdrawals ? withdrawals.filter((withdrawal: WithdrawalType) => withdrawal.status === "Processing") : [];
    const pendingWithdrawals = withdrawals ? withdrawals.filter((withdrawal: WithdrawalType) => withdrawal.status === "Pending" ) : [];
    const completedWithdrawals = withdrawals ? withdrawals.filter((withdrawal: WithdrawalType) => withdrawal.status === "Completed" ) : [];

    async function getBlogs() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/Admin/withdrawals`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            
            if (res.statusCode === 200 && !!res?.withdrawals) {
                return res.withdrawals;
            }
        } catch (error) {
            toast({title: language === "en" ? "Failed Loading Withdrawals" : "مشکلی در دریافت برداشت ها پیش آمده به وجود آمد.", variant: "danger"})
            console.error(error);
            return error;
        }
    }

    function reloadWithdrawals() {
        setReload(cur => cur+1);
    }

    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <GoLog />
                    <span>{t("adminWithdrawal.title")}</span>
                </div>
                <hr />
                {error ? (
                <h1>{t("adminBlogs.loadBlogsError")}</h1>
                ) : loading ? (
                <ThreeDotsLoader dotSize={20} />
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className={`flex flex-col gap-4 items-center ${pendingWithdrawals?.length ? "" : "hidden"}`}>
                            <span className="text-2xl font-extrabold">{t("adminWithdrawal.pendingsTitle")}</span>
                            <div className="w-full overflow-x-scroll">
                                <table className="w-full" style={{minWidth: "700px"}} dir={language === "fa" ? "rtl" : "ltr"}>
                                    <tr>
                                        <th align={language === "fa" ? "right" : "left"}></th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.userId")}</th>
                                        {/* <th align={language === "fa" ? "right" : "left"}>کاربر</th> */}
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.amount")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.status")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.requestedAt")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.changeStatus")}</th>
                                    </tr>
                                    {pendingWithdrawals && pendingWithdrawals?.map((withdrawal: WithdrawalType) => (
                                        <>
                                        <div className="h-4"></div>
                                        <WidthDrawal reloadFn={reloadWithdrawals} {...withdrawal} />
                                        </>
                                    ))}
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={`flex flex-col gap-4 items-center ${processingWithdrawals?.length ? "" : "hidden"}`}>
                            <span className="text-2xl font-extrabold">{t("adminWithdrawal.processingsTitle")}</span>
                            <div className="w-full overflow-x-scroll">
                                <table className="w-full" style={{minWidth: "700px"}} dir={language === "fa" ? "rtl" : "ltr"}>
                                    <tr>
                                        <th align={language === "fa" ? "right" : "left"}></th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.userId")}</th>
                                        {/* <th align={language === "fa" ? "right" : "left"}>کاربر</th> */}
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.amount")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.status")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.requestedAt")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.approvedAt")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.changeStatus")}</th>
                                    </tr>
                                    {processingWithdrawals && processingWithdrawals?.map((withdrawal: WithdrawalType) => (
                                        <>
                                        <div className="h-4"></div>
                                        <WidthDrawal reloadFn={reloadWithdrawals} {...withdrawal} />
                                        </>
                                    ))}
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className={`flex flex-col gap-4 items-center ${completedWithdrawals?.length ? "" : "hidden"}`}>
                            <span className="text-2xl font-extrabold">{t("adminWithdrawal.completedsTitle")}</span>
                            <div className="w-full overflow-x-scroll">
                                <table className="w-full" style={{minWidth: "700px"}} dir={language === "fa" ? "rtl" : "ltr"}>
                                    <tr>
                                        <th align={language === "fa" ? "right" : "left"}></th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.userId")}</th>
                                        {/* <th align={language === "fa" ? "right" : "left"}>کاربر</th> */}
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.amount")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.status")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.requestedAt")}</th>
                                        <th align={language === "fa" ? "right" : "left"}>{t("adminWithdrawal.table.approvedAt")}</th>
                                    </tr>
                                    {completedWithdrawals && completedWithdrawals?.map((withdrawal: WithdrawalType) => (
                                        <>
                                        <div className="h-4"></div>
                                        <WidthDrawal reloadFn={reloadWithdrawals} {...withdrawal} />
                                        </>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Withdrawals;