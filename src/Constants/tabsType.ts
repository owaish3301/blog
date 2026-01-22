import type { LucideIcon } from "lucide-react";

export interface TabItemsTypes {
  name: string;
  icon: LucideIcon;
  isActive?: boolean;
  customStyle?: string,
  isDesktopOnly?: boolean
}
