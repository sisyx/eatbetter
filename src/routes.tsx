import Home from "./pages/Home";
import Diets from "./pages/Diets/Diets";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Cooperate from "./pages/Cooperate/Cooperate";
import Profile from "./pages/UserPanel/Profile/Profile";
import Progress from "./pages/UserPanel/Progress/Progress";
import PanelSleep from "./pages/UserPanel/Sleep/Sleep";
import Notifications from "./pages/UserPanel/Notifications/Notifications";
import Health from "./pages/UserPanel/Health/Health";
import Diet from "./pages/UserPanel/Health/Diet/Diet";
import Challenges from "./pages/UserPanel/Challenges/Challenges";
import Challenge from "./pages/UserPanel/Challenges/Challenge/Challenge";
import PanelTraining from "./pages/UserPanel/Training/Training";
import Introductions from "./pages/UserPanel/Introductions/Introductions";
import Income from "./pages/UserPanel/Income/Income";
import Wallet from "./pages/UserPanel/Wallet/Wallet";
import Stock from "./pages/UserPanel/Wallet/Stock/Stock";
import Withdrawal from "./pages/UserPanel/Wallet/Withdrawal/Withdrawal";
import Training from "./pages/Training/Training";
import Sleep from "./pages/Sleep/Sleep";
import Cooking from "./pages/Cooking/Cooking";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Packages from "./pages/Packages/Packages";

const userPanelRoutes = [
  {
    path: "/userpanel/profile",
    element: <Profile />,
  },

  {
    path: "/userPanel/progress",
    element: <Progress />,
  },
  {
    path: "/userPanel/sleep",
    element: <PanelSleep />,
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
    element: <PanelTraining />,
  },
  {
    path: "/userPanel/wallet/stock",
    element: <Stock />,
  },
  {
    path: "/userPanel/wallet/withdrawal",
    element: <Withdrawal />,
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
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/sleep",
    element: <Sleep />,
  },
  {
    path: "/cooking",
    element: <Cooking />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  ...userPanelRoutes,
];

export default routes;
