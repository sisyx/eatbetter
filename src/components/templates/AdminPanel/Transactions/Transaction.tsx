import i18n from "../../../../i18n/i18n";
import { parseDate } from "../../../../utils/date";
import { formatNumberWithCommas } from "../../../../utils/numbers";
import { Button } from "../../../shadcn/ui/button";
import { TransactionType } from "./types";

type PropsType = TransactionType

const Transaction = (props: PropsType) => {
    const { id, userId, amount, status, createdAt, packageId } = props;

    const { language } = i18n;
    
    return (
        <tr>
            <td align={language === "fa" ? "right" : "left"} className="py-2 px-4 bg-gray-200 rounded-s-lg">
                <span>{id}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{userId}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{formatNumberWithCommas(amount)}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <Button>{status}</Button>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <Button>{packageId}</Button>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span>{createdAt ? parseDate(createdAt) : ""}</span>
            </td>
        </tr>
    );
}

export default Transaction;