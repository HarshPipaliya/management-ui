import { Routes } from "enum";

interface IUserMenus {
  name: string;
  path: string;
}

export const userMenus: IUserMenus[] = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Profile",
    path: Routes.USER_PROFILE,
  },
];
