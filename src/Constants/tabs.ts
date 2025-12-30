import {
  BookmarkIcon,
  HomeIcon,
  SearchIcon,
  TrendingUpIcon,
} from "lucide-react";

import type { TabItemsTypes } from "./tabsType";

export const tabItems: TabItemsTypes[] = [
  {
    name: "Home",
    icon: HomeIcon,
    isActive: true,
  },
  {
    name: "Trending",
    icon: TrendingUpIcon,
    isActive: false,
  },
  {
    name: "Search",
    icon: SearchIcon,
    isActive: false,
  },
  {
    name: "Saved",
    icon: BookmarkIcon,
    isActive: false,
  },
];
