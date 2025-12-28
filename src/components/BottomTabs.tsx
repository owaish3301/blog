import { Separator } from "./ui/separator";
import { tabItems } from "../Constants/tabs";

export default function BottomTabs() {
  return (
    <div className="block sm:hidden absolute bottom-0 w-full">
      <Separator />

      <div className="flex text-accent-foreground px-4 pt-1 pb-2">
        {tabItems.map((item) => (
          <div
            key={item.name}
            className={`px-3 py-2 rounded-lg grow ${
              item.isActive ? "bg-accent" : ""
            }`}
          >
            <item.icon className="m-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
