import { ScrollArea } from "../ui/scroll-area";
import TrendingNow from "./TrendingNow";
import WhoToFollow from "./WhoToFollow";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function MainBody() {
  const navigate = useNavigate();
  const { session } = useAuth();

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

      {/* fab */}
      <div className="sm:hidden fixed z-10 bottom-20 right-5">
        <Button
          variant="secondary"
          size={"icon"}
          className="rounded-full p-2 w-max h-max shadow-lg"
          onClick={() => {
            if (!session) {
              toast.error("Please signin to create a post");
              return;
            }
            navigate("/new-post");
          }}
        >
          <PlusCircleIcon className="size-8" />
        </Button>
      </div>
    </div>
  );
}
