import { FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigation, useParams } from "react-router-dom";
import {
  MdOutlineAccountCircle,
  MdOutlineSportsBaseball,
  MdAttachMoney,
} from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shadcn/ui/accordion";

import { IoFastFoodOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { GiNightSleep } from "react-icons/gi";
import { Button } from "../../shadcn/ui/button";
import { PiMedalLight } from "react-icons/pi";

import { TbMoneybag } from "react-icons/tb";
const SideBar = ({ className }: { className?: string }) => {
  const links = [
    {
      title: "داشبورد",
      href: "/userpanel",
      icon: <FaHome className="text-2xl" />,
    },
    {
      title: "حساب کاربری",
      href: "/userpanel/profile",
      icon: <MdOutlineAccountCircle className="text-2xl" />,
    },
    {
      title: "ورزش ها",
      href: "/userpanel",
      icon: <MdOutlineSportsBaseball className="text-2xl" />,
    },
    {
      title: "دفتر کار شما",
      subLinks: [
        {
          title: "کیف پول",
          href: "/userPanel/wallet",
        },
        {
          title: "نمودار درآمد ها",
          href: "/userPanel/income",
        },
        {
          title: "معرفی ها",
          href: "/userPanel/introductions",
        },
        {
          title: "آموزش رایگان",
          href: "/userPanel/training",
        },
      ],
      icon: <IoFastFoodOutline className="text-2xl" />,
    },
    // {
    //   title: "انواع رژیم ها ",
    //   href: "/userpanel",
    //   icon: <IoFastFoodOutline className="text-2xl" />,
    // },
    {
      title: "متخصص تغذیه",
      href: "/userpanel",
      icon: <FaUserDoctor className="text-2xl" />,
    }, 
    {
      title: "چالش ها",
      href: "/userpanel/challenges",
      icon: <PiMedalLight className="text-2xl" />,
    },
    {
      title: "کلینیک مدیریت وزن و سلامتی ",
      href: "/userpanel/health",
      icon: <MdAttachMoney className="text-2xl" />,
    },
    {
      title: "خواب و روان",
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
        <div className="flex items-center justify-between px-3">
          <Link className="text-sm sm:text-base" to={"/"}>
            <Button
              className="flex h-8 items-center gap-2 border border-white px-2"
              variant={"main"}
            >
              <TbMoneybag />
              <p className="mt-1 text-xs xs:text-sm sm:mt-0">120,000 ه.ت </p>
            </Button>
          </Link>
          <Link to={"/"}>
            <img
              src="/BLP-b-white.png"
              alt="logo"
              width="80px"
              className="mx-auto"
            />
          </Link>
        </div>
      </div>{" "}
      <section>
        <ul className="space-y-5 pt-10 [&>*]:relative [&>*]:z-50">
          {links.map((link) =>
            link.subLinks ? (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="border-0" value={`item-1`}>
                  <AccordionTrigger className="border-0 px-5 py-0 outline-none hover:!no-underline">
                    <div className="flex gap-3">
                      {link.icon}
                      {link.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 space-y-2 px-10">
                    {link.subLinks.map((sublink) => (
                      <Link
                        to={sublink.href}
                        className={`flex flex-row-reverse items-center justify-end gap-3 rounded-r-full text-sm`}
                      >
                        <li className="list-disc">{sublink.title}</li>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                to={link.href}
                className={`${param.pathname.slice(11) === link.href.slice(11) ? "bg-white py-2 text-main" : ""} flex flex-row-reverse items-center justify-end gap-3 rounded-r-full px-5`}
              >
                <li>{link.title}</li>
                {link.icon}
              </Link>
            ),
          )}

          {/* <svg
            className="!absolute bottom-[53px] !z-10 w-full"
            style={{ transform: "scale(3.5)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f3f4f5"
              fill-opacity="1"
              d="M0,160L15,165.3C30,171,60,181,90,165.3C120,149,150,107,180,80C210,53,240,43,270,74.7C300,107,330,181,360,181.3C390,181,420,107,450,112C480,117,510,203,540,240C570,277,600,267,630,245.3C660,224,690,192,720,192C750,192,780,224,810,208C840,192,870,128,900,106.7C930,85,960,107,990,112C1020,117,1050,107,1080,85.3C1110,64,1140,32,1170,42.7C1200,53,1230,107,1260,128C1290,149,1320,139,1350,138.7C1380,139,1410,149,1425,154.7L1440,160L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
            ></path>
          </svg> */}

          <div className="!absolute bottom-0 pb-3 z-50 flex w-full cursor-pointer flex-row-reverse items-center justify-center gap-4 px-5 pt-3 font-bold text-main bg-white">
            <li>خروج</li>
            <CiLogout className="text-2xl" />
          </div>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
