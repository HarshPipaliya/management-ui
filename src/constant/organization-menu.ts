import { Routes } from "enum";

interface IOrganizationMenus {
  name: string;
  path: string;
}

export const organizationMenus: IOrganizationMenus[] = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "User Management",
    path: Routes.USER_MANAGEMENT,
  },
];
