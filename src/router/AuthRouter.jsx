import { Navigate, Outlet } from "react-router-dom";

export const AuthRouter = () => {
  //const { status } = useCheckAuth();
  const status = "auth"; /* notAuth auth */
  if (status === "auth") return <Navigate to="/*" />;
  return <Outlet />;
};
