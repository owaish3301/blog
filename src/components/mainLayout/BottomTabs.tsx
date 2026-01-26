import { Button } from "../ui/button";
import { useTabs } from "../../context/TabsContext";
import { NavLink } from "react-router";

export default function BottomTabs() {
  
  const {tabs, switchTab} = useTabs();

  return (
    <ul className="flex text-accent-foreground px-4 pt-1 pb-2">
      {tabs.map((item) => (
        <li
          key={item.name}
          className={`grow ${item.isDesktopOnly ? "hidden" : ""}`}
        >
          <Button
            variant="ghost"
            className="w-full h-full p-0"
            onClick={() => switchTab(item.name)}
          >
            <NavLink to={item.navigateTo} className="w-full h-full p-3 rounded-lg">
              <item.icon className="m-auto" />
            </NavLink>
          </Button>
        </li>
      ))}
    </ul>
  );
}
