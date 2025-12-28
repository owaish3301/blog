import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { Separator } from "./ui/separator";
import { BookmarkIcon, HomeIcon, SearchIcon, type LucideProps } from "lucide-react";

interface TabItems {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  isActive?: boolean;
}

const tabItems: TabItems[] = [
  {
    name: "Home",
    icon: HomeIcon,
    isActive: true,
  },
  {
    name: "ReadingList",
    icon: BookmarkIcon,
    isActive: false,
  },
  {
    name: "Search",
    icon: SearchIcon,
    isActive: false,
  },
];

export default function BottomTabs() {
  return (
    <div className="block sm:hidden">
      <Separator />

      <div className="flex text-accent-foreground px-4 pt-1 pb-2">
        {tabItems.map((item) => (
          <div key={item.name} className={`px-3 py-2 rounded-lg grow ${item.isActive?"bg-accent": ""}`}>
            <item.icon className="m-auto"/>
          </div>
        ))}
      </div>
    </div>
  );
}
