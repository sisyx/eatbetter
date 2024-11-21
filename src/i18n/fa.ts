import { loginFa, registerFa } from "./pages/auth";
import { footerFa } from "./pages/home";
import { headerFa } from "./pages/modules";
import { userPanelFa } from "./pages/userPanel";

const fa = {
  ...headerFa,
  ...footerFa,
  ...loginFa,
  ...registerFa,
  ...userPanelFa
};

export default fa;
 