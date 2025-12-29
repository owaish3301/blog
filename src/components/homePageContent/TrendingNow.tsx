import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

import trendingNowData from "./trendingNowMockData";

/**
 * Renders a "Trending now" card containing a list of links for trending posts.
 *
 * Each trending item is rendered as a link that navigates to the item's `link`
 * and displays the item's `title`.
 *
 * @returns The component's rendered JSX element (a card with trending links).
 */
export default function TrendingNow() {
  return (
    <Card className="gap-2 mb-4">
    <CardHeader>
        <CardTitle>Trending now</CardTitle>
    </CardHeader>
    <CardContent>
        {
        trendingNowData.map((data) => (
            <div key={data.postId}>
            <Link
                to={data.link}
                className="block px-2 py-1 rounded hover:bg-accent/60 hover:underline text-sm font-medium text-sky-600 dark:text-sky-400 truncate"
                aria-label={`Open ${data.title}`}
            >
                {data.title}
            </Link>
            </div>
        ))
        }
    </CardContent>
    </Card>
  );
}