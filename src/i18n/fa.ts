import { loginFa, registerFa } from "./pages/auth";
import { homeFa } from "./pages/home";
import { footerFa, headerFa } from "./pages/modules";
import { userPanelFa } from "./pages/userPanel";
import { adminPanelFa } from "./pages/adminPanel";

const fa = {
  ...headerFa,
  ...footerFa,
  ...loginFa,
  ...homeFa,
  ...registerFa,
  ...userPanelFa,
  ...adminPanelFa,
};

export default fa;
