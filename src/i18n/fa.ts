import { loginFa, registerFa } from "./pages/auth";
import { footerFa } from "./pages/home";
import { headerFa } from "./pages/modules";
import { userPanelFa } from "./pages/userPanel";
import { adminPanelFa } from "./pages/adminPanel";

const fa = {
  ...headerFa,
  ...footerFa,
  ...loginFa,
  ...registerFa,
  ...userPanelFa,
  ...adminPanelFa,
};

export default fa;
 