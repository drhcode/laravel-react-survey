import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/surveys",
    element: <Surveys />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
