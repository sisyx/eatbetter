import Home from "./pages/Home";
import Diet from "./pages/Diet/Diet";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Cooperate from "./pages/Cooperate/Cooperate";
import Index from "./pages/UserPanel/Index/Index";
import Profile from "./pages/UserPanel/Profile/Profile";
import Progress from "./pages/UserPanel/Progress/Progress";
import Sleep from "./pages/UserPanel/Sleep/Sleep";
import Notifications from "./pages/UserPanel/Notifications";

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
];

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diet",
    element: <Diet />,
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
