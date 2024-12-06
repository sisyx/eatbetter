import { adminPanelEn } from "./pages/adminPanel";
import { loginEn, registerEn } from "./pages/auth";
import { footerEn } from "./pages/home";
import { headerEn } from "./pages/modules";
import { userPanelEn } from "./pages/userPanel";

const en = {
  ...headerEn,
  ...footerEn,
  ...loginEn,
  ...registerEn,
  ...userPanelEn,
  ...adminPanelEn,
};

export default en;
 