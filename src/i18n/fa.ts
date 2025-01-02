import { loginFa, registerFa } from "./pages/auth";
import { homeFa } from "./pages/home";
import { footerFa, headerFa } from "./pages/modules";
import { userPanelFa } from "./pages/userPanel";
import { adminPanelFa } from "./pages/adminPanel";
import { aboutFa } from "./pages/about";
import { contactsFa } from "./pages/contacts";
import { cooperateFa } from "./pages/cooperate";
import { blogsFa } from "./pages/blogs";
import { dietsFa } from "./pages/Diets";
import { cookingsFa } from "./pages/cookings";
import { trainigFa } from "./pages/trainings";
import { paymentFa } from "./pages/pyament";

const fa = {
  ...headerFa,
  ...footerFa,
  ...loginFa,
  ...homeFa,
  ...aboutFa,
  ...contactsFa,
  ...cooperateFa,
  ...registerFa,
  ...dietsFa,
  ...userPanelFa,
  ...adminPanelFa,
  ...blogsFa,
  ...cookingsFa,
  ...trainigFa,
  ...paymentFa,
};

export default fa;
