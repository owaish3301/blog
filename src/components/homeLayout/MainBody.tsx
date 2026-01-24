import { ScrollArea } from "../../components/ui/scroll-area";
import NewPost from "../homePageContent/NewPost";
import TrendingNow from "../homePageContent/TrendingNow";
import WhoToFollow from "../homePageContent/WhoToFollow";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator"
import { useTabs } from "../../context/TabsContext";

export default function MainBody () {


  const {tabs, switchTab} = useTabs();

  return (
    <div className="sm:flex h-full w-full">
      <aside className="hidden sm:flex h-full">
        {/* left sidebar */}
        <ul className="flex flex-col gap-2 px-4 py-6">
          {tabs.map((item) => (
            <li key={item.name}>
              <div
                className={`flex gap-4 p-2 ${
                  item.isActive ? "bg-accent" : ""
                } ${item.customStyle ? item.customStyle : "rounded-xl"}`}
              >
                <Button
                  onClick={()=>switchTab(item.name)}
                  variant="ghost"
                  className={`w-full ${item.isDesktopOnly ? "hover:bg-slate-600 dark:hover:bg-sky-50 text-white dark:text-accent hover:text-white" : ""}`}
                >
                  <item.icon /> {item.name}
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Separator orientation="vertical" />
      </aside>

      <main className="h-full w-full px-4 py-2 overflow-y-auto">
        <NewPost />
        <div className="md:hidden pb-[100px]">
          <WhoToFollow />
        </div>
      </main>

      <Separator orientation="vertical" />

      <aside className="w-max h-full hidden md:block px-4 py-6">
        {/* right sidebar */}
        <ScrollArea className="h-full">
          <TrendingNow />
          <WhoToFollow />
        </ScrollArea>
      </aside>
    </div>
  );
}
