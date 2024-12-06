import { ImBin2 } from "react-icons/im";
import { Button } from "../../../shadcn/ui/button";
import { CooperateProps } from "./types";
import { useState } from "react";
import { ButtonLoader } from "../../../modules/loader/Loader";
// const apiUrl = import.meta.env.VITE_API_URL;
import { useTranslation } from "react-i18next";

type DeleteState = {
    loading: Boolean,
    deleted: Boolean,
}

const Contact = (props: CooperateProps) => {
    const [isDeleted, setIsDeleted] = useState<DeleteState>({loading: false, deleted: false});
    const { fullName, email, phoneNumber, subject, message } = props;
    const { t } = useTranslation();

    // async functions
    async function deleteMessage() {
        // fetch(`${apiUrl}/api/ContactMe/contactus/{id}${username}`, {
        //     method: "DELETE",
        //     headers: {
        //         "accept": "*/*"
        //     }
        // })
        // .then(req => {
        //     req.json()
        // })
        // .then((response: any) => {
        //     // refresh the users (call reload funciton)
        //     reloadFn();
            
        //     // show success message
        //     const { message } = response
        //     toast({ title: message })

        //     return message
        // })
        // .catch(console.error);
        setIsDeleted({loading: true, deleted: false,})
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        setIsDeleted({loading: false, deleted: true,})
    }


    return (
        <div className={`${isDeleted.deleted ? "hidden" : ""} flex flex-col gap-2 border bg-main hover:bg-mainHover p-4 rounded-lg text-white`}>
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span>{t("adminContact.user")}</span>
                    <span className="text-black font-bold bg-white px-2 rounded-md">{fullName}</span>
                    <a href={`mailto:${email}`} className=" underline underline-offset-1">{email}</a>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </div>
                <Button className={`${isDeleted.loading ? "bg-gray-700" : "bg-white" } text-gray-700 hover:text-white px-2 md:px-4`} onClick={deleteMessage}>
                    {
                        isDeleted.loading ? <ButtonLoader className="text-main" /> : <ImBin2 />
                    }
                </Button>
            </div>
            <div>
                <div className="font-bold text-2xl">{subject}</div>
                <div className="text-justify leading-8">{message}</div>
            </div>
        </div>
    );
}

export default Contact;