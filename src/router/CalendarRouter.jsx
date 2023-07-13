import { Navigate, Outlet } from "react-router-dom";

export const CalendarRouter = () => {
  //const { status } = useCheckAuth();
  //const status = "auth"; /* notAuth auth */
  //if (status === "notAuth") return <Navigate to="/auth/login" />;
  return <Outlet />;
};
