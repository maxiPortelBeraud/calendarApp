import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthRouter, CalendarRouter } from "./";

import { authRoutes } from "../auth/routes/authRoures";
import { calendarRoutes } from "../calendar/routes/calendarRoutes";

const router = createBrowserRouter([
  {
    path: "/auth/",
    element: <AuthRouter />,
    children: authRoutes,
  },
  {
    path: "/",
    element: <CalendarRouter />,
    children: calendarRoutes,
  },
]);
export const AppRouter = () => {
  //const { status } = useCheckAuth();
  const status = "checking"; /* checking notAuth auth */
  if (status === "auth") return; //<SpinnerAuth />;
  return <RouterProvider router={router} />;
};
