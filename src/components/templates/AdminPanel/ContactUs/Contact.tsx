import { ImBin2 } from "react-icons/im";
import { Button } from "../../../shadcn/ui/button";
import { ContactProps } from "./types";
import { useState } from "react";
import { ButtonLoader } from "../../../modules/loader/Loader";
const apiUrl = import.meta.env.VITE_API_URL;
// import { useTranslation } from "react-i18next";
import { toast } from "../../../../hooks/use-toast";

type DeleteState = {
    loading: Boolean,
    deleted: Boolean,
}

const Contact = (props: ContactProps) => {
    const [isDeleted, setIsDeleted] = useState<DeleteState>({loading: false, deleted: false});
    const { id, fullName, email, phoneNumber, subject, message, reloadFn } = props;
    // const { t } = useTranslation();

    // async functions
    async function deleteMessage() {
        setIsDeleted({loading: true, deleted: false,})
        fetch(`${apiUrl}/api/ContactMe/contactus/${id}`, {
            method: "DELETE",
            headers: {
                "accept": "*/*"
            }
        })
        .then(req => {
            req.json()
        })
        .then((response: any) => {
            // refresh the users (call reload funciton)
            reloadFn();
            
            // show success message
            const { message } = response
            toast({ title: message })

            return message
        })
        .catch(console.error);
        setIsDeleted({loading: false, deleted: true,})
    }


    return (
        <div className={`${isDeleted.deleted ? "hidden" : ""} group flex-1 flex flex-col gap-2 border bg-main hover:bg-mainHover rounded-2xl overflow-hidden text-white`}>
            <div className="flex justify-between gap-3 bg-gray-100 text-black">
                <div className="flex items-center gap-3">
                    {/* <span className="p-2 text-cener">{t("adminContact.user")}</span> */}
                    <div 
                    className="
                            text-white bg-main group-hover:bg-mainHover font-bold h-full px-2 flex items-center justify-center
                            relative before:absolute before:left-0 before:bottom-0 before:-translate-x-full before:content-[''] before:w-4 before:aspect-square before:bg-main group-hover:before:bg-mainHover
                            after:absolute after:left-0 after:bottom-0 after:-translate-x-full after:content-[''] after:w-4 after:aspect-square after:bg-gray-100 after:rounded-br-full
                        "
                    >
                        <span className="md:hidden text-sm">
                            {`${fullName.slice(0,7)}${fullName.length > 7 ? "..." : ""}`}
                        </span>
                        <span className="hidden md:inline">
                            {fullName}
                        </span>
                    </div>
                    <div className="flex flex-col z-50 text-sm md:text-base">
                        <div>
                            <span className="hidden md:inline">ایمیل: </span>
                            <a href={`mailto:${email}`} className=" underline underline-offset-1">{email}</a>
                        </div>
                        <div>
                            <span className="hidden md:inline">تلفن: </span>
                            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </div>
                    </div>
                </div>
                <Button className={`${isDeleted.loading ? "bg-gray-700" : "bg-gray-100" } text-gray-700 hover:text-white px-2 md:px-4 h-full rounded-none`} onClick={deleteMessage}>
                    {
                        isDeleted.loading ? <ButtonLoader className="text-main" /> : <ImBin2 />
                    }
                </Button>
            </div>
            <div className="p-4">
                <div className="font-bold text-2xl">{subject}</div>
                <div className="text-justify leading-8">{message}</div>
            </div>
        </div>
    );
}

export default Contact;