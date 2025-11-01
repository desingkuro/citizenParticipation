export interface SidebarInterface {
  mainMenuItems: MenuItem[];
  userMenuItems: MenuItem[];
}

export interface MenuItem {
  icon: string;
  label: string;
  title: string;
  route?: string;
  isActive: boolean;
  permission: boolean;
  children?: MenuItemChild[];
}

export interface MenuItemChild {
  icon: string;
  label: string;
  title: string;
  route: string;
  isActive: boolean;
  permission: boolean;
}
