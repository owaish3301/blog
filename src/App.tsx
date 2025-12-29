import { Separator } from "./components/ui/separator";
import NavBar from "./components/homeLayout/NavBar";
import BottomTabs from "./components/homeLayout/BottomTabs";
import MainBody from "./components/homeLayout/MainBody";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* top part */}
      <NavBar />
      <Separator />

      {/* the main body part */}
      <div className="relative flex-1 min-h-0 w-full">
        <div className="block sm:hidden absolute bottom-0 w-full">
          <Separator />
          <BottomTabs />
        </div>

        <MainBody />
        
      </div>
    </div>
  );
}
