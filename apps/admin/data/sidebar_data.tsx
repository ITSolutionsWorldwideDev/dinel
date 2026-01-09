import { all_routes } from "@/data/all_routes";
const route = all_routes;

export const SidebarData = [
  {
    label: "Main",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: "layout-grid",
        link: "/dashboard",
      },
    ],
  },
  {
    label: "Inventory",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Inventory",
    submenuItems: [
      {
        label: "Category",
        link: "/category",
        icon: "list-details",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Media",
        link: "/media",
        icon: "table-plus",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "Jobs Management",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Jobs Management",
    submenuItems: [
      {
        label: "Jobs",
        link: "/jobs",
        icon: "shield-up",
        showSubRoute: false,
      },
    ],
  },

  {
    label: "Content (CMS)",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Content (CMS)",
    submenuItems: [
      {
        label: "Blog",
        link: "/blogs",
        icon: "wallpaper",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },

  {
    label: "User Management",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "User Management",
    submenuItems: [
      {
        label: "Partners",
        link: "/partners",
        icon: "users-group",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Users",
        link: "/users",
        icon: "shield-up",
        showSubRoute: false,
      },
    ],
  },
  {
    label: "Settings",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Settings",
    submenuItems: [
      {
        label: "Logout",
        // link: "/login",
        icon: "logout",
        action: "logout",
        // showSubRoute: false,
      },
    ],
  },
];