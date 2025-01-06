import {
  Link,
  useLocation, 
  useRoutes, 
} from "react-router-dom";
import routes from "./routes";
import "./fonts.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToUp from "./utils/ScrollToUp";
import { Toaster } from "./components/shadcn/ui/toaster";
import Auth from "./utils/auth";
import { useLanguagePersistence } from "./hooks/useLanguagePersistence";
import { RiAdminLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { authStore } from "./stores/auth";

const App: React.FC = () => {
  useLanguagePersistence();

  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRoutes(routes);
  const { i18n } = useTranslation();
  const location = useLocation();
  const { userData } = authStore((state) => state);

  return (
    <>
      <ScrollToUp />
      <Auth />
      {router}
      <Toaster /> 
      {userData &&
      userData.role === "admin" &&
      location.pathname.slice(0, 11) !== "/adminPanel" ? (
        <Link
          to={"/adminPanel/users"}
          className={`fixed bottom-4 left-5 z-30 flex items-center gap-1 rounded-full bg-main p-4 text-white transition-colors hover:bg-mainHover max-sm:p-3`}
        >
          <RiAdminLine className="mx-auto mb-1 text-xl" />
          <p className="text-sm">
            {i18n.language === "fa" ? "پنل ادمین" : "Admin Panel"}
          </p>
        </Link>
      ) : null}
    </>
  );
};

export default App;
