import { IRoutes } from "@types";
import {
  LoginPage,
  OrganizationDashboard,
  SignupPage,
  UserDashboard,
} from "pages";

export const organizationRoutes: IRoutes[] = [
  {
    name: "Dashboard",
    path: "/",
    element: <OrganizationDashboard />,
  },
  {
    name: "Home",
    path: "/organization/home",
    element: <LoginPage />,
  },
];
export const userRoutes: IRoutes[] = [
  {
    name: "Dashboard",
    path: "/",
    element: <UserDashboard />,
  },
  {
    name: "Home",
    path: "/user/home",
    element: <LoginPage />,
  },
];

export const publicRoutes: IRoutes[] = [
  {
    name: "Login",
    path: "/login",
    element: <LoginPage />,
  },
  {
    name: "Signup",
    path: "/signup",
    element: <SignupPage />,
  },
];
