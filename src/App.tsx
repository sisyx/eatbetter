import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./fonts.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToUp from "./utils/ScrollToUp";
import { Toaster } from "./components/shadcn/ui/toaster";
import Auth from "./utils/auth";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRoutes(routes);
  return (
    <>
      <ScrollToUp />
      <Auth/>
      {router}
      <Toaster />
    </>
  );
};

export default App;
