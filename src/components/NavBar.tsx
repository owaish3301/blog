import { BellIcon, MoonIcon, SearchIcon, SunIcon, UserCircleIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserIcon from "/user-circle.svg";

import { useTheme } from "../theme/theme-context";

export default function NavBar() {
    const { theme, setTheme } = useTheme();
  return (
    <nav className="p-4 flex justify-between items-center h-[10%]">
      <img src="/logo.svg" alt="Blog Logo" className="w-8 h-8" />

      <div className="relative hidden sm:block">
        <SearchIcon className="absolute translate-y-1/4 left-2" />
        <Input className="pl-10" type="search" placeholder="Search..." name="search" />
      </div>

      <div className="text-accent-foreground flex gap-4 items-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent transition-colors cursor-pointer"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <BellIcon className="cursor-pointer" />
        <Avatar className="cursor-pointer">
          <AvatarImage src={UserIcon} />
          <AvatarFallback><UserCircleIcon /></AvatarFallback>
          {/* TODO:Add dropdown */}
        </Avatar>
      </div>
    </nav>
  );
}
