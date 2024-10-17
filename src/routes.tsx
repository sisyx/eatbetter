import Home from "./pages/Home";
import Diet from "./pages/Diet/Diet";
import Contacts from "./pages/Contacts/Contacts";
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
];

export default routes;

