import { useState } from "react";
import Layout from "../../../../Layouts/AdminLayout";
import Cookies from "js-cookie";
import useGetData from "../../../../hooks/useGetData";
import Contact from "./Contact";
import { Contact as ContactType } from './types';
import { FaCommentAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { tokenName } from "../../../../config/constants";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
const apiUrl = import.meta.env.VITE_API_URL

const Contacts = () => {
    const [reload, setReload] = useState<number>(1);
    const { t } = useTranslation();

    function reloadFn() {
        setReload(cur => cur+1);
    }

    async function getMessages() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/ContactMe/contactus`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "Content-Type": "application/json",
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            console.log("Error Not Happend");
            if (res.statusCode === 200) {
                return res.contactForms;
            }
        } catch (error) {
            console.log("Error Happend");
            console.error(error);
            return error;
        }
    }

    const {data: messages, isError: error, isLoading: loading, } = useGetData(["messages", reload], getMessages);

    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaCommentAlt />
                    <span>{t("adminContact.title")}</span>
                </div>
                <hr />
                {
                    error ? <code>Error</code>
                    : loading ? <ThreeDotsLoader dotSize={20} />
                    : messages.length ? 
                    <div className="flex flex-col gap-8">
                        {
                            messages.map((message: ContactType) => <Contact {...message} reloadFn={reloadFn} />)
                        }
                    </div>
                    : ""
                }
            </div>
        </Layout>
    );
}

export default Contacts