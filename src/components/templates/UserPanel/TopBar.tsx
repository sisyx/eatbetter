import React from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { Button } from "../../shadcn/ui/button";
import { Link } from "react-router-dom";
import { TbMoneybag } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex w-full justify-between border-b border-main px-5 py-3">
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-5">
        <Link
          to={"/"}
          className="flex gap-2 text-main transition-colors hover:text-mainHover"
        >
          <FaRegChartBar />
          <p className="text-sm"> نمودار پیشرفت </p>
        </Link>
        <Link to={"/"}>
          <Button className="flex gap-2" variant={"main"}>
            <TbMoneybag />
            <p className="text-sm">120,000 ه.ت </p>
          </Button>
        </Link>
        <Button variant={"default"}>
          <span>{t("headerlang")}</span>
          <IoLanguage />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
