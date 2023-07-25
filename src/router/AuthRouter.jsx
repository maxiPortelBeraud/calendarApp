import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const AuthRouter = () => {
  const { status } = useAuthStore();
  /* notAuthenticated authenticated */
  if (status === "notAuthenticated") return <Outlet />;
  return <Navigate to="/*" />;
};
