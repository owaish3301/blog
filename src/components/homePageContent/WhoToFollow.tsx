import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../ui/button";
import followSuggestion from "./whoToFollowMockData";
import { UserIcon } from "lucide-react";

export default function WhoToFollow() {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle>Who to follow</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ScrollArea className="w-full">
          <ul className="flex md:block">
            {followSuggestion.map((item) => {
              const handle = item.userId;
              return (
                <li
                  key={item.userId}
                  className="cursor-pointer shrink-0 min-w-[200px] md:min-w-0"
                >
                  {/* Desktop / large screens: keep original compact card-style */}
                  <div className="hidden md:flex gap-4 mb-1 py-2  px-1 items-center justify-between hover:bg-accent/60 rounded">
                    <div className="flex gap-2 items-center">
                      {item.imgLink === undefined ? (
                        <UserIcon className="h-8 w-8" />
                      ) : (
                        <img
                          src={item.imgLink}
                          alt={`${item.name}'s profile picture`}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      )}
                      <div className="leading-tight">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          @{handle}
                        </p>
                      </div>
                    </div>
                    <Button className="rounded">Follow</Button>
                  </div>

                  {/* Mobile / small screens: Instagram-style in-feed suggestion */}
                  <div className="flex md:hidden flex-col items-center text-center gap-2 py-2 mx-2 bg-accent rounded-xl">
                    {item.imgLink === undefined ? (
                      <UserIcon className="h-12 w-12" />
                    ) : (
                      <img
                        src={item.imgLink}
                        alt={`${item.name}'s profile picture`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-sm text-muted-foreground">@{handle}</p>
                    <Button className="rounded px-4 py-1 text-sm w-full max-w-[140px]">
                      Follow
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
