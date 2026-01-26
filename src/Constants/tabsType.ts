import type { LucideIcon } from "lucide-react";

export interface TabItemsTypes {
  name: string;
  icon: LucideIcon;
  customStyle?: string,
  isDesktopOnly?: boolean,
  navigateTo : string,
}
