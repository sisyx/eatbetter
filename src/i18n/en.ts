import { adminPanelEn } from "./pages/adminPanel";
import { loginEn, registerEn } from "./pages/auth";
import {  homeEn } from "./pages/home";
import { footerEn, headerEn } from "./pages/modules";
import { userPanelEn } from "./pages/userPanel";

const en = {
  ...headerEn,
  ...footerEn,
  ...loginEn,
  ...homeEn,
  ...registerEn,
  ...userPanelEn,
  ...adminPanelEn,
};

export default en;
 