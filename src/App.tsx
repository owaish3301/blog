import { Separator } from "./components/ui/separator";
import NavBar from "./components/homeLayout/NavBar";
import BottomTabs from "./components/homeLayout/BottomTabs";
import SideBars from "./components/homeLayout/SideBars";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* top part */}
      <NavBar />
      <Separator />

      {/* the main body part */}
      <div className="relative flex-1 min-h-0 w-full">
        <BottomTabs />
        <SideBars />
      </div>
    </div>
  );
}
