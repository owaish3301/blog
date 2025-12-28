import { tabItems } from "../Constants/tabs"
import { Separator } from "./ui/separator"

export default function SideBars () {
  return (
    <div className="hidden sm:flex h-full">
      <div className="w-1/5 h-full">
        {/* left sidebar */}
        <ul className="flex flex-col gap-2 p-4">
          {tabItems.map((item) => (
            <li key={item.name}>
              <div
                className={`flex rounded-xl gap-4 p-2 ${
                  item.isActive ? "bg-accent" : ""
                }`}
              >
                <item.icon /> {item.name}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Separator orientation="vertical" />

      <div></div>

      <Separator orientation="vertical" />

      <div className="w-1/5 h-full hidden lg:block">{/* right sidebar */}</div>
    </div>
  );
}
