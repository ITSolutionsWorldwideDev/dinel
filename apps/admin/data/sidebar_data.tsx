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
      {
        label: "Applications",
        link: "/applications",
        icon: "file",
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
        label: "Candidates",
        link: "/candidates",
        icon: "users-group",
        showSubRoute: false,
        submenu: false,
      },
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
  },// Candidates
  {
    label: "Settings",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Settings",
    submenuItems: [
      {
        label: "General Settings",
        link: "/settings",
        icon: "settings",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Logout",
        // link: "#",
        icon: "logout",
        action: "logout",
        
        // showSubRoute: false,
        // submenu: false,
      },
    ],
  },
];