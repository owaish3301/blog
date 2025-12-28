import {
  BookmarkIcon,
  HomeIcon,
  SearchIcon,
} from "lucide-react";

import type { TabItemsTypes } from "./tabsType";

export const tabItems: TabItemsTypes[] = [
  {
    name: "Home",
    icon: HomeIcon,
    isActive: true,
  },
  {
    name: "Saved",
    icon: BookmarkIcon,
    isActive: false,
  },
  {
    name: "Search",
    icon: SearchIcon,
    isActive: false,
  },
];
