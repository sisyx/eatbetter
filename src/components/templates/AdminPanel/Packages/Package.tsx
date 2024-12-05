import { GoPackage } from "react-icons/go";
import { PackageProps } from "./types";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { SiIfood } from "react-icons/si";
import { FaHamburger, FaPen } from "react-icons/fa";
import { formatNumberWithCommas } from "../../../../utils/numbers";

const Package = (props: PackageProps) => {
    const {name, currency, maxDiet, price} = props;

    return (
        <div className="group relative flex flex-col gap-3 items-center justify-center aspect-video rounded-md border-2 bg-main text-white bg-opacity-90 hover:bg-opacity-100 cursor-pointer transition-all duration-100">
            <span className="absolute bottom-0 translate-y-1/3 rounded-full bg-black p-2 text-3xl">
                <SiIfood />
            </span>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl bg-black opacity-0 group-hover:opacity-60 transition-all duration-150">
                <FaPen />
            </span>
            <span className="flex items-center gap-1 text-2xl font-extrabold">
                <span className="rounded-full bg-gray-700 text-white p-1">
                    <GoPackage />
                </span>
                {name}
            </span>
            <div className="flex flex-col justify-center gap-2">
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <PiCurrencyCircleDollarFill className="text-gray-700" />
                    </span>
                    {currency}
                </span>
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <FaHamburger className="text-gray-700" />
                    </span>
                    {maxDiet.toString()}
                </span>
                <span className="flex items-center gap-1 text-xl">
                    <span className="rounded-full bg-white text-gray-700 p-1">
                        <PiCurrencyCircleDollarFill className="text-gray-700" />
                    </span>
                    {formatNumberWithCommas(price)}
                </span>
            </div>
        </div>
    );
}

export default Package