import { useState } from "react";
import Layout from "../../../../Layouts/AdminLayout";
import Cookies from "js-cookie";
import useGetData from "../../../../hooks/useGetData";
import { CircleLoader } from "../../../modules/loader/CircleLoader";
import CoopereateCard from "./CooperateCard";
import { Cooperate as CooperateType } from './types';
import { FaCommentAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const apiUrl = import.meta.env.VITE_API_URL

const CooperateCardsList = () => {
    const [reload, setReload] = useState<number>(1);
    const { t } = useTranslation();

    function reloadFn() {
        setReload(cur => cur+1);
    }

    async function getMessages() {
        const eatBetterToken = Cookies.get("eatBetterToken");
        try {
            const req = await fetch(`${apiUrl}/api/WorkMeForm/GetAll`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "Content-Type": "application/json",
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            if (res.statusCode === 200) {
                return res.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const {data: messages, isError: error, isLoading: loading, } = useGetData(["cooperateMessages", reload], getMessages);

    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaCommentAlt />
                    <span>{t("adminCooperate.title")}</span>
                </div>
                <hr />
                {
                    error ? <code>Error</code>
                    : loading ? <CircleLoader />
                    : messages.length ? 
                    <div className="flex flex-col gap-8">
                        {
                            messages.map((message: CooperateType) => <CoopereateCard {...message} reloadFn={reloadFn} />)
                        }
                    </div>
                    : ""
                }
            </div>
        </Layout>
    );
}

export default CooperateCardsList