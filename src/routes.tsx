import Home from "./pages/Home";
import Diet from "./pages/Diet/Diet";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diet",
    element: <Diet />,
  },
];

export default routes;

