import { Separator } from "../components/ui/separator";
import NavBar from "../components/mainLayout/NavBar";
import BottomTabs from "../components/mainLayout/BottomTabs";
import { Outlet } from "react-router";
import LeftSideBar from "../components/mainLayout/LeftSideBar";

export default function MainLayout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* top part */}
      <NavBar />
      <Separator />

      {/* the main body part */}
      <div className="relative flex-1 min-h-0 w-full">
        <div className="block sm:hidden fixed bottom-0 w-full z-10 bg-background">
          <Separator />
          <BottomTabs />
        </div>

        <div className="sm:flex h-full w-full">
          <LeftSideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
