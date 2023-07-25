import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthRouter, CalendarRouter } from "./";

import { authRoutes } from "../auth/routes/authRoures";
import { calendarRoutes } from "../calendar/routes/calendarRoutes";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

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
  const { status, checkAuthToken } = useAuthStore();
  useEffect(() => {
    checkAuthToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* checking notAuthenticated authenticated */
  if (status === "checking") return <h3>Cargando...</h3>; //<SpinnerAuth />;
  return <RouterProvider router={router} />;
};
