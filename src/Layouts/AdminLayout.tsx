import { useEffect } from "react";
import SideBar from "../components/templates/AdminPanel/SideBar";
import TopBar from "../components/templates/AdminPanel/TopBar";
import { useTranslation } from "react-i18next";
import { authStore } from "../stores/auth";
import { useNavigate } from "react-router-dom";

type Props = { children: React.ReactNode };

const UserLayout = ({ children }: Props) => {
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      if (userData.role !== "admin") navigate("/");
    }
  }, [userData]);

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
