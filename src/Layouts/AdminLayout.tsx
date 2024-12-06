import SideBar from "../components/templates/AdminPanel/SideBar";
import TopBar from "../components/templates/AdminPanel/TopBar";
import { useTranslation } from "react-i18next";

type Props = { children: React.ReactNode };

const UserLayout = ({ children }: Props) => {
  const { i18n } = useTranslation();

  return (
    <div dir={`${i18n.language === "fa" ? "rtl" : "ltr"}`} className="flex">
      <SideBar className="hidden lg:!block" />
      <div className="w-full">
        <TopBar />
        <div data-aos="fade-up" className="relative px-4 py-7 xs:!p-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
