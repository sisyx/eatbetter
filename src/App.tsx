import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./fonts.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRoutes(routes);
  return <>{router}</>;
};

export default App;
