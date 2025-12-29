import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../ui/button";
import followSuggestion from "./whoToFollowMockData";
import { UserIcon } from "lucide-react";
/**
 * Render a "Who to follow" card that lists suggested users.
 *
 * The card displays each suggested user's avatar (or a fallback icon when no image is available),
 * the user's name, and a "Follow" button.
 *
 * @returns A React element containing the card with the list of suggested users
 */
export default function WhoToFollow() {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle>Who to follow</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {followSuggestion.map((item) => (
            <li
              key={item.userId}
              className="flex gap-2 mb-6 px-2 py-1 rounded items-center justify-between hover:bg-accent/60 cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                {item.imgLink === undefined ? (
                  <UserIcon className="h-8 w-8" />
                ) : (
                  <img
                    src={item.imgLink}
                    alt="profile pic"
                    className="h-8 w-8"
                  />
                )}
                <p>{item.name}</p>
              </div>
                <Button className="rounded">Follow</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}