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

import Blogs from "./pages/Blogs/Blogs";
import { Blog } from "./pages/Blogs/Blog";

// admin panel imports
import Users from './components/templates/AdminPanel/Users/Users';
import { Packages as ApPackages } from "./components/templates/AdminPanel/Packages/Packages";
import AdminContacts from './components/templates/AdminPanel/ContactUs/Contacts';
import CooperateCardsList from "./components/templates/AdminPanel/Cooperate/CooperateCardsList";
import { CharityCardsList } from "./components/templates/AdminPanel/CharityWallet/CharityCardsList";
import AdminBlogs from "./components/templates/AdminPanel/Blogs/Blogs";
import { SuccessFullPayment } from "./pages/Payment/SuccessfulPayment";
import UnsuccessFullPayment from "./pages/Payment/UnsuccessfulPayment";
import Withdrawals from "./components/templates/AdminPanel/Withdrawals/index";
import Transactions from "./components/templates/AdminPanel/Transactions/index";

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

const adminPanelRoutes = [ 
  {
    path: "/adminPanel/users",
    element: <Users />,
  },
  {
    path: '/adminPanel/packages',
    element: <ApPackages />
  },
  {
    path: "/adminPanel/contact",
    element: <AdminContacts />
  },
  {
    path: "/adminPanel/cooperate",
    element: <CooperateCardsList />
  },
  {
    path: "/adminPanel/charityWallet",
    element: <CharityCardsList />
  },
  {
    path: "/adminPanel/blogs",
    element: <AdminBlogs />
  },
  {
    path: "/adminPanel/withdrawals",
    element: <Withdrawals />
  },
  {
    path: "/adminPanel/Transactions",
    element: <Transactions />
  }
]

const otherRoutes = [
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
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/successfunPayment",
    element: <SuccessFullPayment />
  },
  {
    path: "/unsuccessfunPayment",
    element: <UnsuccessFullPayment />
  },
];

const routes = [
  ...adminPanelRoutes,
  ...userPanelRoutes,
  ...otherRoutes,
]

export default routes;
