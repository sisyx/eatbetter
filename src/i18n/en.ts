import { dietsEn } from "./pages/Diets";
import { aboutEn } from "./pages/about";
import { adminPanelEn } from "./pages/adminPanel";
import { loginEn, registerEn } from "./pages/auth";
import { blogsEn } from "./pages/blogs";
import { contactsEn } from "./pages/contacts";
import { cookingsEn } from "./pages/cookings";
import { cooperateEn } from "./pages/cooperate";
import { homeEn } from "./pages/home";
import { footerEn, headerEn } from "./pages/modules";
import { userPanelEn } from "./pages/userPanel";

const en = {
  ...headerEn,
  ...footerEn,
  ...loginEn,
  ...homeEn,
  ...aboutEn,
  ...contactsEn,
  ...cooperateEn,
  ...registerEn,
  ...dietsEn,
  ...userPanelEn,
  ...adminPanelEn,
  ...blogsEn,
  ...cookingsEn,
};

export default en;
