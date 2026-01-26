import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { useTabs } from "../../context/TabsContext";
import { Separator } from "../ui/separator";

export default function LeftSideBar() {
  const { tabs, switchTab } = useTabs();

  return (
    <aside className="hidden sm:flex h-full">
      {/* left sidebar */}
      <ul className="flex flex-col gap-2 px-4 py-6">
        {tabs.map((item) => (
          <li key={item.name}>
            <div className={`p-2 ${item.customStyle ? item.customStyle : ""}`}>
              <Button
                onClick={() => switchTab(item.name)}
                variant="ghost"
                className={`w-full p-0 ${item.name=="Post" ? "hover:bg-slate-600 dark:hover:bg-sky-50 text-white dark:text-accent hover:text-white" : ""}`}
              >
                <NavLink
                  to={item.navigateTo}
                  className={ ({ isActive } : {isActive:boolean}) =>{
                    return (
                      (isActive
                        ? item.name == "Post"
                          ? ""
                          : "bg-accent"
                        : "") +
                      " flex justify-center items-center w-full h-full gap-1 p-2 rounded-lg"
                    );
                  }}
                >
                  <item.icon /> <p>{item.name}</p>
                </NavLink>
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" />
    </aside>
  );
}
