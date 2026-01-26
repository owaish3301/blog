import { ScrollArea } from "../ui/scroll-area";
import TrendingNow from "./TrendingNow";
import WhoToFollow from "./WhoToFollow";

import { Separator } from "../ui/separator"

export default function MainBody () {
  return (
    <div className="w-full h-full flex">
      
      <main className="h-full w-full px-4 py-2 overflow-y-auto">
        <div className="lg:hidden pb-[100px]">
          <WhoToFollow />
        </div>
      </main>

      <Separator orientation="vertical" />

      <aside className="w-max h-full hidden lg:block px-4 py-6">
        {/* right sidebar */}
        <ScrollArea className="h-full">
          <TrendingNow />
          <WhoToFollow />
        </ScrollArea>
      </aside>
    </div>
  );
}
