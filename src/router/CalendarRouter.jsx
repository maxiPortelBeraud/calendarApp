import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const CalendarRouter = () => {
  const { status } = useAuthStore();
  /* notAuthenticated authenticated */
  if (status === "authenticated") return <Outlet />;
  return <Navigate to="/auth/login" />;
};
