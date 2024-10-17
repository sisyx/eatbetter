import Home from "./pages/Home";
import Diet from "./pages/Diet/Diet";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
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
];

export default routes;

