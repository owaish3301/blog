import { useContext } from "react";
import { Button } from "../ui/button";
import { TabsContext } from "../../context/TabsContext";

export default function BottomTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  const {tabs, switchTab} = ctx;

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
