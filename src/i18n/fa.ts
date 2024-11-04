import { loginFa, registerFa } from "./pages/auth";
import { headerFa } from "./pages/modules";
import { userPanelFa } from "./pages/userPanel";

const fa = {
  ...headerFa,
  ...loginFa,
  ...registerFa,
  ...userPanelFa
};

export default fa;
 