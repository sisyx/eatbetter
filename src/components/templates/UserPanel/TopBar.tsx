import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";
import { Button } from "../../shadcn/ui/button";
import { Link } from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import SideBar from "./SideBar";
import { MdMenu } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
// import { GrNotification } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState, useEffect } from "react";
import { authStore } from "../../../stores/auth";

const TopBar = () => { 
  const { i18n, t } = useTranslation();
  const { userData } = authStore((state) => state);

  const [language, setLanguage] = useState(i18next.language);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <div className="flex w-full justify-between border-b border-main px-3 py-3 xs:px-5">
      <div className="flex">
        <Sheet>
          <SheetTrigger className="text-2xl lg:!hidden">
            <div className="flex items-center gap-2 rounded-full border-[#0000005c] bg-[#a0a0a054] p-1 pl-2 pr-3 text-2xl outline-none focus-visible:border-0 xs:!hidden">
              <MdMenu />

              <img
                alt="avatar"
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
                className="h-8 w-8 rounded-full"
              />
            </div> 
            <MdMenu className="ml-3 hidden xs:!block" />
          </SheetTrigger>
          <SheetContent
            className="w-64 rounded-l-xl border-0 !p-0 outline-0 xs:w-[300px]"
            dir="rtl"
          >
            <SheetTitle></SheetTitle>
            <SideBar className="rounded-l-xl" />
          </SheetContent>
        </Sheet>
        <div className="hidden items-center gap-2 xs:!flex">
          <img
            className="w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
            alt=""
          />
          <div className="text-sm">
            <p>{userData?.username}</p>
            <p className="text-main">{t('topbar.role')}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 xs:gap-5">
        <Link
          to={"/userPanel/progress"}
          className="flex gap-2 text-main transition-colors hover:text-mainHover"
        >
          <FaRegChartBar className="ml-1 xs:!ml-0" />
          <p className="hidden text-sm sm:!block"> {t('topbar.progress')}</p>
        </Link>
        <Button
          onClick={() => setLanguage(i18next.language == "en" ? "fa" : "en")}
          className="h-8 border border-main bg-transparent px-2 text-main hover:bg-main hover:text-white xs:!h-10 xs:!px-4"
        >
          <span>{t("headerlang")}</span>
          <IoLanguage />
        </Button>

        {/* <Link className="text-sm sm:text-base" to={"/userPanel/notifications"}>
          <Button
            className="flex h-8 gap-2 px-2 xs:!h-10 xs:!px-4"
            variant={"default"}
          >
            <GrNotification />
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default TopBar;
