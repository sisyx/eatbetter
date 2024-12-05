import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineAccountCircle, 
  MdAttachMoney,
} from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shadcn/ui/accordion";

import { GiNightSleep } from "react-icons/gi";
import { PiMedalLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";
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
      title: t('adminsideBar.users'),
      href: "/adminPanel/users",
      icon: <MdOutlineAccountCircle className="text-2xl" />,
    },
    {
      title:  t('adminsideBar.packages'),
      href: "/adminPanel/packages",
      icon: <PiMedalLight className="text-2xl" />,
    },
    {
      title: t('sideBar.health'),
      href: "/userpanel/health",
      icon: <MdAttachMoney className="text-2xl" />,
    },
    {
      title: t('sideBar.sleep'),
      href: "/userpanel/sleep",
      icon: <GiNightSleep className="text-2xl" />,
    },
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
            // link.subLinks ? (
            //   <Accordion type="single" collapsible className="w-full">
            //     <AccordionItem className="border-0" value={`item-1`}>
            //       <AccordionTrigger className="border-0 px-5 py-0 outline-none hover:!no-underline">
            //         <div className="flex gap-3">
            //           {link.icon}
            //           {link.title}
            //         </div>
            //       </AccordionTrigger>
            //       <AccordionContent className="mt-4 space-y-2 px-10">
            //         {link.subLinks.map((sublink) => (
            //           <Link
            //             to={sublink.href}
            //             className={`flex flex-row-reverse items-center justify-end gap-3 rounded-r-full text-sm`}
            //           >
            //             <li className="list-disc">{sublink.title}</li>
            //           </Link>
            //         ))}
            //       </AccordionContent>
            //     </AccordionItem>
            //   </Accordion>
            // ) : (
              <Link
                to={link.href}
                className={`${param.pathname.slice(11) === link.href.slice(11) ? "bg-white py-2 text-main" : ""} flex flex-row-reverse items-center justify-end gap-3 rounded-r-full px-5`}
              >
                <li>{link.title}</li>
                {link.icon}
              </Link>
          //   ),
          )}
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
