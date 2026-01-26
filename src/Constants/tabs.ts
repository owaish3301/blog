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
    navigateTo:"/home"
  },
  {
    name: "Trending",
    icon: TrendingUpIcon,
    navigateTo:"/trending"
  },
  {
    name: "Search",
    icon: SearchIcon,
    navigateTo:"/search"
  },
  {
    name: "Saved",
    icon: BookmarkIcon,
    navigateTo:"/saved"
  },
  {
    name: "Post",
    icon: SendIcon,
    customStyle: `bg-slate-600 dark:bg-sky-50 rounded-full`,
    isDesktopOnly: true,
    navigateTo: "/new-post"
  },
];
