import { IRoutes } from "@types";
import { Routes } from "enum";
import {
  LoginPage,
  OrganizationDashboard,
  SignupPage,
  UserDashboard,
  UserMangement,
  UserProfile,
} from "pages";

export const organizationRoutes: IRoutes[] = [
  {
    name: "Dashboard",
    path: "/",
    element: <OrganizationDashboard />,
  },
  {
    name: "User Management",
    path: Routes.USER_MANAGEMENT,
    element: <UserMangement />,
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
    path: Routes.USER_PROFILE,
    element: <UserProfile />,
  },
];

export const publicRoutes: IRoutes[] = [
  {
    name: "Login",
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
  {
    name: "Signup",
    path: Routes.SIGNUP,
    element: <SignupPage />,
  },
];
