// import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../../../../i18n/i18n";
import { parseDate } from "../../../../utils/date";
import { formatNumberWithCommas } from "../../../../utils/numbers";
import { Button } from "../../../shadcn/ui/button";
import { toast } from "../../../../hooks/use-toast";
import { ButtonLoader } from "../../../modules/loader/Loader";
import { t } from "i18next";
const apiUrl = import.meta.env.VITE_API_URL;

type PropsType = {
    id: number,
    userId: number,
    user: any,
    amount: number,
    status: "Processing" | "Pending" | "Completed",
    requestedAt: string | null,
    approvedAt: string | null,
    adminNote: any,
    reloadFn: Function,
};

const WidthDrawal = (props: PropsType) => {
    const { id, userId, amount, status, requestedAt, approvedAt, reloadFn } = props;
    const [isRequestSending, setIsRequestSending] = useState<boolean>(false);

    async function approveWithdrawal() {
        setIsRequestSending(() => true);
        fetch(`${apiUrl}/api/Admin/approve-withdrawal/${id}`, {
            method: "POST",
            headers: {
                "accept": "*/*"
            }
        })
        .then(req => {
            req.json();
        })
        .then((response: any) => {
            // refresh the users (call reload funciton)
            reloadFn();
            
            // show success message
            const { message } = response;
            toast({ title: message });
            setIsRequestSending(() => false);
            return message;
        })
        .catch(error => {
            console.error(error);
            setIsRequestSending(() => false);
        })
    }

    async function completeWithdrawal() {
        setIsRequestSending(() => true);
        fetch(`${apiUrl}/api/Admin/complete-withdrawal/${id}`, {
            method: "POST",
            headers: {
                "accept": "*/*"
            }
        })
        .then(req => {
            req.json();
        })
        .then((response: any) => {
            // refresh the users (call reload funciton)
            reloadFn();
            
            // show success message
            const { message } = response;
            toast({ title: message });
            setIsRequestSending(() => false);
            return message;
        })
        .catch(error => {
            console.error(error);
            setIsRequestSending(() => false);
        })
    }

    const { language } = i18n;
    
    return (
        <tr>
            <td align={language === "fa" ? "right" : "left"} className="py-2 px-4 bg-gray-200 rounded-s-lg">
                <span>{id}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{userId}</span>
            </td>
            {/* <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{user}</span>
            </td> */}
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{formatNumberWithCommas(amount)}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <Button>{status}</Button>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{requestedAt ? parseDate(requestedAt) : ""}</span>
            </td>
            {
                status !== "Pending" ?
                <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                    <span>{approvedAt ? parseDate(approvedAt) : ""}</span>
                </td> : ""
            }
            {
                status === "Processing" ? 
                <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200 rounded-e-lg">
                    <Button onClick={completeWithdrawal}>
                        {t("adminWithdrawal.table.row.completeRequest")}
                        {isRequestSending && <ButtonLoader />}
                    </Button>
                </td> 
                : status === "Pending" ? 
                <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200 rounded-e-lg">
                    <Button onClick={approveWithdrawal}>
                        {t("adminWithdrawal.table.row.acceptRequest")}
                        { isRequestSending &&<ButtonLoader /> }
                    </Button>
                </td>
                : ""
            }
        </tr>
    );
}

export default WidthDrawal;