import { Button } from "../ui/button";
import { useTabs } from "../../context/TabsContext";

export default function BottomTabs() {
  
  const {tabs, switchTab} = useTabs();

  return (
      <ul className="flex text-accent-foreground px-4 pt-1 pb-2">
        {tabs.map((item) => (
          <li
            key={item.name}
            className={`px-3 py-2 rounded-lg grow ${
              item.isActive ? "bg-accent" : ""
            } ${item.isDesktopOnly?"hidden" :""}`}
          >
            <Button variant="ghost" className="w-full" onClick={()=>switchTab(item.name)}>
              <item.icon className="m-auto" />
            </Button>
          </li>
        ))}
      </ul>
  );
}
