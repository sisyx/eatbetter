import { UserProps } from "./types";
const apiUrl = import.meta.env.VITE_API_URL;
import { ImBin2 } from "react-icons/im";
import { Button } from "../../../shadcn/ui/button";
import { toast } from "../../../../hooks/use-toast";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const User = (props: UserProps) => {
    const { username, reloadFn, country, email } = props;

    // async functions
    async function deleteUser() {
        fetch(`${apiUrl}/api/user/api/users/${username}`, {
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
    }

    return (
        <div className="group relative w-full flex justify-between items-center p-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full">
            <div className="flex-1 flex items-center gap-8">
                <span className="text-2xl bg-gray-400 p-2 rounded-full">
                    <FaUserLarge />
                </span>
                <div className="w-20 overflow-hidden">{username}</div>
                <div className="bg-red-600 w-8 h-8 text-white hidden md:flex items-center p-2 rounded-full aspect-square">{country.slice(0, 2).toLocaleUpperCase()}</div>
                <div className="hidden md:flex items-center gap-2">
                    <MdEmail />
                    <span>{email}</span>
                </div>

                {/* mobile design */}
                <div className="md:hidden scale-x-0 absolute bottom-0 right-0 translate-y-full z-50 pointer-events-none bg-white p-2 rounded-xl shadow group-hover:scale-100 transition-all duration-150">
                    <div className="bg-red-600 w-8 h-8 text-white flex items-center p-2 rounded-full aspect-square">{country.slice(0, 2).toLocaleUpperCase()}</div>
                    <div className="flex items-center gap-2">
                        <MdEmail />
                        <span>{email}</span>
                    </div>
                </div>
            </div>
            <Button className="bg-gray-700 p-2 md:px-4" onClick={deleteUser}>
                <ImBin2 />
            </Button>
        </div>
    );
}
