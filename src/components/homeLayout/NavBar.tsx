import { BellIcon, MoonIcon, SearchIcon, SunIcon, User } from "lucide-react";
import { Input } from "../ui/input";

import { useTheme } from "../../theme/theme-context";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

export default function NavBar() {
    const { theme, setTheme } = useTheme();

    const {signout} = useAuth();
    //TODO:This is temprory 
  return (
    <nav className="p-4 flex justify-between items-center text-accent-foreground ">
      <Button variant="ghost" aria-label="Home">
        <img src="/logo.svg" alt="Blog Logo" className="w-8 h-8" />
      </Button>

      <div className="relative hidden sm:block">
        <SearchIcon className="absolute translate-y-1/4 left-2" />
        <Input
          className="pl-10"
          type="search"
          placeholder="Search..."
          name="search"
        />
      </div>

      <div className="flex gap-4 items-center">
        <Button
          size="icon"
          variant="secondary"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative flex items-center justify-center w-9 h-9 rounded-md hover:bg-accent transition-colors cursor-pointer"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button size="icon" variant="secondary">
          <BellIcon className="cursor-pointer" />
        </Button>
        <Button size="icon" variant="secondary" onClick={ async ()=>{ await signout(); toast.success("Sign out successfull")}}>
          <User className="cursor-pointer" />
          {/* TODO:Add dropdown */}
        </Button>
      </div>
    </nav>
  );
}
