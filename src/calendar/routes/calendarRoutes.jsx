import { Navigate } from "react-router-dom";
import { CalendarPage } from "../pages/CalendarPage";

export const calendarRoutes = [
  {
    path: "/",
    element: <CalendarPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];
