import { tabItems } from "../../Constants/tabs";
import { Button } from "../ui/button";

/**
 * Renders a horizontal bottom tab bar based on the configured `tabItems`.
 *
 * Each tab is rendered as a list item containing a full-width ghost `Button` with the tab's icon.
 *
 * @returns The unordered list element containing one tab item per entry in `tabItems`. Active tabs have an accented background.
 */
export default function BottomTabs() {
  return (
      <ul className="flex text-accent-foreground px-4 pt-1 pb-2">
        {tabItems.map((item) => (
          <li
            key={item.name}
            className={`px-3 py-2 rounded-lg grow ${
              item.isActive ? "bg-accent" : ""
            }`}
          >
            <Button variant="ghost" className="w-full">
              <item.icon className="m-auto" />
            </Button>
          </li>
        ))}
      </ul>
  );
}