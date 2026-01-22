import {
  BookmarkIcon,
  HomeIcon,
  SearchIcon,
  SendIcon,
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
  {
    name: "Post",
    icon: SendIcon,
    isActive: false,
    customStyle: `bg-slate-600 dark:bg-sky-50 rounded-full`,
    isDesktopOnly: true,
  },
];
