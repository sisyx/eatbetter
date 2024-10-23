import Home from "./pages/Home";
import Diets from "./pages/Diets/Diets";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Cooperate from "./pages/Cooperate/Cooperate";
import Index from "./pages/UserPanel/Index/Index";
import Profile from "./pages/UserPanel/Profile/Profile";
import Progress from "./pages/UserPanel/Progress/Progress";
import Sleep from "./pages/UserPanel/Sleep/Sleep";
import Notifications from "./pages/UserPanel/Notifications/Notifications";
import Health from "./pages/UserPanel/Health/Health";
import Diet from "./pages/UserPanel/Health/Diet/Diet";
import Challenges from "./pages/UserPanel/Challenges/Challenges";
import Challenge from "./pages/UserPanel/Challenges/Challenge/Challenge";
import Training from "./pages/UserPanel/Training/Training";
import Introductions from "./pages/UserPanel/Introductions/Introductions";
import Income from "./pages/UserPanel/Income/Income";
import Wallet from "./pages/UserPanel/Wallet/Wallet";

const userPanelRoutes = [
  {
    path: "/userPanel",
    element: <Index />,
  },
  {
    path: "/userPanel/profile",
    element: <Profile />,
  },
  {
    path: "/userPanel/progress",
    element: <Progress />,
  },
  {
    path: "/userPanel/sleep",
    element: <Sleep />,
  },
  {
    path: "/userPanel/notifications",
    element: <Notifications />,
  },
  {
    path: "/userPanel/health",
    element: <Health />,
  },
  {
    path: "/userPanel/health/:id",
    element: <Diet />,
  },
  {
    path: "/userPanel/challenges",
    element: <Challenges />,
  },
  {
    path: "/userPanel/challenges/:id",
    element: <Challenge />,
  },
  {
    path: "/userPanel/wallet",
    element: <Wallet />,
  },
  {
    path: "/userPanel/income",
    element: <Income />,
  },
  {
    path: "/userPanel/introductions",
    element: <Introductions />,
  },
  {
    path: "/userPanel/training",
    element: <Training />,
  },
];

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diets",
    element: <Diets />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cooperate",
    element: <Cooperate />,
  },
  ...userPanelRoutes,
];

export default routes;
