import { ImBin2 } from "react-icons/im";
import { Button } from "../../../shadcn/ui/button";
import { ContactProps } from "./types";
import { useState } from "react";
import { ButtonLoader } from "../../../modules/loader/Loader";
// const apiUrl = import.meta.env.VITE_API_URL;

type DeleteState = {
  loading: Boolean;
  deleted: Boolean;
};

const Contact = (props: ContactProps) => {
  const [isDeleted, setIsDeleted] = useState<DeleteState>({
    loading: false,
    deleted: false,
  });
  const { fullName, email, phoneNumber, subject, message } = props;

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
    setIsDeleted({ loading: true, deleted: false });
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    setIsDeleted({ loading: false, deleted: true });
  }

  return (
    <div
      className={`${isDeleted.deleted ? "hidden" : ""} group flex flex-1 flex-col gap-2 overflow-hidden rounded-2xl border bg-main text-white hover:bg-mainHover`}
    >
      <div className="flex justify-between gap-3 bg-gray-100 text-black">
        <div className="flex items-center gap-3">
          {/* <span className="p-2 text-cener">{t("adminContact.user")}</span> */}
          <div className="relative flex h-full items-center justify-center bg-main px-2 font-bold text-white before:absolute before:bottom-0 before:left-0 before:aspect-square before:w-4 before:-translate-x-full before:bg-main before:content-[''] after:absolute after:bottom-0 after:left-0 after:aspect-square after:w-4 after:-translate-x-full after:rounded-br-full after:bg-gray-100 after:content-[''] group-hover:bg-mainHover group-hover:before:bg-mainHover">
            <span className="text-sm md:hidden">
              {`${fullName.slice(0, 7)}${fullName.length > 7 ? "..." : ""}`}
            </span>
            <span className="hidden md:inline">{fullName}</span>
          </div>
          <div className="z-50 flex flex-col text-sm md:text-base">
            <div>
              <span className="hidden md:inline">ایمیل: </span>
              <a
                href={`mailto:${email}`}
                className="underline underline-offset-1"
              >
                {email}
              </a>
            </div>
            <div>
              <span className="hidden md:inline">تلفن: </span>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </div>
          </div>
        </div>
        <Button
          className={`${isDeleted.loading ? "bg-gray-700" : "bg-gray-100"} h-full rounded-none px-2 text-gray-700 hover:text-white md:px-4`}
          onClick={deleteMessage}
        >
          {isDeleted.loading ? (
            <ButtonLoader className="text-main" />
          ) : (
            <ImBin2 />
          )}
        </Button>
      </div>
      <div className="p-4">
        <div className="text-2xl font-bold">{subject}</div>
        <div className="text-justify leading-8">{message}</div>
      </div>
    </div>
  );
};

export default Contact;
