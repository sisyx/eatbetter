import { useTranslation } from "react-i18next";
import Layout from "../../../../Layouts/AdminLayout";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import Cookies from "js-cookie";
import useGetData from "../../../../hooks/useGetData";
import CreateCharityCard from "./CreateCharityCard";
const apiUrl = import.meta.env.VITE_API_URL; 
import { CharityCard } from "./CharityCard";
import { tokenName } from "../../../../config/constants";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";

export const CharityCardsList = () => {
    const [reload, setReload] = useState<number>(1);
    const { t, i18n } = useTranslation();
    const { language } = i18n
    function reloadFn() {
        setReload(cur => cur+1);
    }

    async function getMessages() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/charityWallet/Get`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "Content-Type": "application/json",
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            // if (res.statusCode === 200) {
                return res.walletData;
            // } else {
            //     return res
            // }
        } catch (error) {
            return error;
        }
    }

    const {data, isError: error, isLoading: loading, } = useGetData(["adminCharityWallet", reload], getMessages);
 

    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaCommentAlt />
                    <span>{t("adminCharityWallet.title")}</span>
                </div>
                <hr />
                <div className="flex flex-col gap-8">
                    {
                        error ? <code>Error</code>
                        : loading ? <ThreeDotsLoader dotSize={40} />
                        : data.accountNumber ? 
                            <CharityCard {...data} reloadFn={reloadFn} />
                        : <span
                        >
                            {
                                language  === "fa" ? "هیچ کارتی یافت نشد" : "No Cards Are Found"
                            }
                        </span>
                    }
                    {
                        !loading && !data?.accountNumber && <CreateCharityCard reloadFn={reloadFn} />
                    }
                </div>
            </div>
        </Layout>
    );
}
