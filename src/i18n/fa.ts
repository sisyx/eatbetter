import { loginFa, registerFa } from "./pages/auth";
import { headerFa } from "./pages/modules";

const fa = {
  ...headerFa,
  ...loginFa,
  ...registerFa
};

export default fa;
