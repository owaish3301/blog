import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../ui/button";
import followSuggestion from "./whoToFollowMockData";
import { UserIcon } from "lucide-react";

function UserAvatar({ imgLink, name }: { imgLink?: string; name: string }) {
  if (!imgLink) {
    return <UserIcon className="h-10 w-10 md:h-8 md:w-8" />;
  }
  return (
    <img
      src={imgLink}
      alt={`${name}'s profile picture`}
      className="h-10 w-10 md:h-8 md:w-8 rounded-full object-cover"
    />
  );
}

export default function WhoToFollow() {
  return (
    <Card className="gap-2 w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Who to follow</CardTitle>
      </CardHeader>
      <CardContent className="">
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <ul className="flex gap-3 px-4 pb-4 w-max">
            {followSuggestion.map((item) => (
              <li
                key={item.userId}
                className="flex flex-col items-center text-center gap-2 p-4 bg-accent rounded-xl min-w-[160px]"
              >
                <UserAvatar imgLink={item.imgLink} name={item.name} />
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">@{item.userId}</p>
                <Button size="sm" className="rounded w-full">
                  Follow
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: Vertical list */}
        <ul className="hidden md:block">
          {followSuggestion.map((item) => (
            <li
              key={item.userId}
              className="flex items-center justify-between gap-4 p-2 rounded hover:bg-accent/60 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <UserAvatar imgLink={item.imgLink} name={item.name} />
                <div className="leading-tight">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    @{item.userId}
                  </p>
                </div>
              </div>
              <Button size="sm" className="rounded">
                Follow
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
