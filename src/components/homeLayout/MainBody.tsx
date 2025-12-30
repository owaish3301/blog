import { ScrollArea } from "../../components/ui/scroll-area";
import { tabItems } from "../../Constants/tabs"
import TrendingNow from "../homePageContent/TrendingNow";
import WhoToFollow from "../homePageContent/WhoToFollow";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator"

export default function MainBody () {
  return (
    <div className="sm:flex h-full w-full">
      <aside className="hidden sm:flex h-full">
        {/* left sidebar */}
        <ul className="flex flex-col gap-2 px-4 py-6">
          {tabItems.map((item) => (
            <li key={item.name}>
              <div
                className={`flex rounded-xl gap-4 p-2 ${
                  item.isActive ? "bg-accent" : ""
                }`}
              >
                <Button variant="ghost" className="w-full">
                  <item.icon /> {item.name}
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Separator orientation="vertical" />
      </aside>

      <main className="h-full w-full px-4 py-2">
        <ScrollArea className="h-full">
          <div className="md:hidden pb-[100px]">
            <WhoToFollow />
          </div>
        </ScrollArea>
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
