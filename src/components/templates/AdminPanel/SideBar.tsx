import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { RiShakeHandsFill } from "react-icons/ri";
import { PiBankFill } from "react-icons/pi";
import { GiNightSleep } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";

const SideBar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const links = [
    {
      title: t('adminsideBar.home'),
      href: "/",
      icon: <FaHome className="text-2xl" />,
      subLinks: undefined
    },
    {
      title: t('adminsideBar.withdrawal'),
      href: "/adminPanel/withdrawals",
      icon: <BiMoneyWithdraw />
    },
    {
      title: t('adminsideBar.users'),
      href: "/adminPanel/users",
      icon: <MdOutlineAccountCircle className="text-2xl" />,
    },
    {
      title:  t('adminsideBar.packages'),
      href: "/adminPanel/packages",
      icon: <IoMdSettings className="text-2xl" />,
    },
    {
      title: t('adminsideBar.contact'),
      href: "/adminPanel/contact",
      icon: <LuMessagesSquare className="text-2xl" />,
    },
    {
      title: t('adminsideBar.cooperate'),
      href: "/adminPanel/cooperate",
      icon: <RiShakeHandsFill className="text-2xl" />,
    },
    {
      title: t('adminsideBar.charity'),
      href: "/adminPanel/charityWallet",
      icon: <PiBankFill className="text-2xl" />,
    },
    {
      title: t("adminsideBar.blogs"),
      href: "/adminPanel/blogs",
      icon: <GiNightSleep className="text-2xl" />,
    },
    {
      title: t("adminsideBar.transactions"),
      href: "/adminPanel/transactions",
      icon: <GrTransaction className="text-2xl" />,
    }
  ];
  const param = useLocation(); 

  return (
    <aside
      className={`${className ? className : ""} sticky bottom-0 top-0 h-full min-h-screen min-w-[255px] overflow-hidden bg-main py-3 text-white`}
    >
      <div className="border-b border-white pb-[1.3rem]">
        <div className="flex flex-col gap-4 items-center justify-between px-3">
          <Link to={"/"}>
            <img
              src="/BLP-b-white.png"
              alt="logo"
              width="80px"
              className="mx-auto"
              />
          </Link>
          <span className="text-3xl font-extrabold">پنل ادمین</span>
        </div>
      </div>
      <section>
        <ul className="space-y-7 pt-10 [&>*]:relative [&>*]:z-50">
          {links.map((link) =>
              <Link
                to={link.href}
                className={`${param.pathname.slice(11) === link.href.slice(11) ? "bg-white py-2 text-main" : ""} flex flex-row-reverse items-center justify-end gap-3 rounded-s-full px-5`}
              >
                <li>{link.title}</li>
                {link.icon}
              </Link>
          )}
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
