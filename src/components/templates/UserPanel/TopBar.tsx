import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { Button } from "../../shadcn/ui/button";
import { Link } from "react-router-dom";
import { TbMoneybag } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import SideBar from "./SideBar";
import { MdMenu } from "react-icons/md";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="xs:px-5 flex w-full justify-between border-b border-main px-3 py-3">
      <div className="flex">
        <Sheet>
          <SheetTrigger className="text-2xl lg:!hidden">
            <div className="xs:!hidden flex items-center gap-2 rounded-full border-[#0000005c] bg-[#a0a0a054] p-1 pl-2 pr-3 text-2xl outline-none focus-visible:border-0">
              <MdMenu />

              <img
                alt="avatar"
                loading="lazy"
                src="https://avatars.githubusercontent.com/u/127773108?v=4"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <MdMenu className="xs:!block ml-3 hidden" />
          </SheetTrigger>
          <SheetContent
            className="xs:w-[300px] w-64 rounded-l-xl border-0 !p-0 outline-0"
            dir="rtl"
          >
            <SheetTitle></SheetTitle>
            <SideBar className="rounded-l-xl" />
          </SheetContent>
        </Sheet>
        <div className="xs:!flex hidden items-center gap-2">
          <img
            className="w-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/127773108?v=4"
            alt=""
          />
          <div className="text-sm">
            <p> شاهین مشکل گشا</p>
            <p className="text-main">کاربر عادی</p>
          </div>
        </div>
      </div>

      <div className="xs:gap-5 flex items-center gap-2">
        <Link
          to={"/"}
          className="flex gap-2 text-main transition-colors hover:text-mainHover"
        >
          <FaRegChartBar className="xs:!ml-0 ml-1" />
          <p className="hidden text-sm sm:!block"> نمودار پیشرفت </p>
        </Link>
        <Link className="text-sm sm:text-base" to={"/"}>
          <Button
            className="xs:!px-4 xs:!h-10 flex h-8 gap-2 px-2"
            variant={"main"}
          >
            <TbMoneybag />
            <p className="hidden text-sm sm:!block">120,000 ه.ت </p>
          </Button>
        </Link>
        <Button className="xs:!px-4 xs:!h-10 h-8 px-2" variant={"default"}>
          <span>{t("headerlang")}</span>
          <IoLanguage />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
