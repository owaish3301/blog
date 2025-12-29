import { Separator } from "../ui/separator";
import { tabItems } from "../../Constants/tabs";
import { Button } from "../ui/button";

export default function BottomTabs() {
  return (
    <div className="block sm:hidden absolute bottom-0 w-full">
      <Separator />

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
    </div>
  );
}
